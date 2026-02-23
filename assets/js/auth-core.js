// Validates the input against system-data.js
function validateAccess() {
    const inputID = document.getElementById('id_field').value;
    const inputKey = document.getElementById('key_field').value;

    console.log("Authentication request sent to core...");

    // Check credentials
    if (inputID === MASTER_CONFIG.operator_id && inputKey === MASTER_CONFIG.security_key) {
        showNotice("ACCESS GRANTED. Welcome, Operator.", "ok");
        console.log("Login successful.");
        setTimeout(() => { window.location.href = "portal.html"; }, 1000);
    } else {
        showNotice("CRITICAL ERROR: Access Denied. Identity mismatch.", "err");
        console.error("Failed login attempt detected.");
    }
}

function showNotice(message, type) {
    let notice = document.querySelector('.notice');
    if (!notice) {
        notice = document.createElement('p');
        notice.className = 'notice';
        const frame = document.querySelector('.login-frame');
        frame.insertBefore(notice, frame.querySelector('.divider') || frame.querySelector('.form-container'));
    }
    notice.textContent = message;
    notice.style.color = type === 'ok' ? 'var(--neon-green)' : 'var(--red-alert)';
    notice.style.borderColor = type === 'ok' ? 'var(--neon-green)' : 'var(--red-alert)';
    notice.style.boxShadow = type === 'ok'
        ? '0 0 12px rgba(0,255,65,0.2), inset 0 0 8px rgba(0,255,65,0.05)'
        : '0 0 12px rgba(255,34,68,0.2), inset 0 0 8px rgba(255,34,68,0.05)';
}