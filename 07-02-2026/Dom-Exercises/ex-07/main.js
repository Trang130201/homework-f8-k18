// Exercise 7: Todo status


const liStE = document.getElementsByTagName('li')
const btnStE = document.getElementsByClassName('delete-li') 

for(let i = 0; i <liStE.length; i++){
    const spanE = liStE[i].querySelector('.todo')

    // click text - > line-through
    liStE[i].addEventListener('click', ()=>{        
        spanE.style.textDecoration = 'line-through'
        
    })

    // click button delete -> remove li
    btnStE[i].addEventListener('click', () => {          
        liStE[i].style.display = 'none'
    })
}