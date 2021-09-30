let boxtomb=document.querySelectorAll('.box')
boxtomb.forEach(o=>o.addEventListener('click',mycalc))

function mycalc(){
    let x=this.innerHTML
    let boxeredmeny=document.querySelector('.boxeredmeny')
if(x=='C') boxeredmeny.innerHTML="";
else if(x=='=') boxeredmeny.innerHTML=eval(boxeredmeny.innerHTML)
        else boxeredmeny.innerHTML+=x;


}