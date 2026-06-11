(function () {
  var HASH = window._SITE_PW_HASH || '';
  if (!HASH) return;

  var SESSION_KEY = 'site_auth_v1';
  if (sessionStorage.getItem(SESSION_KEY) === 'ok') return;

  document.documentElement.style.overflow = 'hidden';
  var overlay = document.createElement('div');
  overlay.id = 'pw-overlay';
  overlay.innerHTML =
    '<div id="pw-box">' +
      '<div class="pw-icon">🔒</div>' +
      '<h2>회계팀 매뉴얼</h2>' +
      '<p>비밀번호를 입력하세요</p>' +
      '<input type="password" id="pw-input" placeholder="비밀번호" autocomplete="current-password">' +
      '<button id="pw-btn">확인</button>' +
      '<div id="pw-error"></div>' +
    '</div>';

  function mount() { document.body.appendChild(overlay); document.getElementById('pw-input').focus(); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', mount); } else { mount(); }

  async function sha256(str) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0');}).join('');
  }
  async function verify() {
    var input = document.getElementById('pw-input'), errEl = document.getElementById('pw-error'), val = input.value;
    if (!val) return;
    var hash = await sha256(val);
    if (hash === HASH) { sessionStorage.setItem(SESSION_KEY,'ok'); document.documentElement.style.overflow=''; overlay.remove(); }
    else { errEl.textContent='비밀번호가 올바르지 않습니다.'; input.classList.add('shake'); input.value=''; input.focus(); setTimeout(function(){input.classList.remove('shake');},450); }
  }
  function bindEvents() {
    document.getElementById('pw-btn').addEventListener('click', verify);
    document.getElementById('pw-input').addEventListener('keydown', function(e){ if(e.key==='Enter') verify(); });
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', bindEvents); } else { setTimeout(bindEvents, 0); }
})();

// PDF 다운로드 버튼 (사이드바)
(function () {
  function addPdfButton() {
    var nav = document.querySelector('.book-summary nav');
    if (!nav) return;
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding:8px 12px;border-bottom:1px solid rgba(0,0,0,.07);';
    wrapper.innerHTML =
      '<a href="/accounting/assets/manual.pdf" target="_blank" ' +
      'style="display:flex;align-items:center;gap:8px;color:#364149;text-decoration:none;' +
      'font-size:13px;padding:8px 12px;background:#f0f4f8;border-radius:4px;font-weight:500;"' +
      ' onmouseover="this.style.background=\'#dce8f0\'" ' +
      ' onmouseout="this.style.background=\'#f0f4f8\'">' +
      '<span style="font-size:16px;">📥</span><span>PDF 다운로드</span></a>';
    nav.insertBefore(wrapper, nav.firstChild);
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', addPdfButton); } else { addPdfButton(); }
})();
