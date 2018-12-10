function addTodo(todo){
    // create element with tweet inside
    // and the add to ul Element
    let listEl= document.querySelector('#myTodo>ul')
    let newEl= document.createElement("li");
    newEl.textContent=todo;

    // add delete button and Handler
    let deleteButtonEl =document.createElement("button");
    deleteButtonEl.id = "deleteButtonEl";
    deleteButtonEl.textContent = "X";
    deleteButtonEl.classList.add("delete");

    // add delete button and Handler
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    
    checkbox.addEventListener('change', onCheckbox);
    deleteButtonEl.addEventListener("click", onDeleteButton);

    //let inputEl = document.createElement("input type="checkbox"")

    function onDeleteButton(){
        newEl.remove();
    }

    function onCheckbox(){
        if(checkbox.checked){
            newEl.style.textDecoration = "line-through";
            newEl.style.color = "green";
        }else {
            newEl.style.textDecoration = "none";
        }
    }

    
    newEl.appendChild(deleteButtonEl);
    newEl.appendChild(checkbox);
   listEl.appendChild(newEl);
   
   
 
 }
 
 function getTodoFromInput(){
    let inputEl= document.querySelector("#newTodo > input");
    return inputEl.value;
 
 }
 
 function clearInput(){
    let inputEl= document.querySelector("#newTodo > input");
    inputEl.value = "";
    onInput();
 }

 function onAddClick(){
    let todo=getTodoFromInput();
    if (isTodoValid(todo)){
        addTodo(todo);
        clearInput();
    } else {
        alert("Input is empty!");
    } 
 }

 function isTodoValid(todo) {
    return todo.length > 0 && todo.length <= 80;
 }
 
 
 //
 function onInput(){
     let todo= getTodoFromInput();
         let counterEl= document.querySelector("#newTodo>p.counter");
         counterEl.textContent= Math.max(80-todo.length,0);
         if (isTodoValid(todo)){
            buttonEl.removeAttribute("disabled");
        } else  {
            buttonEl.setAttribute("disabled", true);
        }
 
 }

 
 //when even enter button is clicked call function onaddclick
  function onInputKey(event){
 if(event.key==="Enter")
  onAddClick();
 
 
  }

  //eventlistner for the Input
  let inputEl= document.querySelector("#newTodo>input");
 inputEl.addEventListener("input", onInput);

 //eventlistner for the add button
  let buttonEl= document.querySelector("#newTodo>button");
  buttonEl.addEventListener("click", onAddClick);

     inputEl.addEventListener("keypress", onInputKey);
     //intialize the page for the first time 
     onInput();