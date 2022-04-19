let array = ["яблоко", "дід", "Віталій", "sms", "lol", "massive", "kek"] // список
let n=0; // - кількість слів
for (let i = 0; i < array.length; i++) 
{
    let word = array[i].split('');
    if(word[0]==word[word.length - 1])
    {
        n++;
    }
}
alert(n);