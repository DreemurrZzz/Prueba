var yesButton = document.getElementById('yesButton');
var noButton = document.getElementById('noButton');
var message = document.getElementById('message');
var noButtonText = ["Ni lo pienses", "Para!", "Pq eres asi sarahi", "pipipi", ":(","yaa paraaa","ash","juumm...","...","ya.","bueno"];
var noButtonIndex = 0;
var noButtonPressed = false;

yesButton.addEventListener('click', function() {
  message.textContent = 'yo mas ><';
  message.style.display = 'block';
});

noButton.addEventListener('click', function() {
  if (noButtonPressed && noButtonIndex < noButtonText.length - 1) {
    noButton.textContent = noButtonText[noButtonIndex];
    noButtonIndex++;
  } else {
    noButton.textContent = ":(";
    noButtonPressed = true;
  }
  
  var randomX = Math.floor(Math.random() * window.innerWidth);
  var randomY = Math.floor(Math.random() * window.innerHeight);
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});