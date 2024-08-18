var username = document.getElementById('full-name')
var email = document.getElementById('email')
var phoneNumber = document.getElementById('phone-number')
var password = document.getElementById('password')
var confirmPass = document.getElementById('confirm-password')
const form = document.getElementById('registerForm')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true
            showError(input, '*Không được để trống*')
        } else {
            showSuccess(input)

        }
    });
    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, '*Email không đúng định dạng (...@gmail.com)*')
    }
    return isEmailError
}

function checkLengthError(input, min) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `*Phải có ít nhất ${min} ký tự*`)
        return true

    }
    showSuccess(input)
    return false

}

function checkPhoneNumberError(input) {
    input.value = input.value.trim()
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(input.value)) {
        showError(input, '*Không nhập chữ, số điện thoại đủ 10 số*')
        return true

    } else {
        showSuccess(input)
        return false
    }
}

function checkConfirmWithPass(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu xác nhận không khớp')
        return true
    }
    showSuccess(cfPasswordInput)
    return false
}
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, phoneNumber, password])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 5)
    let isPasswordLengthError = checkLengthError(password, 3)
    let isPhoneNumberLengthError = checkPhoneNumberError(phoneNumber, 10)
    let isMatchError = checkConfirmWithPass(password, confirmPass)
    if (isEmptyError||isEmailError || isUsernameLengthError || isPasswordLengthError || isPhoneNumberLengthError || isMatchError) {
        return
    } else {
        // Viết code trong này
    }

})