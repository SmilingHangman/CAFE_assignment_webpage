// // navigation scroll below

// direct browser to top right away
if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top-120,
        },
        700,
        'linear'
    )
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
    // smooth scroll to the anchor id
    $('html, body').animate(
        {
            scrollTop: $(window.location.hash).offset().top-120,
        },
        700,
        'linear'
    )
};

//navigation active color
var selector = '.nav .nav-wrapper .nav-link';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

//navigation link color change on scroll
// remember this for later to put in console:
// window.addEventListener('scroll', function(){console.log(window.pageYOffset)})
// $(document).ready(function(){
//     $(window).scroll(function (event) {
//         var scroll = $(window).scrollTop();
//         if(scroll < 803){
//          $(".nav .nav-wrapper .nav-link").removeClass('active');
//          $("#navLink01").addClass('active');
//     }
//         else if(scroll > 802 && scroll < 1349){
//          $(".nav .nav-wrapper .nav-link").removeClass('active');
//          $("#navLink02").addClass('active');
//     }
//         else if(scroll > 1348 && scroll < 2169){
//          $(".nav .nav-wrapper .nav-link").removeClass('active');
//          $("#navLink03").addClass('active');
//     }
//         else if(scroll > 2168 && scroll < 3128){
//         $(".nav .nav-wrapper .nav-link").removeClass('active');
//         $("#navLink04").addClass('active');
//     }
//         else if(scroll > 3127 && scroll < 4026){
//         $(".nav .nav-wrapper .nav-link").removeClass('active');
//         $("#navLink05").addClass('active');
//     }
//         else if(scroll > 4025 && scroll < 5739){
//         $(".nav .nav-wrapper .nav-link").removeClass('active');
//         $("#navLink06").addClass('active');
//     }
//         else if(scroll >= 5739){
//          $(".nav .nav-wrapper .nav-link").removeClass('active');
//          $("#navLink07").addClass('active');
//     }
//         });
//   });

// this declaration is needed for chat window resizing later below
var timesClicked = 0;

// Chat window popup code below
document.getElementById("chatButton").addEventListener("click", function () {
    document.getElementById("chatButton").style.display = "none";
    document.getElementById("chatForm").style.bottom = "0";
    document.getElementById("topP").style.visibility = "hidden";
    document.getElementById("chatMid").style.display = "block";
    document.getElementById("chatTop").style.height = "270px";
    document.getElementById("chatWrap").style.overflow = "visible";
    timesClicked = 0;
}
);

// Chat window close code below
document.getElementById("closeChat").addEventListener("click", function () {
    setTimeout(function () { document.getElementById("chatButton").style.display = "block" }, 300);
    document.getElementById("chatForm").style.bottom = "-540px";
}
);

// Chat window resizing code below
document.getElementById("chatTop").addEventListener("click", function () {
    timesClicked++;

    if (timesClicked % 2 == 0) {
        document.getElementById("topP").style.visibility = "hidden";
        setTimeout(function () { document.getElementById("chatMid").style.display = "block" }, 200);
        document.getElementById("chatTop").style.height = "270px";
    } else {
        setTimeout(function () { document.getElementById("topP").style.visibility = "visible" }, 200);
        document.getElementById("chatMid").style.display = "none";
        document.getElementById("chatTop").style.height = "60px";
    }
});