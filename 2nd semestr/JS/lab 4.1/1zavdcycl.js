/*На складі є певна кількість ящиків з яблуками (у прикладі 15). Коли
під'їжджає машина для завантаження, попросити користувача ввести скільки
ящиків завантажити в першу машину, в другу і так далі, поки не закінчаться
ящики з яблуками. Передбачити той випадок, коли користувач введе
кількість ящиків більше, ніж на складі.*/
let n,c,i;
do
{ 
    n = Number(prompt("кількість ящиків = "));
}while(n<0 || isNaN(n));

for (let i = 1; n>=0; i++)
{
    c = Number(prompt("скільки ящиків завантажити в " + i +" машину?"))
    if(c<n)
    {
        n = n-c;
    }
    else
    {
        alert("Не можна загрузити більше ящиків ніж їх є")
        break
    }
}