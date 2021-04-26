const input = document.getElementById('add').value;
const button = document.getElementById('go');

go.addEventListener('click', getIp)

function getIp(e) {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_5y6bScl8CynwiXQ28IQDLcHl1OqHe&ipAddress=8.8.8.8/${input}`)
    .then(function(res) {
        return res.json()
    })

    .then(function(data) {
        console.log(data)
    })

   .catch(function(err) {
    //    console.log(err); 
   });

e.preventDefault(); 
}





// document.querySelector('.get-jokes').addEventListener('click', getJokes);


// function getJokes(e) {
//     fetch('https://api.icndb.com/jokes/random')
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         // console.log(data.value.joke);
//         document.querySelector('#jokesDisplay').innerText = data.value.joke;  
//         document.querySelector('.jokesBox').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";
//         document.querySelector('.jokesBox').style.opacity = 0.7;
//         document.querySelector('.get-jokes').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";  
//     })
//    .catch(function(err) {
//     //    console.log(err); 
//    });

//    e.preventDefault(); 
// }