// Get a reference to the gallery container
const galleryContainer = document.getElementById('emoji-gallery');



// Create a div element for each emoji character and add it to the gallery container
emojis.forEach((emoji) => {
  const emojiElement = document.createElement('div');
  emojiElement.innerHTML = emoji.char;
  emojiElement.classList.add('emoji');
  
  const hexElement = document.createElement('div');
  hexElement.textContent = emoji.hex;
  hexElement.classList.add('hex');
  
  emojiElement.appendChild(hexElement);
  galleryContainer.appendChild(emojiElement);
});
