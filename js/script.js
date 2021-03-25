
function w3_open() {
  document.getElementById("main").style.marginLeft = "20%";
  document.getElementById("mySidebar").style.width = "20%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}




let TotalDeaths=document.getElementById("totalDeaths");
let Totalcases=document.getElementById("totalcases");
let TodayDeath=document.getElementById("todayDeath");
let TodayRecover=document.getElementById("todayRecover");
let TodayCase=document.getElementById("todayCase");
let TotalRecover=document.getElementById("totalrecover");
let Totaltest=document.getElementById("totaltest");




    fetch('https://corona.lmao.ninja/v2/countries')
  .then((response) => response.json())
  .then((data) => {

            console.log(data);
             var count=0;
            var death=0;
            var affect=0;
            var recover=0;
            var test=0;
            var todaycase=0;
            var todaydeath=0;
            var todayrecover=0;
            
             data.forEach((element)=>{
                
                test=test+element.tests;
             	death=death+element.deaths;
             	affect=affect+element.cases;
             	recover=recover+element.recovered;
             	todaycase=todaycase+element.todayCases;
             	todaydeath=todaydeath+element.todayDeaths;
             	todayrecover=todayrecover+element.todayRecovered;

             	count++;
             })
             Totaltest.innerHTML=test;
             TotalDeaths.innerHTML=death; 
            Totalcases.innerHTML=affect;
            TotalRecover.innerHTML=recover;
            TodayCase.innerHTML=todaycase;
            TodayRecover.innerHTML=todayrecover;
            TodayDeath.innerHTML=todaydeath; 
        })



         let now = new Date();
let date = document.querySelector('.date');
date.innerText = dateBuilder(now);
function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month}, ${year}`;
}



     
