/*animation footer*/
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare:true,
    "max-glare":1,
  });

/*tooltip*/
tippy('.facebook',{
  content:"Facebook",
  placement:'bottom'
})

tippy('.twitter',{
  content:"Twitter",
  placement:'bottom'
})

tippy('.youtube',{
  content:"Youtube",
  placement:'bottom'
})

tippy('.instagram',{
  content:"Instagram",
  placement:'bottom'
})

/* keydown*/
document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case '1':
      // Переключиться на раздел Home
      window.location.href = 'index.html';
      break;
    case '2':
      // Переключиться на раздел Attractions
      window.location.href = 'Attractions.html';
      break;
    case '3':
      // Переключиться на раздел Food
      window.location.href = 'Food.html';
      break;
    case '4':
      // Переключиться на раздел Team
      window.location.href = 'Team.html';
      break;
    case '5':
      // Переключиться на раздел Contact
      window.location.href = 'Contact.html';
      break;
    case '6':
      // Переключиться на раздел Contact
      window.location.href = 'Game.html';
      break;
    default:
      break;
  }
});

/*popup*/
document.querySelector(".ctn").addEventListener("click", function () {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var closePopup = document.getElementById("close-popup"); // Получаем элемент "close"
  
  closePopup.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});
