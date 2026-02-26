// Exercise 1: Add paragraph

const btnPara = document.querySelector('#add_para') 
const result = document.querySelector('#result') 

btnPara.addEventListener('click', () => {   
    const pE = document.createElement('p') 
    pE.textContent = "Hello DOM" 
    result.append(pE)  
})
