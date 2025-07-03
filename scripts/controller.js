//glue b/w model/service and view layer
import { validateName, validateDesc, validateId, validateDate, validateTime, validatePhoto } from "./validations.js";
window.addEventListener('load',bindEvents);
function bindEvents() {
  document.getElementById("add").addEventListener("click", addTask);
}
function addTask() {
    console.log("working");
     var task = readFields();
     verifyFields(task);
     console.log('Task is ',task);
     
  
}
function verifyFields(task) {
  document.getElementById('name-error').innerText = validateName(task.name);
  document.getElementById('desc-error').innerText = validateDesc(task.desc);
  document.getElementById('id-error').innerText = validateId(task.id);
  document.getElementById('date-error').innerText = validateDate(task.date);
  document.getElementById('time-error').innerText = validateTime(task.time);
  document.getElementById('photo-error').innerText = validatePhoto(task.photo);
}
function readFields(){
  const FIELDS = ['id','name','desc','date','time','photo'];
  var task={};
  for(let field of FIELDS){
    // console.log(field);
    
    task[field] = document.getElementById(field).value;
  }
  return task;
}
//var global or fxnlvl.
//let block.
//lexical scope
//tdz for let 
//regex
//modular js
//export default
//