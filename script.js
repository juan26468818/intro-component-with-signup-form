const inputs = document.querySelectorAll("input")
const btn = document.getElementById("btn")
const err = document.querySelectorAll(".error")
btn.addEventListener("click", ()=>{
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checkValidity() === false){
            inputs[i].className += " invalid"
            err[i].classList.remove("hidden")
        }else{
            inputs[i].classList.remove("invalid")
            err[i].className += " hidden"
        }
    }

})