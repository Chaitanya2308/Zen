
    var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);

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
/*
  var currency=data.filter(element=>element.currencies[0].name="United States dollar");
console.log(currency)
*/
}


