
do
{
tr = Number(prompt("введіть к-сть рядків : "))
}while(isNaN(tr) || tr < 0);

do
{
td = Number(prompt("введіть к-сть стовпців : "))
}while(isNaN(td) || td < 0);

var id1 = document.getElementById ('main_tb_container');
var create_table = (myRows, myCols,id2) =>
    {
    var ta = id2;
                
    for (var i = 0; i < myRows; i++)
        {
        var ro =  ta.insertRow (-1)
        for (var j = 0; j < myCols; j++)
            {
            var ce = ro.insertCell (-1);
            ce.innerHTML = j + 1;
            }
        }
    }
create_table(tr,td,id1)