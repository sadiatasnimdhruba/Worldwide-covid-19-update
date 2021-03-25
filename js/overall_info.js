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

   fetch('https://corona.lmao.ninja/v2/countries')
  .then((response) => response.json())
  .then((data) => {

            console.log(data);
            let result=document.getElementById("output");
     
             var template=`
               		<br><br><div class="form">
                        
                     <input type="search" id="search" class="p-1" placeholder=" Enter country name" onkeyup="searchfun()" />
                          <button id="search-button" class="btn-primary p-1">Search</button>
                          
                        </div><br><br>

             <table class="table">
         
            <tbody>`;
            
             data.forEach((element)=>{

             	
             	template +=
 
             	`
    
            <tr>
            
            <td><strong>Country :</strong><h2 class="text-primary"><b>${element.country}<b></h2>
            <p><strong>Continent :</strong>${element.continent}</p>
            <p><strong>Population :</strong>${element.population}</p>
            <p><strong>Total Tests :</strong>${element.tests}</p>
            <p><strong>Total Cases :</strong>${element.cases}</p>
            <p><strong>Total Deaths :</strong><span class="text-danger">${element.deaths}</span></p>
            <p><strong>Total Recovered :</strong>${element.recovered}</p>
            <p><strong>Today's Cases :</strong>${element.todayCases}</p>
            <p><strong>Today's Deaths :</strong><span class="text-danger">${element.todayDeaths}</span></p>
            <p><strong>Today's Recovered :</strong>${element.todayRecovered}</p></td>
            <td><img class="mt-5" src="${element.countryInfo.flag}"></td>
            
            </tr>
     
             	` 
             	

             })
                     

             result.innerHTML = template;           
  })


   

  	

            const searchfun = () => {
            	

             let filter = document.getElementById("search").value.toUpperCase();
             let mytable=document.querySelector('.table');
             let tr=mytable.getElementsByTagName('tr');

             for(var i=0;i<tr.length;i++)
             {
             
             	let td=tr[i].getElementsByTagName('td')[0];
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