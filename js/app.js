'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach((cadapunto, i )=> {
    punto[i].addEventListener('click',()=>{
    
        let posicion = i
        let operacion = i* -25 
       // if (posicion==0 || posicion==1){
          //  let operacion= 0
        //}else{
         //   let operacion= -100
        //}
        
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach ((cadapunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
