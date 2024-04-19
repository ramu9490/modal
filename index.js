const mybutton = document.querySelector(".btn")
const crossbutton = document.querySelector(".cross")
const modal = document.querySelector(".modal")
console.log(modal)
mybutton.addEventListener('click',function(){
    modal.classList.remove('hide')
    


})
crossbutton.addEventListener("click",function(){
    modal.classList.add('hide')
})