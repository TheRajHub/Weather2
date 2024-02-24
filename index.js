var v=document.getElementById("search2");

async function fun(){
    var city=document.querySelector("#search1").value;
    if(!city){
        alert("Fill the search area");
        return;
    }
    try{
        console.log(city);
        var apikey="f689ab021c2e5633a15c6ab421f8485c";
    var data= await fetch(`http://api.weatherstack.com/current?query=${city}&access_key=${apikey}`);
    data=await data.json();
    console.log(data);
    var pre=document.querySelector("#press h1 span");
    var hum=document.querySelector("#hum h1 span");
    var ra=document.querySelector("#rain h1 span");
    var t=document.querySelector("#temp h1 span");
    var i=document.querySelector("#im img");
    hum.textContent=data.current.humidity;
    ra.textContent=data.current.precip;
    pre.textContent=data.current.pressure;
    t.textContent=data.current.temperature;
    if(data.current.precip>=40){
        i.setAttribute("src","rainy.png");
    }
    else if(data.current.temperature>=30){
        i.setAttribute("src","sunny.png");
        
    }
    else if(data.current.temperature<=16){
        i.setAttribute("src","cold.png");
    }
    else{
        i.setAttribute("src","cloudy.png");
    }
    if(data.current.is_day=='no'){
        document.querySelector("body").style.backgroundImage="url('night.jpg')";
        document.querySelector("html").style.backgroundImage="url('night.jpg')";
    }
    else{
        document.querySelector("body").style.backgroundImage="url('R.jpg')";
        document.querySelector("html").style.backgroundImage="url('R.jpg')";
    }
    }
    catch(e){
        console.log(e);
    }
    
}
var c=document.querySelector("#search1");
v.addEventListener("click",fun);
c.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        fun();
    }
})