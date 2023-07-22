let changeTitle = false;

setInterval(() => {
  document.title = changeTitle
    ? "Feliz Cumpleaños 🎉🎂🥳 "
    : "Feliz aniversario ➕ 📅";

  changeTitle = !changeTitle;
}, 30000);
