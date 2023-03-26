const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // отменяем стандартное поведение формы

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const country = document.getElementById("country").value;
  const dob = document.getElementById("dob").value;

  // создаем объект данных
  const data = {
    email: email,
    password: password,
    name: name,
    country: country,
    dob: dob
  };

  // получаем текущий массив данных из localStorage
  let users = localStorage.getItem("users");
  if (!users) {
    users = []; // если массив еще не существует, создаем его
  } else {
    users = JSON.parse(users); // преобразуем строку в массив объектов
  }

  // добавляем новый объект в массив
  users.push(data);

  // сохраняем обновленный массив в localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // перенаправляем пользователя на следующую страницу
  window.location.href = "page3.html";
});
