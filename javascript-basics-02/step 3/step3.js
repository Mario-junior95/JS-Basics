document.querySelector("#name").onblur = function(){
    document.querySelector("#demo").innerHTML += document.querySelector("#name").value;
}