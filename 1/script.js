'use script'

let textarea = document.querySelector('textarea')

textarea.addEventListener('blur', textvalue)

function textvalue() {
    let areaValue = textarea.value
    save(areaValue)
}

function save(val) {
    localStorage.clear()
    localStorage.setItem('key', val)
}

let key = localStorage.getItem('key')
textarea.innerText = key