// Exercise 5: Click to change color
const list = document.getElementsByTagName("li")

for (let i = 0; i< list.length; i++){
    const liChangeE = list[i]
    liChangeE.addEventListener('click', () => {
        if(liChangeE.style.color === "red") {
            liChangeE.style.color = "black"
        }else {
            liChangeE.style.color = "red"
        }                   
    })
}