let myTweets = document.getElementById("myTweets");
let newTweetInput = document.getElementById("newTweetInput");
let newTweetButton = document.getElementById("newTweetButton");
let counter = document.getElementById("counter");

function onInput() {
  let inputText = newTweetInput.value;
  let count = 140 - inputText.length;
  counter.textContent = count;
  
  if (count <= 0) {
    counter.classList.add("error");
    newTweetButton.setAttribute("disabled", true);
  } else {
    counter.classList.remove("error");
    newTweetButton.removeAttribute("disabled");
  }
}

function onAddClick() {
  // Read input text:
  let inputText = newTweetInput.value;
  
  // Create new element with text:
  let newItem = document.createElement("li"); 
  let newContent = document.createTextNode(inputText); 
  newItem.append(newContent);
  
  // Add new element to list:
  myTweets.appendChild(newItem);
  
  // Clear input:
  newTweetInput.value = '';
  onInput();
}

newTweetButton.addEventListener("click", onAddClick);
newTweetInput.addEventListener("input", onInput);