const password = 'cristina'; // Replace with your desired password
const frase = "Sei que fui estúpido e não mereço desculpas, mas não desista de mim. Poxa, gosto de você e por isso fiquei com raiva. Poderia me dar uma nova chance? Você pode mudar esse meu lado ruim!";
const elementoFrase = document.getElementById("frase");
let indice = 0;

window.addEventListener('load', function() {
  const passwordPrompt = prompt('Enter password to access the page:');
  
  if (passwordPrompt === password) {
    // Remove the "not-loaded" class to show the content
    document.body.classList.remove("not-loaded");
    escreverLetra();
  } else {
    // Redirect to Google if password is incorrect
    window.location.href = 'https://www.google.com';
  }
});

function escreverLetra() {
  if (indice < frase.length) {
    elementoFrase.textContent += frase[indice];
    indice++;
    setTimeout(escreverLetra, 300); // tempo de espera entre letras
  }
}
