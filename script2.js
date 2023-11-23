
const ajaxhttp = new XMLHttpRequest();
let url = "salle.json";
ajaxhttp.open("GET",url,true);
// console.log(ajaxhttp);
ajaxhttp.setRequestHeader("content-type","application/json");
ajaxhttp.onreadystatechange = function (){
    if(ajaxhttp.readyState === 4 && ajaxhttp.status === 200 ){
       // console.log(ajaxhttp);
       let mydata = JSON.parse(ajaxhttp.responseText);
       console.log(mydata)
       let output = document.getElementById("output");
       output.innerHTML = "";
       for(let data in mydata){
        //console.log(data)
        output.innerHTML += mydata[data].fields.enseigne+"<br>";
       }

    }
}
ajaxhttp.send(null);
