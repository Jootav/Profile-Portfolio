function time(){
    var date=new Date();
    var current_time=date.toLocaleTimeString();
    document.getElementById("relogio").innerHTML=current_time;
}
setInterval(time,1000);

function changeColorOver(x){
    x.style.backgroundColor = "#000408c1";
}

function changeColorOut(x){
    x.style.backgroundColor = "#0004087c";
}

const ImgHoverScale=document.querySelectorAll('.profile-img, .img-carrossel img');

ImgHoverScale.forEach((img) => {
  img.addEventListener("mouseover", function() {
    img.style.scale = "1.05";
  });
  
  img.addEventListener("mouseout", function() {
    img.style.scale = "1";
  });
});