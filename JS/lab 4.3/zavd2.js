let days = Array();
for (let i = 0; i < 7; i++) 
{
    days.push(parseInt(prompt(`Кількість відвідувачів в ${i+1} день: `, "")))
}
for (let i = 0; i < 7; i++){
    alert(`День ${i+1} = ${days[i]}`);   
}

for (let i = 0; i < 7; i++) 
{
    if (days[i]<20) 
    {
        alert(`Номери днів де кількість відвічувачів менша 20: ${i+1}`)
    }
}
    
alert(`Номер дня з найменьшою кількістю відвідучачів: ${days.indexOf(Math.min.apply(Math,days))+1} \n
Номер дня з найбільшою кількістю відвідучачів: ${days.indexOf(Math.max.apply(Math,days))+1}`);

let sum = 0;
for (let i = 0; i < 5; i++)
{
 sum+=days[i];
}

alert(`к-сть відвідувачів за будні дні: ${sum} 
\n
субота: ${days[5]}, неділя: ${days[6]}`);