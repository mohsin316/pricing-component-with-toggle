const toggle = document.querySelectorAll('input[type=radio]')
const prices = document.querySelectorAll('strong')

const monthly = ['19.99', '24.99', '39.99']
const annually = ['199.99', '249.99', '399.99']


toggle.forEach( choice => {
    choice.addEventListener('click', () =>{
        if (choice.getAttribute('id') === 'Monthly'){
            prices.forEach( (price, index) => {
                price.classList.remove('unhide')
                price.classList.add('hide')
                setTimeout(() => {
                    price.innerHTML = `<span>&dollar;</span>${monthly[index]}`
                }, 200);
                setTimeout(() => {
                    price.classList.add('unhide')
                    price.classList.remove('hide')
                }, 275);
            })
            console.log('month')
        }else{
            prices.forEach( (price, index) => {
                price.classList.remove('unhide')
                price.classList.add('hide')
                setTimeout(() => {
                    price.innerHTML = `<span>&dollar;</span>${annually[index]}`
                }, 200);
                setTimeout(() => {
                    price.classList.add('unhide')
                    price.classList.remove('hide')
                }, 275);
            })
            console.log('year')
        }
    })
})