let nav=document.querySelector(".row1");
window.addEventListener("scroll",()=>
{
    if(document.documentElement.scrollTop > 40){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky")
    }
});
window.onload=function(){
  document.getElementById("preloader3").style.display="none";
  document.getElementById("preloader1").style.display="block";
  }
  $(window).load(function(){
    $('#preloader3').fadeOut();
    $('#webname').delay(100).fadeOut('slow');
  }),4000;