//glue b/w model/service and view layer
import todoOperations from "./service.js";
import { init } from "./utils.js";
import {
  validateName,
  validateDesc,
  validateId,
  validateDate,
  validateTime,
  validatePhoto,
} from "./validations.js";
window.addEventListener("load", initialize);
let autoId;
function initialize() {
  bindEvents();
  autoId = init();
  showId();
}
function bindEvents() {
  document.getElementById("add").addEventListener("click", addTask);
}
function showId() {
  document.querySelector("#id").innerText = autoId();
}
function addTask() {
  console.log("working");
  var task = readFields();
  if (verifyFields(task)) {
    todoOperations.addTask(task);
    printTask(task);
    computeTotal();
    showId();
  }
  //  console.log('Task is ',task);
}
function printTask(task) {
  const tbody = document.querySelector("#task-list");
  const tr = tbody.insertRow();
  let index = 0;
  for (let key in task) {
    tr.insertCell(index).innerText = task[key];
    index++;
  }
  const td = tr.insertCell(index);
  td.appendChild(createIcon(task.id, toggleMarking));
  td.appendChild(createIcon(task.id, edit, "fa-pen"));
}
function edit() {}

function createIcon(id, fn, className = "fa-trash") {
  //default
  const iTag = document.createElement("i");
  iTag.className = `fa-solid ${className}`;
  iTag.addEventListener("click", fn);
  iTag.setAttribute("task-id", "id");
  return iTag;
}
function toggleMarking() {
  
}
function computeTotal() {
  document.querySelector("#total").innerText = todoOperations.getTotal();
  document.querySelector("#marked").innerText = 0;
  document.querySelector("#unmarked").innerText = 0;
}
function verifyFields(task) {
  var errorMessage = "";
  errorMessage = validateName(task.name);
  if (errorMessage) {
    document.querySelector("#name-error").innerText = errorMessage;
    return false;
  } else {
    return true;
  }

  // document.getElementById('desc-error').innerText = validateDesc(task.desc);
  // document.getElementById('id-error').innerText = validateId(task.id);
  // document.getElementById('date-error').innerText = validateDate(task.date);
  // document.getElementById('time-error').innerText = validateTime(task.time);
  // document.getElementById('photo-error').innerText = validatePhoto(task.photo);
}
function readFields() {
  const FIELDS = ["id", "name", "desc", "date", "time", "photo"];
  var task = {};
  for (let field of FIELDS) {
    if (field == "id") {
      task[field] = document.getElementById(field).innerText;
      continue;
    }
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
//truthy falsy
//type,refernce error
//cdn
//closure
