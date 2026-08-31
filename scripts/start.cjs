const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function findServerBundle() {
  const resultPath = path.resolve(__dirname, '../.vercel/remix-build-result.json');
  if (fs.existsSync(resultPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(resultPath, 'utf8'));
      const bundles = data?.buildManifest?.serverBundles;
      if (bundles && Object.keys(bundles).length > 0) {
        const firstBundle = Object.values(bundles)[0].file;
        if (firstBundle && fs.existsSync(path.resolve(__dirname, '..', firstBundle))) {
          return firstBundle;
        }
      }
    } catch (e) {
      // Fall back to scanning build/server directory
    }
  }

  const serverDir = path.resolve(__dirname, '../build/server');
  if (fs.existsSync(serverDir)) {
    const directIndex = path.join(serverDir, 'index.js');
    if (fs.existsSync(directIndex)) return 'build/server/index.js';

    const subdirs = fs.readdirSync(serverDir);
    for (const sub of subdirs) {
      const subIndex = path.join(serverDir, sub, 'index.js');
      if (fs.existsSync(subIndex)) {
        return `build/server/${sub}/index.js`;
      }
    }
  }

  return 'build/server/index.js';
}

const bundleFile = findServerBundle();
const remixServeBin = path.resolve(__dirname, '../node_modules/@remix-run/serve/dist/cli.js');
const port = process.env.PORT || '3000';

const env = { ...process.env, PORT: port };
const child = spawn(process.execPath, [remixServeBin, bundleFile], {
  stdio: 'inherit',
  env,
});

child.on('exit', code => {
  process.exit(code ?? 0);
});
