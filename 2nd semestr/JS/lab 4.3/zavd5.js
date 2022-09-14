let mood = 
[
    { 
        mood:"Веселий",
        url:"https://zhitomir-online.com/uploads/posts/2019-12/1577093235_5c61460ba5a82802698093.png "
    },
    {
       mood:"Сумний",
       url:"https://pbs.twimg.com/profile_images/816057158416662528/S03b3kuR_400x400.jpg "
    },
    {
        mood:"Злий",
        url:"https://www.centrmed.com/upload/iblock/0e4/0e49628b56fd06536c9b0244e42cc110.jpg "
    },
    {
        mood:"добрий",
        url:"https://shpalta.media/wp-content/uploads/2019/06/DSC_2987.jpg"
    }
]

document.getElementById("mood").onchange = () =>
{
    let number = document.getElementById("mood").value
    document.getElementById("img").innerHTML = 
    `
    <p>${mood[number-1].mood}</p>
    <img src="${mood[number-1].url}" width="500" border="5">
    `
}