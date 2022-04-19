let a = function()
{
    do
    {
    n1 = Number(prompt("введіть 1 число: "))
    }while(isNaN(n1));
    do
    {
    n2 = Number(prompt("введіть 2 число: "))
    }while(isNaN(n2));
    do
    {
    n3 = Number(prompt("введіть 3 число: "))
    }while(isNaN(n3));
    do
    {
    n4 = Number(prompt("введіть 4 число: "))
    }while(isNaN(n4));
    n1 = n1*n2*n3*n4;
    alert(n1);
}();