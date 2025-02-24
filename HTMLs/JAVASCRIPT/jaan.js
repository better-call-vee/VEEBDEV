let x = "jhankar@hero.com"
function validEmail(email) {
    if (typeof (email) !== 'string') return "Invalid"
    if (!((email[0] >= 'a' && email[0] <= 'z') ||
        (email[0] >= 'A' && email[0] <= 'Z') ||
        (email[0] >= '0' && email[0] <= '9'))) {
        return false;
    }
    if (email.includes(" ")) return false

    let i = 0, st = 0;
    for (const ch of email) {
        if (ch === '@') { i = 1; break; }
        st++;
    }

    if (i === 0) return false

    let dot = email.indexOf('.', st + 1);
    if (dot === -1) return false;

    for (let i = st + 1; i < dot; i++) {
        if (email[i] === '@') return false;
    }

    let com = email.slice(dot + 1);
    if (com !== "com") return false;

    return true
}

console.log(validEmail(x));