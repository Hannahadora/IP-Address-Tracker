const input = document.getElementById('add').value;
const button = document.getElementById('go');


go.addEventListener('click', getIp)

function getIp(e) {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_5y6bScl8CynwiXQ28IQDLcHl1OqHe&ipAddress=${input}`)
    .then(function(res) {
        return res.json()
    })

    .then(function(data) {
        console.log(data);
        document.getElementById('IPaddress').value = data.ip;      
        document.getElementById('location').value = data.location.region, data.location.country;  
        document.getElementById('timeZone').value = data.location.timezone;
        document.getElementById('isp').value = data.isp;
        document.getElementById('add').value = '';
        marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
    })

   .catch(function(err) {
    //    console.log(err); 
   });

e.preventDefault(); 
}





