
    var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
/*
 /* 1.*/    var asia_region=data.filter(item=>item.region==="Asia")
            console.log(asia_region)
  /* 2. */   var population=data.filter(item=>item.population<200000)
             console.log(population)
        
   /*3.*/   function func(item){
             console.log(item["name"])
            console.log(item["capital"])
             console.log(item["flag"])
  }
             data.forEach(func)
 /* 4. */   let total_population =data.reduce(function (total,b){
             return total+b.population
            }, 0)
            console.log(total_population)
/* 5. */
var usd_country=data.filter((item)=>
{
let flag=false
item.currencies.forEach(element=>
{
if(element.code==='USD')
flag=true;});
if(flag==true)
return true;
else
return false;
});
console.log(usd_country);


}


