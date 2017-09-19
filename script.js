window.onload = function() {

document.getElementById("theheader").onclick = changeColor;
document.getElementById("logo").onclick = changeImage;

function changeColor() {
	var header = document.getElementById("theheader");
    if(header.className === "notclicked") { 
	    header.style.color = "blue";
        header.className = "clicked";
    } else if (header.className === "clicked"){
        header.style.color = "black";
        header.className = "notclicked";
    }
}

function changeImage() {
    var logo = document.getElementById("logo");

    if(logo.className === "notclicked") { 
	    logo.src = "favicon2.png";
        logo.className = "clicked";
    } else if (logo.className === "clicked"){
        logo.src = "sunglasses.png";
        logo.className = "notclicked";
    }
}

}
