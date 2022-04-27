let name = prompt("Ім'я: ", "Юрій");
let names = ["Юрій", "Василь", "Юрій", "Юрій", "Оксана", "Міша", "Олександр"];
alert(names.filter(el => el == name).length);