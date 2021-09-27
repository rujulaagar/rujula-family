var img=["dad.jpeg","mom.jpeg","rujula.jpeg","hiyan.jpeg"];
var i= 0;
function change(){
document.getElementById("pic").src=img[i];
i++;
if(i==4){
i=0;
}
}
