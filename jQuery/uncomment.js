// $("h1").css("color","red");
// $("h2").text("night")
// $("button").text("dont click")
// $("a")
 

//  ADD EVENTLISTENERS WITH AND WITHOUT JQUERY
/*for (var i=0;i<=5;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color = "purple";
});  */


//by using JQUERY
/*$("button").click(function(){
    $("h1").css("color","purple");
}); */

//KEYPRESS
// $("document").keypress(function(event){
//    $("h1").text(event.key);
// });

/**  // ADDED EVENT LISTENER USING ON keyword it takes two parameters 2nd parameter is CALLBACK FUNCTION
$("h1").on("mouseover",function(){        // u can also use click 
    $("h1").css("color","purple");
}) ; */

/*// adding and removing Element with jQuery
$("h1").before("<button> NEW BUTTON</button>");
$("h1").after("<button> NEW BUTTON</button>");
$("h1").append("<button> NEW BUTTON</button>");
$("h1").prepend("<button> NEW BUTTON</button>"); */


// website Animation with jQuery
/**$("button").on("click",function(){       
    $("h1").hide();         for make it visible use  $("h1").show(); 
    $("h1").fadeOut();      opposite  $("h1").fadeIn(); 
    $("h1").fadeToggle();
    $("h1").slideUp();         also use  $("h1").slideDown(); 
   $("h1").slideToggle(); 
}) ; **/

$("button").on("click",function(){       
    // $("h1").animate({opacity:0.5}); //animate is only use for numerical value
    $("h1").slideUp().slideDown().animate({opacity:0.5});

});


