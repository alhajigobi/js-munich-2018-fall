//Event Listener Callback
// e is the event object which we can inspect
function onDelete(e) {
    console.log(e);
    e.path[1].remove();
}


let deleteButtons = document.getElementsByClassName("delete");
console.log(deleteButtons)

// Question: We need to know which Event handler was triggered
// with an event target that's passed in

// Use a for LOOP because the
// number of buttons might not be fixed
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", onDelete);
}


