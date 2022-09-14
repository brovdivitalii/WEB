// 4. Дано одновимірний масив, у якому зберігається певна виграшна сума 
// (елементи заповнюються випадковим чином значеннями від -500 до 500). 
// Користувач вибирає номер елементу, поки не відмовиться від подальшої 
// гри, або не вибере всі елементи. Після кожного ходу показувати сумарний
// виграш. Кожен елемент можна вибирати тільки 1 раз.
function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
let n = parseInt(prompt("введіть макс кількість ходів:"))
let presents = Array();
let used = Array()
for (let i = 1; i <= n; i++) {
    presents.push(Random(-500, 500))
}
alert(presents)

let prise = 0;
while (true) {
    let ans = prompt("Введіть число або 'stop' щоб закінчити гру ", "")
    if (ans == 'stop' || ans >= n+1)
    {
        alert("Ви закінчили гру або ввели невірний хід")
        break
    }
    else   
    {   
        if (used.includes(parseInt(ans)))
        {   
            alert("Ви вже використали це число, введіть інше")
            continue
        }
        else
        {
            used.push(ans)
            prise += presents[parseInt(ans)-1]
            alert(`сумарний виграш: ${prise} \nщоб закінчити введіть: stop`)
        if(used.length==n){
            alert("ви використали всі ходи")
            break
        }
        }
    }
}

alert(`Ваш виграш: ${parseInt(prise)}`);