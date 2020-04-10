'use script'

let inputs = document.querySelectorAll('input[type=text]')
let textarea = document.querySelector('textarea')
let checkboxs = document.querySelectorAll('input[type=checkbox]')
let radios = document.querySelectorAll('input[type=radio]')
let select = document.querySelector('select')

for (let input of inputs) {
    input.addEventListener('change', function () {
        let key = input.getAttribute('name')
        let val = input.value
        localStorage.setItem(key, val)
    })
}

textarea.addEventListener('change', function () {
    localStorage.setItem(textarea.getAttribute('name'), textarea.value)
})

for (let checkbox of checkboxs) {
    checkbox.addEventListener('change', function () {
        let val = checkbox.checked
        let key = checkbox.id
        localStorage.setItem(key, val)
    })
}

for (let radio of radios) {
    radio.addEventListener('change', function () {
        let val = radio.checked
        let key = radio.id
        localStorage.setItem(key, val)
    })
}

select.addEventListener('change', function () {
    localStorage.setItem(select.getAttribute('name'), select.value)
})

for (let inputLocal of inputs) {
    let key = inputLocal.getAttribute('name')
    inputLocal.value = localStorage.getItem(key)
}

textarea.value = localStorage.getItem(textarea.getAttribute('name'))

for (let checkbox of checkboxs) {
    let key = checkbox.getAttribute('name')
    checkbox.value = localStorage.getItem(key)

    if (checkbox.value == 'false' || checkbox.value == '') {
        checkbox.checked = false
    } else {
        checkbox.checked = true
    }
}

for (let radio of radios) {
    let key = radio.getAttribute('name')
    radio.value = localStorage.getItem(key)

    if (radio.value == 'false' || radio.value == '') {
        radio.checked = false
    } else {
        radio.checked = true
    }
}

select.value = localStorage.getItem(select.getAttribute('name'))