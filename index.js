var btn = document.getElementById('btn');
var input = document.getElementById('email_input');
var error_text = document.getElementById('error_text');
var error_icon = document.getElementById('error_icon');

function validate_email(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

btn.addEventListener('click', function() {
    var email_value = input.value;    

    if(!validate_email(email_value)) {
        error_icon.style.display = 'block';
        error_text.style.display = 'block';
        input.style.border = "var(--sof-red-color) solid 1px";
    }
    else {
        input.value = '';
        error_icon.style.display = 'none';
        error_text.style.display = 'none';
        input.style.border = "0.5px solid lightgray";
    }
});