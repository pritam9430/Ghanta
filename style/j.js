// // alert("hello world");
setInterval(() => {
    let x = new Date();
    let a = x.getHours() + " : " + x.getMinutes() + " : " + x.getUTCSeconds();
    let date = x.toLocaleDateString();

    let b = document.querySelector('.clock');
    b.innerHTML = a;
    let btm = document.querySelectorAll('button')[1];
    btm.addEventListener('click', function () {
        b.innerHTML = date;
    })

}, 1000);


// let btm = document.querySelectorAll('button')[1];
// btm.addEventListener('click',function(){
//  b.innerHTML = date;
// } )


// document.getElementById(".")
// function updateTime() {
//     var now = new Date();
//     var usTime = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
//     // document.getElementById("us-time").innerHTML = "Current US time: " + usTime;
//     document.getElementById(".").innerHTML = "Current US time: " + usTime;

// }

// setInterval(updateTime, 1000);
