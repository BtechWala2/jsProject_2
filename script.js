let inp = document.querySelector("input")
inp.style.color = "red";
let para = document.querySelector("p");
inp.addEventListener("input",function(){
    para.innerText = this.value;
});