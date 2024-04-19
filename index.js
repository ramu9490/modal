const mybutton = document.querySelector(".btn")
const crossbutton = document.querySelector(".cross")
const modal = document.querySelector(".modal")
const  body = document.querySelector('.overlay')
console.log(modal)
mybutton.addEventListener('click',function(){
    modal.classList.remove('hide')
    body.classList.add('overlay')
    
})
crossbutton.addEventListener("click",function(){
    modal.classList.add('hide')
    body.classList.remove('overlay')
})
document.addEventListener('keydown',function(e){
   // console.log(e.keyCode)
if(e.keyCode==27){
    modal.classList.add('hide')
    body.classList.remove('overlay')
}
})


