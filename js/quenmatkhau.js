var email = document.getElementById('email-or-phoneNumber')
var confirmID = document.getElementById('input-sendID')
var form = document.getElementById('forgotPass')

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

function CreateNewPass(e) {
    event.preventDefault();
    let isEmptyError = checkEmptyError([email])
    if (isEmptyError) {
        //Không viết trong này
        return
    } else {
        // Viết code ở đây, chưa bắt lỗi trong mã xác nhận, tự đưa ra thông báo Alert đi.
        window.location.href = '../thaydoimatkhau.html'
    }
}