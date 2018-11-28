function addTweet(tweet) {
  // Create li-element with tweet inside
  // and then add to ul element
  let listEl = document.querySelector("#tweets > ul");
  let newEl = document.createElement("li");
  newEl.textContent = tweet;
  listEl.appendChild(newEl);
}

function getTweetFromInput() {
  let inputEl = document.querySelector("#newTweet > input");
  return inputEl.value;
}

function onTweetClick() {
  let tweet = getTweetFromInput();
  if (tweet === "") {
    alert("Your tweet is empty!");
  } else {
    addTweet(tweet);
  }
}

// Add event handler for onTweetClick
let buttonEl = document.querySelector("#newTweet > button");
buttonEl.addEventListener("click", onTweetClick);

// create function to subtract from the counter when input  key is pressed
function onInput() {
  let tweet = getTweetFromInput();
  let counterEl = document.querySelector("#newTweet > p.counter");
  counterEl.textContent = Math.max(80 - tweet.length, 0);
}

// attach input event listener to input
let inputEl = document.querySelector("#newTweet > input");
inputEl.addEventListener("input", onInput);

function onInputKey(event) {
  if(event.key === "Enter") {
    onTweetClick();
  }
}

inputEl.addEventListener("keypress", onInputKey);
