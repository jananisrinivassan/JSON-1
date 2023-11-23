
const ajaxhttp = new XMLHttpRequest();
let url = "data.json";
ajaxhttp.open("GET",url,true);
// console.log(ajaxhttp);
ajaxhttp.setRequestHeader("content-type","application/json");
ajaxhttp.onreadystatechange = function (){
    if(ajaxhttp.readyState === 4 && ajaxhttp.status === 200 ){
       // console.log(ajaxhttp);
       let mydata = JSON.parse(ajaxhttp.responseText);
       //console.log(mydata)
       let output = document.getElementById("output");
       output.innerHTML = mydata.first_name+" "+mydata.last_name;
    }
}
ajaxhttp.send(null);
