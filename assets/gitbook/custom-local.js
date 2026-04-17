(function () {
  var HASH = window._SITE_PW_HASH || '';
  if (!HASH) return; // 비밀번호 미설정 시 통과

  var SESSION_KEY = 'site_auth_v1';
  if (sessionStorage.getItem(SESSION_KEY) === 'ok') return; // 이미 인증됨

  // 페이지 콘텐츠 숨기기 (오버레이 표시 전 깜빡임 방지)
  document.documentElement.style.overflow = 'hidden';

  // 오버레이 생성
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

  // DOM 준비 후 삽입
  function mount() {
    document.body.appendChild(overlay);
    document.getElementById('pw-input').focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

  // SHA-256 해시 계산 (SubtleCrypto API)
  async function sha256(str) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf))
      .map(function (b) { return b.toString(16).padStart(2, '0'); })
      .join('');
  }

  async function verify() {
    var input = document.getElementById('pw-input');
    var errEl = document.getElementById('pw-error');
    var val = input.value;

    if (!val) return;

    var hash = await sha256(val);

    if (hash === HASH) {
      sessionStorage.setItem(SESSION_KEY, 'ok');
      document.documentElement.style.overflow = '';
      overlay.remove();
    } else {
      errEl.textContent = '비밀번호가 올바르지 않습니다.';
      input.classList.add('shake');
      input.value = '';
      input.focus();
      setTimeout(function () { input.classList.remove('shake'); }, 450);
    }
  }

  // 이벤트 연결 (오버레이 마운트 후)
  function bindEvents() {
    document.getElementById('pw-btn').addEventListener('click', verify);
    document.getElementById('pw-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') verify();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEvents);
  } else {
    // mount()가 동기적으로 이미 실행됐으면 바로 바인딩
    setTimeout(bindEvents, 0);
  }
})();
