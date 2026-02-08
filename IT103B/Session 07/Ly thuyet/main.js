let email = prompt("Nhập email của bạn: ");
function renderEmail(email) {
        if (email.includes("@")) {
            document.writeln(email);
            return true;
        }
            return false;
}

renderEmail;