// Exercise 8: Select item
const liSelectE = document.getElementsByTagName('li')

for (let i = 0; i <liSelectE.length; i++) {
    liSelectE[i].addEventListener('click', () =>{

        // Reset the background color of all list items and set the background color when the list item is clicked
        for (let j = 0; j<liSelectE.length; j++){
            if (j !== i) {
                liSelectE[j].style.backgroundColor = ""
            } else {
                liSelectE[j].style.backgroundColor = "green"
            }
        }
        
    })
}