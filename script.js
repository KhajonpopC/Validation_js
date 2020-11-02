var inputBox =document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var list = [];
document.body.querySelector(".submit1").addEventListener("click", function(){
  if(inputBox.value != "coolStudent123"){
    messageBox.innerHTML="Wrong username"
  }
}) 

document.body.querySelector(".submit1").addEventListener("click", function(){
  if(inputBox.value.length>=2){
    list.push(inputBox.value);
    renderList();
  }else{
    messageBox.innerHTML="Must enter more than one character"
  }
}) 
   
                                                                                                                      
function renderList(){
  document.body.querySelector(".list").innerHTML=" ";
  for (var i=0; i<list.length; i++){
    var itemEle = document.createElement("h6");
    itemEle.innerHTML=list[i];
    document.body.querySelector(".list").appendChild(itemEle);
  }
}