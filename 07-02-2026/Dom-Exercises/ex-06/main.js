
// Exercise 6: Click to delete item

const liXE =  Array.from(document.getElementsByTagName('li'))
const btnX =  Array.from(document.getElementsByClassName('delete'))

btnX.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        liXE[index].style.display = "none"
    })
})          