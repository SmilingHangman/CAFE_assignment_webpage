// navigation scroll below
$('a[href*="#homeHere"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top-120,
        },
        700,
        'linear'
    )
});