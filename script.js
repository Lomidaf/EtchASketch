let colorB=1;
createSketch(16);
document.getElementById("resetButton").addEventListener("click",clear);

function clickCell(){
    if(this.classList.contains("clickCell")) return;
    this.classList.add("clickCell");
    this.style.backgroundColor=random_rgba();
    if(colorB>=0.1) colorB-=0.1;
    else colorB=0;
}

function clear(){
    let elements=document.querySelectorAll(".cell");
    let size=prompt("HOW MANY BLOCK DO YOU WANT IN YOUR NEW SKETCH");
    createSketch(size);
}

function createSketch(size){
    if(isNaN(size) || size==null){
        console.log("ERROR");
        size=16;
    }
    document.getElementById("board").innerHTML="";
    document.getElementById("board").style.gridTemplateRows=`repeat(${size},30px)`;
    document.getElementById("board").style.gridTemplateColumns=`repeat(${size},30px)`;
    for(let i=0;i<size*size;i++){
        let element=document.createElement("div");
        element.innerText="";
        element.classList.add("cell");
        element.addEventListener("mouseover",clickCell);
        document.getElementById("board").appendChild(element);
    }
    colorB=1;
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255*colorB;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}
