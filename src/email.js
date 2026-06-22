// WHATWG HTML Living Standard — valid e-mail address regex.
// Implements atext (RFC 5322 §3.2.3) and domain labels (RFC 1034 §3.5).
// Source: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
const RFC5322_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function extractEmails(members) {
    if (!Array.isArray(members)) {
        return [];
    }
    return members.map(member => member.email);
}

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    if (email.length > 254) return false;
    const atIndex = email.indexOf('@');
    if (atIndex < 1 || atIndex > 64) return false;
    return RFC5322_EMAIL_REGEX.test(email);
}

function getValidEmails(members) {
    return extractEmails(members).filter(isValidEmail);
}

/**
 * 회원 목록에서 형식이 잘못된 이메일만 추출한다.
 * @param {Array<{ email?: string }>} members - 회원 객체 배열
 * @returns {string[]} 유효하지 않은 이메일 문자열 배열
 */
function getInvalidEmails(members) {
    if (!Array.isArray(members)) {
        return [];
    }
    return extractEmails(members).filter(
        (email) => typeof email === 'string' && email.length > 0 && !isValidEmail(email)
    );
}

module.exports = { extractEmails, isValidEmail, getValidEmails, getInvalidEmails };
