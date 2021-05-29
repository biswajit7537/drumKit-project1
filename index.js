
for(var i=0 ; i< document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        soundPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    document.addEventListener("keypress",function (event){

        soundPlay(event.key);
        buttonAnimation(event.key);
    });  
    
     
}
function soundPlay(key)
    {
        switch(key)
     {
         case 'w': playMusic("sounds/crash.mp3");
                   break; 
                
         case 'a': playMusic("sounds/kick-bass.mp3");
                   break;
         case 's' : playMusic("sounds/snare.mp3");
                   break;
         case 'd' : playMusic("sounds/tom-1.mp3");
                   break;
         case 'j' : playMusic("sounds/tom-2.mp3");
                   break;
         case 'k' : playMusic("sounds/tom-3.mp3");
                   break;
         case 'l' : playMusic("sounds/tom-4.mp3");
                   break;
         default : console.log(this.innerHTML);
     }
    }  

function playMusic(source)
{
    var audio = new Audio(source);
    audio.play();
}

function buttonAnimation(key)
{
   var activeButton = document.querySelector("."+key);
   activeButton.classList.add("pressed");
   setTimeout(function (){
       activeButton.classList.remove("pressed");
   },250);
}
