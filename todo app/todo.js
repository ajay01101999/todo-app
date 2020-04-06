window.addEventListener('load',init);
var counter = 0, attributeCounter = 0;

function init(){
    document.getElementById('unique').focus();
    document.getElementById('add').addEventListener('click',addTask);
}

function addTask(){
    var tasklist=[];
    var id = document.getElementById('unique').value;
    var name = document.getElementById('name').value;
    var desc = document.getElementById('desc').value;
    var enddate = document.getElementById('enddate').value;
    tasklist.push(id,name,desc,enddate);
    allTask(tasklist);
}    

function allTask(tasklist){
   var div = document.getElementById('alltask');
   counter++;
   var h2 = document.createElement('h2');
   h2.innerText = 'TASK'+' '+counter;
   div.appendChild(h2); 
   for(let i=0;i<=tasklist.length-1;i++){
       attributeCounter++;
       var input = document.createElement('input');
       input.setAttribute('field',attributeCounter);
       //input.setAttribute('style','position:absolute;top:10px;left:600px;');
       input.value = tasklist[i];
       div.appendChild(input);
       var attribute = input.getAttribute('field');
       clicked(attribute, input);
   }
   var button = document.createElement('button');
   button.innerText = 'SAVE TASKS';
   div.appendChild(button);
}
 function clicked(attribute, input){
     input.onclick = function(){
         input.setAttribute('style','background-color:#68859d;color:black;text-align:center');
     }
 }