let txt = document.getElementById("texte");

document.querySelector("body").addEventListener("click", function(arg1){
    let target = arg1.target;

    if (arg1.target.id == "hide"){
        txt.style.display = "none";
    }

   else if (arg1.target.id == "show"){
        txt.style.display = "inline";
    }

});