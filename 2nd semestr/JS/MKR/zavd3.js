

document.getElementById("search-button").onclick = () =>
{
    let subject = document.getElementById("search").value; 
    switch(true) 
    {
        case document.getElementById("search").value == "apple":
            document.getElementById("answer").innerHTML = '<img src= "https://cdn.pixabay.com/photo/2018/01/04/11/31/fruit-3060421_960_720.jpg">' ;
        break
        case document.getElementById("search").value == "banana":
            document.getElementById("answer").innerHTML = '<img src= "https://fs02.vseosvita.ua/020071ei-5a98/001.jpg">' ;
        break
        case document.getElementById("search").value == "ручка":
            document.getElementById("answer").innerHTML = '<img src= "https://parker.com.ua/4064-large/-parker-jotter-17-ss-ct-bp-16-132.jpg">' ;
        break
        case document.getElementById("search").value == "школа":
            document.getElementById("answer").innerHTML = '<img src= "https://eyewatch.com.ua/images/sampledata/photo_catalogs/shkola.gif">' ;
        break
        default:
            document.getElementById("answer").innerHTML = "Інформації про даний предмет немає.";
            break
    }
    
    
}