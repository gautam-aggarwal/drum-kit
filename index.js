for(i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makesound(this.innerHTML) ; 
    animatebutton(this.innerHTML) ;
});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animatebutton(event.key);
});
function makesound(key){
    switch (key){
    case "w": var tom1=new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
            case "a": var audio=new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
            case "s": var tom3=new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
            case "d": var tom4=new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
            case "j": var crash=new Audio('sounds/crash.mp3')
            crash.play();
            break;
            case "k": var snare=new Audio('sounds/snare.mp3')
            snare.play();
            break;
            case "l": var kick=new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;    
            default:alert("something is wrong")
    }
}
function animatebutton(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+currentkey).classList.remove("pressed");},100);
}