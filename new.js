let head = document.getElementById("head");
let menu = document.getElementById("menu");
let n = document.getElementById("name");
head.style.height="0px";
document.getElementById("menu").addEventListener('click',function(){
    
   

   if(head.style.height == "0px"){
      head.style.height="160px";
      menu.style.color="white";
      n.style.color="white";
     

   }
   else{
    head.style.height="0px";
    menu.style.color="orange";
    n.style.color="black";
   }

});
function send(){
    document.getElementById("value").value="";
    alert("msg send sucessfully");
}