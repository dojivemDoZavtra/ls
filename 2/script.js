'use script'

let textarea = document.querySelector('textarea')
let index = localStorage.length

function binding() {
    textarea.addEventListener('change', getText)

    if (document.querySelector('button') != null) {
        let button = document.querySelectorAll('button');

        button[0].addEventListener('click', prev)
        button[1].addEventListener('click', next)
    }
}

function prev() {
    index--
    if (index < 1) {
        index = localStorage.length
    }
    textarea.value = localStorage.getItem(`key${index}`)
}

function next() {
    index++
    if (index > localStorage.length) {
        index = 1
    }
    textarea.value = localStorage.getItem(`key${index}`)
}

function getText() {
    let areaval = textarea.value

    if (areaval != '') {
        save(areaval)
    }

    if (localStorage.length > 1 && document.querySelector('button') == null) {
        buttons()
        binding()
    }
}

function save(value) {  
    index++
    localStorage.setItem(`key${index}`, value)
}

function buttons() {
    let a = document.querySelector('body')

    let n = document.createElement('button')
    n.id = 'next'
    n.innerText = 'Cледующий'

    let p = document.createElement('button')
    p.id = 'prev'
    p.innerText = 'Предыдущий'

    a.append(p)
    a.append(n)

    return a
}

binding()