// navigation scroll below
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top-120,
        },
        700,
        'linear'
    )
})

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