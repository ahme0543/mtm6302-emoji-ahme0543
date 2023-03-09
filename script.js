// Get a reference to the gallery container
const galleryContainer = document.getElementById('emoji-gallery');

// Loop through all Unicode code points and create a div element for each emoji character
for (let i = 128512; i <= 128591; i++) {
  const emoji = String.fromCodePoint(i);
  const emojiElement = document.createElement('div');
  emojiElement.innerHTML = emoji;
  emojiElement.classList.add('emoji');
  
  const decElement = document.createElement('div');
  decElement.textContent = i;
  decElement.classList.add('dec');
  
  emojiElement.appendChild(decElement);
  galleryContainer.appendChild(emojiElement);
}
