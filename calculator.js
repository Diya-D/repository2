var inp=document.querySelector("#inp")
function display(num){
        inp.value+=num
       }
backspace=()=>{
   let str=inp.value
   str=str.substring(0,str.length-1)
   inp.value=str     
}
clrscr=()=>{
    inp.value=""
}
ev=()=>{
let data=eval(inp.value)
inp.value=data
}
