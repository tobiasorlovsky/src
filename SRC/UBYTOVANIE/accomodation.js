// Získanie posledného aktívneho tlačidla z Local Storage
var lastActiveButtonIndex = localStorage.getItem('lastActiveButtonIndex');

// Ak sme našli index, nastavíme príslušnému tlačidlu triedu "active"
if (lastActiveButtonIndex !== null) {
  document.querySelectorAll('.hotelbtn')[lastActiveButtonIndex].classList.add('selectedbtn');
}

function changeColorAndNavigate(button, pageUrl) {
  var buttons = document.querySelectorAll('.hotelbtn'); // Získanie všetkých tlačidiel v menu

  // Pre každé tlačidlo odstrániť triedu "active"
  buttons.forEach(function(btn) {
    btn.classList.remove('selectedbtn');
  });

  // Pridanie triedy "active" na kliknuté tlačidlo
  button.classList.add('selectedbtn');

  // Získanie indexu aktívneho tlačidla
  var buttonIndex = Array.prototype.indexOf.call(buttons, button);

  // Uloženie indexu aktívneho tlačidla do Local Storage
  localStorage.setItem('lastActiveButtonIndex', buttonIndex);

  // Navigácia na zadanú stránku po krátkej dobe
  setTimeout(function() {
    window.location.href = pageUrl;
  }, 100); // Časové oneskorenie pred navigáciou (v milisekundách)
}




// Funkcia pre jedno slideshow
function setupSlideShow(slideshowContainer) {
  let slideIndex = 0; // Začiatočný index pre toto slideshow

  // Vytvorí pole s obrázkami zo vstupného kontajneru
  const slides = slideshowContainer.querySelectorAll('.slide');

  // Funkcia na skrytie všetkých obrázkov
  function hideSlides() {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  }

  // Funkcia na zobrazenie konkrétneho obrázka podľa indexu
  function showSlide(n) {
    hideSlides(); // Skryje všetky obrázky
    if (n < 0) {
      slideIndex = slides.length - 1; // Ak sme na prvom obrázku, prejde na posledný
    } else if (n >= slides.length) {
      slideIndex = 0; // Ak sme na poslednom obrázku, prejde na prvý
    } else {
      slideIndex = n; // Nastaví index na konkrétny obrázok
    }
    slides[slideIndex].style.display = 'flex'; // Zobrazí vybraný obrázok
  }

  // Zobraziť prvý obrázok pri načítaní
  showSlide(slideIndex);

  // Funkcia na posunutie na ďalší obrázok
  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  // Funkcia na posunutie na predchádzajúci obrázok
  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  // Nastavenie event listenerov pre tlačidlá next a prev
  slideshowContainer.querySelector('.prev').addEventListener('click', prevSlide);
  slideshowContainer.querySelector('.next').addEventListener('click', nextSlide);
}

// Nastavenie každého slideshow osobitne
let slideshowContainer1 = document.getElementById('slideshow-container1');
setupSlideShow(slideshowContainer1);

let slideshowContainer2 = document.getElementById('slideshow-container2');
setupSlideShow(slideshowContainer2);

let slideshowContainer3 = document.getElementById('slideshow-container3');
setupSlideShow(slideshowContainer3);




function readMoreLess(dotsId, btnId, moreText) {
  var dots = document.getElementById(dotsId);
  var btnText = document.getElementById(btnId);
  var width = window.innerWidth;

  if (width >= 1071) {
      // Rozlíšenie 1071px a viac
      dots.style.display = 'inline';
      btnText.innerHTML = "Zobraziť menej";
  } else {
      // Rozlíšenie pod 1070px
      if (dots.style.display === "none" || dots.style.display === "") {
          dots.style.display = "block";
          btnText.innerHTML = "Zobraziť menej";
      } else {
          dots.style.display = "none";
          btnText.innerHTML = "Zobraziť viac";
      }
  }
}