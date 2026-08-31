/**
 * RISHABH KUMAR — CINEMATIC ENGINEERING PORTFOLIO
 * Core Client-Side Logic & Interactive Systems Simulators
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCanvas3D();
  initMagneticCursor();
  initAudioSynth();
  init3DTilt();
  initClock();
  initTerminal();
  initArchTabs();
  initBotSimulator();
  initCoursesGlanceSimulator();
  initUbuntuWindowSimulator();
  initWeatherChartSimulator();
  initSkillsFilter();
  initCertModal();
  initComicModal();
  initClipboardActions();
  initContactForm();
  initMobileNav();
  initScrollSpy();
});

/* ==========================================================================
   1. SYSTEM BOOT PRELOADER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preloaderProgress');
  const enterBtn = document.getElementById('skipPreloaderBtn');

  if (!preloader) return;

  let percent = 0;
  const interval = setInterval(() => {
    percent += Math.floor(Math.random() * 15) + 5;
    if (percent >= 100) {
      percent = 100;
      clearInterval(interval);
      if (progress) progress.style.width = '100%';
      setTimeout(dismissPreloader, 400);
    } else {
      if (progress) progress.style.width = `${percent}%`;
    }
  }, 100);

  function dismissPreloader() {
    preloader.classList.add('hidden');
    // Play subtle entry sound if audio is enabled
    playSynthSound('entry');
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', dismissPreloader);
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !preloader.classList.contains('hidden')) {
      e.preventDefault();
      dismissPreloader();
    }
  });
}

/* ==========================================================================
   2. REACTIVE 3D PARTICLE & MATHEMATICAL MESH CANVAS
   ========================================================================== */
function initCanvas3D() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: width / 2, y: height / 2, isHovered: false };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isHovered = true;
  });

  // Create particles
  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 75);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  let scrollVelocity = 0;
  let lastScrollY = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const currentY = window.pageYOffset;
    scrollVelocity = (currentY - lastScrollY) * 0.05;
    lastScrollY = currentY;
  }, { passive: true });

  function render() {
    ctx.clearRect(0, 0, width, height);

    scrollVelocity *= 0.95;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy - scrollVelocity;

      // Mouse interactive deflection
      if (mouse.isHovered) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      // Screen wrap
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
      ctx.fill();

      // Connect neighboring particles with mathematical grid lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 110) * 0.18;
          ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   3. MAGNETIC DUAL CURSOR
   ========================================================================== */
function initMagneticCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function updateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(updateRing);
  }
  requestAnimationFrame(updateRing);

  // Magnetic hover states on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, [data-cursor], input, textarea, .tilt-card');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('active-hover');
      playSynthSound('hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('active-hover');
    });
  });
}

/* ==========================================================================
   4. WEB AUDIO SYNTHESIZER (SFX)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioSynth() {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const label = document.getElementById('soundLabel');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }

    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    soundEnabled = !soundEnabled;
    toggleBtn.classList.toggle('sound-on', soundEnabled);
    if (label) label.textContent = soundEnabled ? 'SFX: ON' : 'SFX: OFF';

    if (soundEnabled) {
      playSynthSound('click');
    }
  });
}

function playSynthSound(type) {
  if (!soundEnabled || !audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.04);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'entry') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (e) {
    // AudioContext blocked or not allowed
  }
}

/* ==========================================================================
   5. 3D PERSPECTIVE TILT ON CARDS
   ========================================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 7.5;
      const rotateY = ((x - centerX) / centerX) * 7.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   6. DYNAMIC IST CLOCK TICKER
   ========================================================================== */
function initClock() {
  const clockEl = document.getElementById('istClock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    try {
      const istString = new Intl.DateTimeFormat('en-GB', options).format(now);
      clockEl.textContent = `IST ${istString}`;
    } catch (e) {
      clockEl.textContent = `IST Active`;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   7. INTERACTIVE DEVELOPER TERMINAL HUD (CLI)
   ========================================================================== */
function initTerminal() {
  const modal = document.getElementById('terminalModal');
  const triggerBtn = document.getElementById('terminalTriggerBtn');
  const closeBtn = document.getElementById('closeTermBtn');
  const cliInput = document.getElementById('terminalCliInput');
  const screen = document.getElementById('terminalOutput');

  if (!modal || !triggerBtn) return;

  const commandHistory = [];
  let historyIndex = -1;

  function openTerminal() {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    playSynthSound('click');
    if (cliInput) setTimeout(() => cliInput.focus(), 50);
  }

  function closeTerminal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  triggerBtn.addEventListener('click', openTerminal);
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeTerminal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === '`' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) openTerminal();
      else closeTerminal();
    }
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeTerminal();
    }
  });

  if (cliInput && screen) {
    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = cliInput.value.trim();
        if (!rawCmd) return;

        commandHistory.push(rawCmd);
        historyIndex = commandHistory.length;

        appendCommandLine(rawCmd);
        executeCommand(rawCmd.toLowerCase());
        cliInput.value = '';
        screen.scrollTop = screen.scrollHeight;
        playSynthSound('click');
      } else if (e.key === 'ArrowUp') {
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          cliInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          cliInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          cliInput.value = '';
        }
      }
    });
  }

  function appendCommandLine(cmd) {
    const div = document.createElement('div');
    div.className = 'term-line';
    div.innerHTML = `<span class="term-prompt-echo text-green">guest@rishabh:~$</span> <span class="text-white">${escapeHtml(cmd)}</span>`;
    screen.appendChild(div);
  }

  function appendOutput(html) {
    const div = document.createElement('div');
    div.className = 'term-line-output';
    div.innerHTML = html;
    screen.appendChild(div);
  }

  function executeCommand(cmd) {
    const parts = cmd.split(' ');
    const primary = parts[0];

    switch (primary) {
      case 'help':
        appendOutput(`
          <div style="margin: 0.5rem 0; color: #94a3b8;">
            <p><strong class="text-cyan">Available System Commands:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 0.25rem;">
              <tr><td style="color:#00f0ff; width: 120px;">about</td><td>Display background, mindset, and affiliations</td></tr>
              <tr><td style="color:#00f0ff;">skills</td><td>Show technical stack across languages & systems</td></tr>
              <tr><td style="color:#00f0ff;">projects</td><td>Overview of engineered systems</td></tr>
              <tr><td style="color:#00f0ff;">rishource</td><td>Deep-dive into flagship Discord bot architecture</td></tr>
              <tr><td style="color:#00f0ff;">badges</td><td>Show LeetCode & HackerRank achievements</td></tr>
              <tr><td style="color:#00f0ff;">education</td><td>Academic standing & CGPA (9.89/10 at LPU)</td></tr>
              <tr><td style="color:#00f0ff;">certs</td><td>List verified technical certifications</td></tr>
              <tr><td style="color:#00f0ff;">story</td><td>Open 6-chapter comic graphic journey</td></tr>
              <tr><td style="color:#00f0ff;">cv / resume</td><td>Download or inspect Rishabh's CV (PDF)</td></tr>
              <tr><td style="color:#00f0ff;">contact</td><td>Print direct contact channels</td></tr>
              <tr><td style="color:#00f0ff;">clear</td><td>Clear terminal screen</td></tr>
            </table>
          </div>
        `);
        break;

      case 'about':
        appendOutput(`
          <p class="text-white"><strong>Rishabh Kumar</strong> — Computer Science Undergraduate & Systems Engineer.</p>
          <p style="color: #94a3b8;">B.Tech in CSE at Lovely Professional University (CGPA 9.89/10). Specializing in high-concurrency bot orchestration, async PostgreSQL pooling, caching layers, and full-stack software development.</p>
        `);
        break;

      case 'skills':
        appendOutput(`
          <div style="color: #94a3b8; line-height: 1.6;">
            <p><strong class="text-cyan">Languages:</strong> Python, C++, C, JavaScript, TypeScript, HTML5, CSS3</p>
            <p><strong class="text-cyan">Frameworks:</strong> React, Next.js, discord.py, discord.js, Redux Toolkit, Prisma, PDF.js, Chart.js</p>
            <p><strong class="text-cyan">Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase Firestore</p>
            <p><strong class="text-cyan">Engineering:</strong> AutoShardedBot, Node-Cache (15-min TTL), Discord OAuth, AsyncIO, Connection Pooling</p>
          </div>
        `);
        break;

      case 'projects':
        appendOutput(`
          <div style="color: #94a3b8;">
            <p>1. <strong class="text-cyan">RISHOURCE:</strong> Modular Discord bot platform, AutoShardedBot, Next.js dashboard, 15-min cache TTL.</p>
            <p>2. <strong class="text-cyan">COURSES GLANCE:</strong> PDF study platform with normalized coordinate text annotations & Firestore sync.</p>
            <p>3. <strong class="text-cyan">PORTFOLIO 2.0:</strong> UbuntuOS browser desktop with drag/minimize/focus window manager.</p>
            <p>4. <strong class="text-cyan">WEATHER NOW:</strong> Real-time meteorological telemetry dashboard with dual-axis Chart.js.</p>
          </div>
        `);
        break;

      case 'rishource':
        appendOutput(`
          <div style="color: #94a3b8; border-left: 2px solid #00f0ff; padding-left: 0.75rem;">
            <p class="text-white"><strong>RISHOURCE ARCHITECTURE</strong></p>
            <p>• AutoShardedBot runtime with dynamic Cog extension discovery.</p>
            <p>• 15-minute Node-Cache TTL for guild data with graceful fallback on 429 RateLimit errors.</p>
            <p>• Asynchronous PostgreSQL connection pooling managed via Prisma.</p>
            <p>• Discord OAuth 2.0 permission-aware administrative dashboard built with Next.js & TypeScript.</p>
            <p>• 5-level rotating structured file logging with caller metadata.</p>
          </div>
        `);
        break;

      case 'badges':
        appendOutput(`
          <div style="color: #94a3b8;">
            <p>• <strong class="text-white">200+</strong> Problems Solved across competitive programming platforms.</p>
            <p>• <strong class="text-cyan">HackerRank:</strong> Gold in Python, Silver in C, Silver in SQL.</p>
            <p>• <strong class="text-cyan">LeetCode:</strong> 50 Days Streak Badge, Mathematical I, Data Navigator, Introduction to Pandas.</p>
          </div>
        `);
        break;

      case 'education':
        appendOutput(`
          <div style="color: #94a3b8;">
            <p>• <strong class="text-white">Lovely Professional University:</strong> B.Tech Computer Science (2025–Present) — <span class="text-green font-bold">CGPA: 9.89 / 10</span></p>
            <p>• <strong class="text-white">PM Shree KV No. 2 Ambala Cantt:</strong> Class XII — <span class="text-cyan font-bold">90.6%</span> | Class X: <span class="text-cyan font-bold">87.6%</span></p>
          </div>
        `);
        break;

      case 'certs':
        appendOutput(`
          <div style="color: #94a3b8;">
            <p>• Complete Web Development Course — Udemy (100 hrs)</p>
            <p>• Computer Programming — LPU / iamneo (150 hrs)</p>
            <p>• Programming Fundamentals using Python — Infosys Springboard</p>
            <p>• Modern Database Systems (CS403) — Saylor Academy (Grade: 86%)</p>
            <p>• Introduction to Python (CS105) — Saylor Academy (Grade: 100%)</p>
            <p>• OpenAI Hackathon Engineering Certification</p>
          </div>
        `);
        break;

      case 'story':
        closeTerminal();
        const comicBtn = document.getElementById('openComicModalBtn');
        if (comicBtn) comicBtn.click();
        break;

      case 'cv':
      case 'resume':
        appendOutput(`<p class="text-cyan">Opening CV: <a href="personal/cv.pdf" target="_blank" class="text-white" style="text-decoration: underline;">personal/cv.pdf</a></p>`);
        window.open('personal/cv.pdf', '_blank');
        break;

      case 'contact':
        appendOutput(`
          <div style="color: #94a3b8;">
            <p>Email: <a href="mailto:kumar.r.070706@gmail.com" class="text-cyan">kumar.r.070706@gmail.com</a></p>
            <p>Phone: <a href="tel:+919306208755" class="text-cyan">+91-9306208755</a></p>
            <p>GitHub: <a href="https://github.com/rishabhkumaar" target="_blank" class="text-cyan">github.com/rishabhkumaar</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/rishabhkumaar" target="_blank" class="text-cyan">linkedin.com/in/rishabhkumaar</a></p>
          </div>
        `);
        break;

      case 'clear':
        screen.innerHTML = '';
        break;

      default:
        appendOutput(`<p style="color: #ef4444;">Command not recognized: '${escapeHtml(cmd)}'. Type <span class="text-cyan">help</span> for available commands.</p>`);
        break;
    }
  }
}

/* ==========================================================================
   8. RISHOURCE ARCHITECTURE TABS
   ========================================================================== */
function initArchTabs() {
  const tabs = document.querySelectorAll('.arch-tab-btn');
  const panels = document.querySelectorAll('.arch-tab-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
      playSynthSound('click');
    });
  });
}

/* ==========================================================================
   9. RISHOURCE BOT SIMULATOR
   ========================================================================== */
function initBotSimulator() {
  const input = document.getElementById('simInput');
  const sendBtn = document.getElementById('simSendBtn');
  const screen = document.getElementById('simOutput');
  const chips = document.querySelectorAll('.chip-cmd');

  if (!input || !sendBtn || !screen) return;

  function runSim(cmd) {
    const cleanCmd = cmd.replace('/', '').trim().toLowerCase();
    if (!cleanCmd) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'sim-line user-line';
    userDiv.textContent = `> /${cleanCmd}`;
    screen.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.className = 'sim-line bot-line';

    switch (cleanCmd) {
      case 'status':
        botDiv.innerHTML = `<span class="bot-tag">BOT</span> <strong>Rishource Operational</strong> • Shards: 12/12 online • Latency: 19ms • Ping: 16ms`;
        break;
      case 'shard':
        botDiv.innerHTML = `<span class="bot-tag">BOT</span> <strong>AutoShardedBot Gateway:</strong> Shard #02 allocated (Cluster Alpha). Concurrency healthy.`;
        break;
      case 'cache':
        botDiv.innerHTML = `<span class="bot-tag">BOT</span> <strong>Node-Cache Telemetry:</strong> 15-min TTL active • 1,420 cached guilds • 0 rate-limit dropouts.`;
        break;
      case 'stats':
        botDiv.innerHTML = `<span class="bot-tag">BOT</span> <strong>Runtime Metrics:</strong> PostgreSQL Pool: 8 active conn • Cogs: 9 loaded • Memory: 142MB.`;
        break;
      case 'clear':
        screen.innerHTML = '<div class="sim-line system-line">[SYSTEM] Console cleared.</div>';
        return;
      case 'help':
      default:
        botDiv.innerHTML = `<span class="bot-tag">BOT</span> <strong>Available Commands:</strong> <code>/status</code>, <code>/shard</code>, <code>/cache</code>, <code>/stats</code>, <code>/clear</code>`;
        break;
    }

    screen.appendChild(botDiv);
    screen.scrollTop = screen.scrollHeight;
    playSynthSound('click');
  }

  sendBtn.addEventListener('click', () => {
    runSim(input.value);
    input.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runSim(input.value);
      input.value = '';
    }
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      runSim(chip.getAttribute('data-cmd'));
    });
  });
}

/* ==========================================================================
   10. LIVE SIMULATOR: COURSES GLANCE PDF COORDINATE HIGHLIGHT
   ========================================================================== */
function initCoursesGlanceSimulator() {
  const viewport = document.getElementById('pdfSimViewport');
  const highlight = document.getElementById('pdfHighlightBox');
  const readout = document.getElementById('pdfCoordOutput');
  const textEl = document.getElementById('pdfSelectableText');

  if (!viewport || !highlight || !readout || !textEl) return;

  viewport.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const vpRect = viewport.getBoundingClientRect();

    if (rect.width > 0 && rect.height > 0) {
      const relX = Math.max(0, rect.left - vpRect.left);
      const relY = Math.max(0, rect.top - vpRect.top);
      const relW = Math.min(rect.width, vpRect.width - relX);
      const relH = Math.min(rect.height, vpRect.height - relY);

      highlight.style.left = `${relX}px`;
      highlight.style.top = `${relY}px`;
      highlight.style.width = `${relW}px`;
      highlight.style.height = `${relH}px`;

      // Calculate normalized 0.0 - 1.0 coordinate vector
      const normX = (relX / vpRect.width).toFixed(2);
      const normY = (relY / vpRect.height).toFixed(2);
      const normW = (relW / vpRect.width).toFixed(2);
      const normH = (relH / vpRect.height).toFixed(2);

      readout.textContent = `{"page": 1, "x": ${normX}, "y": ${normY}, "w": ${normW}, "h": ${normH}}`;
      playSynthSound('click');
    }
  });
}

/* ==========================================================================
   11. LIVE SIMULATOR: PORTFOLIO 2.0 DRAGGABLE UBUNTU WINDOW
   ========================================================================== */
function initUbuntuWindowSimulator() {
  const windowEl = document.getElementById('miniUbuntuWindow');
  const titleBar = document.getElementById('miniTitleBar');
  const area = document.getElementById('ubuntuSimArea');

  if (!windowEl || !titleBar || !area) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initLeft = 10;
  let initTop = 10;

  titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initLeft = windowEl.offsetLeft;
    initTop = windowEl.offsetTop;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const areaRect = area.getBoundingClientRect();
    const winRect = windowEl.getBoundingClientRect();

    let newLeft = initLeft + dx;
    let newTop = initTop + dy;

    // Constrain within sim area
    newLeft = Math.max(0, Math.min(newLeft, areaRect.width - winRect.width));
    newTop = Math.max(0, Math.min(newTop, areaRect.height - winRect.height));

    windowEl.style.left = `${newLeft}px`;
    windowEl.style.top = `${newTop}px`;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   12. LIVE SIMULATOR: WEATHER NOW DUAL-AXIS CANVAS GRAPH
   ========================================================================== */
function initWeatherChartSimulator() {
  const canvas = document.getElementById('weatherSimChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let timeOffset = 0;

  function drawChart() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    timeOffset += 0.03;

    // Draw Temperature curve (Amber)
    ctx.beginPath();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    for (let x = 0; x <= w; x += 5) {
      const y = h * 0.45 + Math.sin(x * 0.02 + timeOffset) * 18 + Math.cos(x * 0.01) * 8;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw Humidity curve (Cyan)
    ctx.beginPath();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    for (let x = 0; x <= w; x += 5) {
      const y = h * 0.65 + Math.cos(x * 0.025 + timeOffset * 0.8) * 16 - Math.sin(x * 0.015) * 6;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(drawChart);
  }

  requestAnimationFrame(drawChart);
}

/* ==========================================================================
   13. TECHNICAL SKILLS MATRIX FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-pill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      playSynthSound('click');
    });
  });
}

/* ==========================================================================
   14. CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initCertModal() {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const closeBtn = document.getElementById('closeCertModalBtn');
  const certCards = document.querySelectorAll('.cert-card');

  if (!modal || !modalImg) return;

  function openCert(src, title) {
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || 'Certificate Inspection';
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    playSynthSound('click');
  }

  function closeCert() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }

  certCards.forEach((card) => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-cert-img');
      const title = card.getAttribute('data-cert-title');
      if (src) openCert(src, title);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCert);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCert();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeCert();
    }
  });
}

/* ==========================================================================
   15. COMIC GRAPHIC STORY MODAL (6 CHAPTERS)
   ========================================================================== */
function initComicModal() {
  const modal = document.getElementById('comicModal');
  const openBtns = [
    document.getElementById('openComicModalBtn'),
    document.getElementById('openComicModalBtn2'),
    document.getElementById('openVisualStoryBtn')
  ].filter(Boolean);
  const closeBtn = document.getElementById('closeComicModalBtn');
  const prevBtn = document.getElementById('comicPrevBtn');
  const nextBtn = document.getElementById('comicNextBtn');
  const modalImg = document.getElementById('comicModalImg');
  const modalTitle = document.getElementById('comicModalTitle');
  const pageCounter = document.getElementById('comicPageCounter');
  const captionEl = document.getElementById('comicCaption');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  if (!modal || !modalImg) return;

  const chapters = [
    {
      title: "Chapter 1: The Blank Screen",
      src: "comic/1.png",
      caption: `"For me, a blank screen isn't empty. It's an opportunity to build." — Every builder starts somewhere.`
    },
    {
      title: "Chapter 2: Before Building Systems, I Built My Foundation",
      src: "comic/2.png",
      caption: `PM Shree Kendriya Vidyalaya (90.6%) ➔ Lovely Professional University B.Tech CSE (9.89/10 CGPA).`
    },
    {
      title: "Chapter 3: Building The Toolkit",
      src: "comic/3.png",
      caption: `"I didn't want to just collect technologies. I wanted to understand how they work together."`
    },
    {
      title: "Chapter 4 & 5: Rishource & Thinking Like An Engineer",
      src: "comic/4.png",
      caption: `AutoSharding, 15-minute Node-Cache TTL, rate-limiting fallbacks & structured logging.`
    },
    {
      title: "Chapter 6 & 7: Proof of Progress",
      src: "comic/5.png",
      caption: `200+ Problems Solved, LeetCode 50 Days Badge, HackerRank Gold & Silver, verified certifications.`
    },
    {
      title: "Chapter 8: The Next Level",
      src: "comic/6.png",
      caption: `"The story doesn't end with what I've built. It begins with what I build next." — Learn ➔ Build ➔ Impact.`
    }
  ];

  let currentIndex = 0;

  function renderChapter(index) {
    if (index < 0) index = 0;
    if (index >= chapters.length) index = chapters.length - 1;
    currentIndex = index;

    const data = chapters[currentIndex];
    modalImg.src = data.src;
    if (modalTitle) modalTitle.textContent = data.title;
    if (pageCounter) pageCounter.textContent = `${currentIndex + 1} / ${chapters.length}`;
    if (captionEl) captionEl.textContent = data.caption;

    thumbBtns.forEach((btn, i) => {
      if (i === currentIndex) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    playSynthSound('click');
  }

  function openModal(startIndex = 0) {
    renderChapter(startIndex);
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    playSynthSound('entry');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtns.forEach((btn) => btn.addEventListener('click', () => openModal(0)));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) renderChapter(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < chapters.length - 1) renderChapter(currentIndex + 1);
    });
  }

  thumbBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => renderChapter(i));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        renderChapter(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < chapters.length - 1) {
        renderChapter(currentIndex + 1);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
}

/* ==========================================================================
   16. CLIPBOARD COPY ACTIONS & TOAST
   ========================================================================== */
function initClipboardActions() {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  const copyButtons = document.querySelectorAll('[data-copy]');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.remove('hidden');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
    playSynthSound('click');
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
        }).catch(() => {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied: ${text}`);
    } catch (err) {
      showToast(`Please copy manually: ${text}`);
    }
    document.body.removeChild(textArea);
  }
}

/* ==========================================================================
   17. CONTACT FORM DISPATCH
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const senderName = document.getElementById('senderName');
  const senderEmail = document.getElementById('senderEmail');
  const messageSubject = document.getElementById('messageSubject');
  const messageBody = document.getElementById('messageBody');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const bodyError = document.getElementById('bodyError');
  const notice = document.getElementById('formStatusNotice');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!senderName.value.trim()) {
      if (nameError) nameError.classList.add('visible');
      isValid = false;
    } else {
      if (nameError) nameError.classList.remove('visible');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(senderEmail.value.trim())) {
      if (emailError) emailError.classList.add('visible');
      isValid = false;
    } else {
      if (emailError) emailError.classList.remove('visible');
    }

    if (!messageSubject.value.trim()) {
      if (subjectError) subjectError.classList.add('visible');
      isValid = false;
    } else {
      if (subjectError) subjectError.classList.remove('visible');
    }

    if (!messageBody.value.trim()) {
      if (bodyError) bodyError.classList.add('visible');
      isValid = false;
    } else {
      if (bodyError) bodyError.classList.remove('visible');
    }

    if (isValid) {
      if (notice) notice.classList.remove('hidden');
      playSynthSound('entry');

      const subjectEncoded = encodeURIComponent(`[Portfolio Transmission] ${messageSubject.value.trim()}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Rishabh,\n\n${messageBody.value.trim()}\n\nBest regards,\n${senderName.value.trim()} (${senderEmail.value.trim()})`
      );

      setTimeout(() => {
        window.location.href = `mailto:kumar.r.070706@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
      }, 700);
    }
  });
}

/* ==========================================================================
   18. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mob-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    drawer.classList.toggle('hidden');
    playSynthSound('click');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   19. SMOOTH SCROLL SPY FOR NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
}

/* Helper function to escape HTML */
function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, (s) => entityMap[s]);
}
