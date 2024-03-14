let inp = document.querySelector("input")
inp.style.color = "red";
let para = document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(this.value);
    para.innerText = this.value;
});