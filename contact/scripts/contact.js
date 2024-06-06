var textName = document.getElementById('textName');
var yourName = document.getElementById('name');
var textEmail = document.getElementById('textEmail');
var email = document.getElementById('email');
var textSms = document.getElementById('textSms');
var sms = document.getElementById('sms');
var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    var theError = false;

    [yourName, email, sms].forEach(item => {
        if (!item.value) {
            item.parentElement.style.borderBottom = '2px #FF0000 solid';
            theError = true;
        } else {
            item.parentElement.style.borderBottom = '';
        }
    });

    if (!theError) {
        [yourName, email, sms].forEach(item => {
            item.value = '';
        });
        alert('Messages have been sent successfully!');
    }
    
});