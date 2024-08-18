var email = document.getElementById('email')
var password = document.getElementById('password')
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

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([email, password])
    let isPasswordLengthError = checkLengthError(password, 8)
    if (isEmptyError||isPasswordLengthError) {
        return
    } else {
        // Viết code trong này
    }

})