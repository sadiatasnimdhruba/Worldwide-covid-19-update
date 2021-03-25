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

function todayData()
{
    fetch('https://corona.lmao.ninja/v2/countries')
  .then((response) => response.json())
  .then((data) => {

            console.log(data);
            let result=document.getElementById("output");
            data.sort((a,b) => parseFloat(b.todayCases) - parseFloat(a.todayCases) );
                    
     
             var template=`
               		<h1 class="text-center">Today's situation by countries</h1>
                            <h3><div class="date text-center"></div></h3>
                             <br><br><div class="form">
                        
                     <input type="search" id="search" class="p-1" placeholder=" Enter country name" onkeyup="searchfun()" />
                          <button id="search-button" class="btn-primary p-1"><i class="fa fa-search"></i> Search</button>
                          
                        </div><br>
                        <br>

             <table class="table">
            <thead>
            <th>Position</th>
            <th>Country Icon</th>
              <th>Country</th>
              <th>Today Cases</th>
              <th>Today Recovered</th>
              <th>Today Deaths</th>
  
              </thead>
            <tbody>`;
            var pos=0;
             data.forEach((element)=>{

             	pos++;
             
             	
             	template +=
 
             	`
    
            <tr>
            <td>${pos}</td>
            <td><img src="${element.countryInfo.flag}" width="53" height="30"></td>
            <td>${element.country}</td>
            <td>${element.todayCases}</td>
            <td>${element.todayRecovered}</td>
            <td><button class="btn-danger">${element.todayDeaths}</button></td>
            </tr>
     
             	` 
             	

             })
                     

             result.innerHTML = template;    
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
       
  })


}

  function yesterdayData()
  {
  	    fetch('https://corona.lmao.ninja/v2/countries?yesterday=true')
  .then((response) => response.json())
  .then((data) => {

            console.log(data);
            let result=document.getElementById("output");
            data.sort((a,b) => parseFloat(b.todayCases) - parseFloat(a.todayCases) );
                    
     
             var template=`
             <h1 class="text-center">Yesterday's situation by country</h1>
               		<br><br><div class="form">
                        
                     <input type="search" id="search" class="p-1" placeholder=" Enter country name" onkeyup="searchfun()" />
                          <button id="search-button" class="btn-primary p-1"><i class="fa fa-search"></i> Search</button>
                          
                        </div><br>
                        <br>

             <table class="table">
            <thead>
            <th>Position</th>
            <th>Country Icon</th>
              <th>Country</th>
              <th>Yesterday Cases</th>
              <th>Yesterday Recovered</th>
              <th>Yesterday Deaths</th>
  
              </thead>
            <tbody>`;
            var pos=0;
             data.forEach((element)=>{

             	pos++;
             
             	
             	template +=
 
             	`
    
            <tr>
            <td>${pos}</td>
            <td><img src="${element.countryInfo.flag}" width="53" height="30"></td>
            <td>${element.country}</td>
            <td>${element.todayCases}</td>
            <td>${element.todayRecovered}</td>
            <td><button class="btn-danger">${element.todayDeaths}</button></td>
            </tr>
     
             	` 
             	

             })
                     

             result.innerHTML = template;           
  })
  }
       function twoDaysAgoData()
  {
  	    fetch('https://corona.lmao.ninja/v2/countries?twoDaysAgo=true')
  .then((response) => response.json())
  .then((data) => {

            console.log(data);
            let result=document.getElementById("output");
            data.sort((a,b) => parseFloat(b.todayCases) - parseFloat(a.todayCases) );
                    
     
             var template=`
             <h1 class="text-center">Two days ago situation by country</h1>
               		<br><br><div class="form">
                        
                     <input type="search" id="search" class="p-1" placeholder=" Enter country name" onkeyup="searchfun()" />
                          <button id="search-button" class="btn-primary p-1"><i class="fa fa-search"></i> Search</button>
                          
                        </div><br>
                        <br>

             <table class="table">
            <thead>
            <th>Position</th>
            <th>Country Icon</th>
              <th>Country</th>
              <th>Two days ago Cases</th>
              <th>Two days ago Recovered</th>
              <th>Two days ago Deaths</th>
  
              </thead>
            <tbody>`;
            var pos=0;
             data.forEach((element)=>{

             	pos++;
             
             	
             	template +=
 
             	`
    
            <tr>
            <td>${pos}</td>
            <td><img src="${element.countryInfo.flag}" width="53" height="30"></td>
            <td>${element.country}</td>
            <td>${element.todayCases}</td>
            <td>${element.todayRecovered}</td>
            <td><button class="btn-danger">${element.todayDeaths}</button></td>
            </tr>
     
             	` 
             	

             })
                     

             result.innerHTML = template;           
  })
  }

   

  	

            const searchfun = () => {
            	

             let filter = document.getElementById("search").value.toUpperCase();
             let mytable=document.querySelector('.table');
             let tr=mytable.getElementsByTagName('tr');

             for(var i=0;i<tr.length;i++)
             {
             
             	let td=tr[i].getElementsByTagName('td')[2];
             	if(td)
             	{ 
             		
             		let textvalue=td.textcontent || td.innerHTML;
             		if(textvalue.toUpperCase().indexOf(filter) > -1)
             		{
             			tr[i].style.display="";
             			
             			
             		}
             		else
             		{
             			tr[i].style.display="none";
             		}
             	}
             }
             
         }

