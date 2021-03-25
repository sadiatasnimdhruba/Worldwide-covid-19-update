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

            data.sort((a,b) => parseFloat(b.cases) - parseFloat(a.cases) );
     
             var template=`
               		<br><br><div class="form">
                        
                     <input type="search" id="search" class="p-1" placeholder=" Enter country name" onkeyup="searchfun()" />
                          <button id="search-button" class="btn-primary p-1">Search</button>
                          
                        </div><br><br>

             <table class="table">
            <thead>
            <th>Position</th>
            <th>Country Icon</th>
              <th>Country</th>
              <th>Tests</th>
              <th>Cases</th>
              <th>Recovered</th>
              <th>Deaths</th>
  
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
            <td>${element.tests}</td>
            <td>${element.cases}</td>
            <td>${element.recovered}</td>
            <td><button class="btn-danger">${element.deaths}</button></td>
     
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