setTimeout(function(){
    let box=document.getElementsByClassName("box")[0];
    box.className="box"
    box.style.animation="box 1s linear";
},14000);
document.querySelector(".box .tou").onmouseover=function(){
    this.style.animation="tou 1s linear"
    this.style["box-shadow"]="0px 0px 20px #fff";
}
document.querySelector(".box .tou").onmouseout=function(){
    this.style.animation="tou1 1s linear"
    this.style["box-shadow"]="0px 0px 40px #fff";
}