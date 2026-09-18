function time(){
    var date=new Date();
    var current_time=date.toLocaleTimeString();
    var options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    document.getElementById("relogio").innerHTML=current_time + " &nbsp;&nbsp;|&nbsp;&nbsp;"+date.toLocaleDateString("pt-BR", options);
}
setInterval(time,1000);

function changeColorOver(x){
    x.style.backgroundColor = "#000408c1";
}

function changeColorOut(x){
    x.style.backgroundColor = "#0004087c";
}

function overHoverScale(x){
    x.style.scale = "1.02";
}

function outHoverScale(x){
    x.style.scale = "1";
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

const IconBox=document.querySelector('.icon-box');

IconBox.querySelectorAll('a').forEach((icon) => {
  icon.addEventListener("mouseover", function() {
    icon.style.transform = "translateY(-10px)";
  });
  
  icon.addEventListener("mouseout", function() {
    icon.style.transform = "translateY(0)";
  });
});