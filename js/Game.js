function allowDrop(event){
  event.preventDefault();
}

function drag(event){
  event.dataTransfer.setData("text",event.target.id);
}

function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

}

var resetButton = document.getElementById("resetButton");

// Добавляем обработчик события клика
resetButton.addEventListener("click", function() {
    location.reload(); // Обновляем страницу
});

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
