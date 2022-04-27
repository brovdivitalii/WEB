let n = parseInt(prompt("Введіть кількість предметів", "4"));
let grades = Array();

for (let i = 0; i < K; i++) 
{
    grades.push(parseInt(prompt("Оцінка: ", "")));
}

switch(grades[0]){
    case 1:
        alert(`Двійочник`)
        break;
    case 2:
        alert(`Двійочник`)
        break; 
    case 3:
        alert(`Трійочник`)
        break; 
    case 4:
        alert(`Хорошист`)
        break; 
    case 5:
        alert(`Відмінник`)
        break; 
}