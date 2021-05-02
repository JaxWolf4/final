var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var subMess = document.body.querySelector(".subMess");
var button = document.createElement("input");
var buttons = document.createElement("input");
var submit = document.createElement("button");
submit.innerHTML = "Submit"
button.placeholder = "Student Name"
buttons.placeholder = "Grade"
buttons.class = "texts"
button.class = "text"
var list=["Grades:<br/>"];
var pages = [
  {
    name:"View Grades",
    content:list
  },
  {
    name:"Add Grades",
    content:"Add Nerd: "
  },
]

function validate(){
  var messEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  
  if(username === "cool" && password === "password"){
    messEle.innerHTML=""
    var rem = document.body.querySelector(".username");
    var pss = document.body.querySelector(".password");
    var div = document.body.querySelector(".validate");
    pss.remove();
    rem.remove();
    div.remove();
    open();
  }else{
    messEle.innerHTML="You didn't enter the right Username or Password"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})
function open(){
for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Add Grades"){
  display.innerHTML=wd;
 }else{     
  viewPage()
}}
  
function viewPage(){
  display.innerHTML="Add Grades: ";
  display.appendChild(button);
  display.appendChild(buttons);
  display.appendChild(submit);
}
contentWrite(pages[0].content, "");
}

// function submits(){
//    var text = document.body.querySelector(".text").value;
//   var note = document.body.querySelector(".note").value;
//   if(text.length>=2&&note.length>0){
//     document.body.querySelector(".subMess").innerHTML=""
//     list.push(text+ " " + note)
// }else{ 
// document.body.querySelector(".subMess").innerHTML="You didn't have enough letters, or you didn't list the importance"}}

function enter(){
  var text = button.value;
  var texts = buttons.value;
  if(text.length!==0 && texts.length!==0 && isNaN(texts)==false && texts<=100 && texts>-1 && texts.length<4 && texts!=="000" && texts!=="00"){
    document.body.querySelector(".subMess").innerHTML=""
    list.push(" Student Name: " + text +" | "+ texts + "<br/>");
  }else{
 document.body.querySelector(".subMess").innerHTML="You didn't have a proper grade or name"
  }
    renderItems();
}
function renderItems(){
   document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
}}
submit.addEventListener("click", function(){
  enter();
})