var container = document.querySelector(".container");
container.addEventListener("mouseover",function(e){
    var targ = e.target;
    if(targ.id == "image1"){
        document.getElementById("image1").src = "images/image1_2.jpg";
    }else if(targ.id == "image2"){
        document.getElementById("image2").src = "images/image2_2.jpg";
    }else if(targ.id == "image3"){
        document.getElementById("image3").src = "images/image3_2.jpg";
    }else if(targ.id == "image4"){
        document.getElementById("image4").src = "images/image4_2.jpg";
    }else if(targ.id == "image5"){
        document.getElementById("image5").src = "images/image5_2.jpg";
    }
});