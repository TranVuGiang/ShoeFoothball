var password = document.getElementById('password')
var newPassword = document.getElementById('new-password')
const form = document.getElementById('loginForm')

function checkLengthError(input, min) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `*Phải có ít nhất ${min} ký tự*`)
        return true

    }
    showSuccess(input)
    return false

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
    let isEmptyError = checkEmptyError([password, newPassword])
    let isPasswordLengthError = checkLengthError(password, 8)
    let isMatchError = checkConfirmWithPass(password, newPassword)
    if (isEmptyError || isPasswordLengthError || isMatchError) {
        return
    } else {
        //Viết code trong này
    }
})