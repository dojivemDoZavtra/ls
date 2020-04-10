'use script'

let count = document.querySelector('.count')
let textarea = document.querySelector('textarea')
let submit = document.querySelector('button')
let counting = localStorage.length / 3

submit.addEventListener('click', addZametka)

function zam(index, text, date) {
    let zametka = document.createElement('div')
    zametka.classList.add('zametka')
    let zametkaIndex = document.createElement('h3')
    zametkaIndex.innerText = "Номер " + index
    let zametkaText = document.createElement('p')
    zametkaText.innerText = text
    let zametkaDate = document.createElement('span')
    zametkaDate.innerText = date

    zametka.append(zametkaIndex)
    zametka.append(zametkaText)
    zametka.append(zametkaDate)

    return zametka
}

function addZametka() {
    let a = document.querySelector('.zametki')
    let index = Math.round((localStorage.length + 2) / 3)
    let text = textarea.value
    let date = new Date()
    let datee = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

    if (text == '') {
        return alert('Введите текст')
    }

    if (text.length >= 100) {
        return alert('Вы ввели больше 100 символов')
    }

    a.append(zam(index, text, datee))
    save(index, text, datee)

    textarea.value = ''

    counting++
    count.innerText = `Всего записей: ${counting}`
}

function save(index, text, date) {
    localStorage.setItem("Index" + index, index)
    localStorage.setItem("Zametka" + index, text)
    localStorage.setItem('Date' + index, date)
}

function load() {
    let a = document.querySelector('.zametki')

    for (let i = 1; i < Math.round((localStorage.length + 2) / 3); i++) {
        let zamIndex = localStorage.getItem("Index" + i)
        let zamtext = localStorage.getItem("Zametka" + i)
        let zamdate = localStorage.getItem("Date" + i)
        a.append(zam(zamIndex, zamtext, zamdate))
    }

    count.innerText = `Всего записей: ${counting}`
}

load()