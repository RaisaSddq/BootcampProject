const textEl=document.getElementById("text")
const myName = "Raisa Siddiqua"
let num= 1
writeText()
function writeText(){
    textEl.innerHTML= myName .slice(0,num)
    num++
    if(num>myName.length){
        num=1
    }
    setTimeout(writeText,100);
}