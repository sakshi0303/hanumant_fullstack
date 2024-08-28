var img=document.querySelector('img')
var icon=document.querySelector('i')
var container=document.querySelector('.container')

img.addEventListener("click",function(){
  console.log("inside event");
  icon.style.transform="scale(1)"
  icon.style.opacity="0.8"
  setTimeout(function() {
    icon.style.transform="scale(0)"
    icon.style.opacity="0"
    
  }, 3000);

})
