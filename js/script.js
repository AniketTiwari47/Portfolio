//navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}
//darkmode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
}

//Typing
const strings = ["a Frontend Developer", "a Web Designer", "a Coder","a Video Editor","a Pentester"];
let typedIndex = 0;
let charIndex = 0;
const typedTextElement = document.querySelector('.typedText');

function type() {
  if (charIndex < strings[typedIndex].length) {
    typedTextElement.textContent += strings[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextElement.textContent = strings[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    typedIndex = (typedIndex + 1) % strings.length;
    setTimeout(type, 500);
  }
}

type();