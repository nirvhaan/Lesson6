function validate(e) {
    e.preventDefault();
    const m = document.getElementById('email').value;
    const p = document.getElementById('password').value;
    const a = document.getElementById('age').value;
    const mbox = document.getElementById('message');
    let msg1 = '';

    if (m === '') {
        msg1= 'Enter mail';
    } else if (p === '') {
        msg1 = 'Write 8 char in password';
    } else if (a === '') {
        msg1 = 'Enter age inn 12 to 50';
    }
    else {
        msg1 = 'Submitted successfully';
    }
    mbox.innerHTML = msg1;
}