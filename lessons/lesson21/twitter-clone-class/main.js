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
  addTweet(tweet);
}

// TODO Add event handler for onTweetClick
