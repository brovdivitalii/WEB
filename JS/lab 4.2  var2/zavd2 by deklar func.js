// Задача 2. Створити функцію, яка за номером 
//місяця повертає пору року, до якої відноситься
//цей місяць.

function SeasonByMonth(month = 0)
{
    if(month==1 || month==2 || month==12) 
    {
        alert("Зима");
    }
    else
    if(month==3 || month==4 || month==5)
    {
        alert("Весна");
    }
    else
    if(month==6 || month==7 || month==8)
    {
        alert("Літо");
    }
    else
    if(month==9 || month==10 || month==11)
    {
        alert("Осінь");
    }
    else
    {
        alert("Введіть номер місяця від 1 до 12")
    }
}

let m;
while(true)
{
do
{
m = Number(prompt("введіть номер місяця: "))
SeasonByMonth(m);
}while(m <= 0 || m >= 13 || isNaN(m));
}