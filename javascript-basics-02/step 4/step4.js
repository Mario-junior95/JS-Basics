document.querySelector("button").onclick=function(){
    if(confirm("Do you want to clear all the fields? ") ){
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#city").value="";
}};