// Slider Text Animation

var element1 = document.getElementsByClassName("text-1");
setTimeout(() => {
    for (let i = 0; i < element1.length; i++) {
        element1[i].classList.add("text-transparent");
    }
}, 5500)
setInterval(function () {

    for (let i = 0; i < element1.length; i++) {
        element1[i].classList.remove("text-transparent")

        element1[i].classList.remove("animate__animated", "animate__fadeInUp");


        void element1[i].offsetWidth;

        element1[i].classList.add("animate__animated", "animate__fadeInUp");
    }
    setTimeout(() => {
        for (let i = 0; i < element1.length; i++) {
            element1[i].classList.add("text-transparent");
        }
    }, 5500)
}, 6000);


// Go Up Button 

var btn = $('#backtop-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// Animation trigger on scroll

const options = {
    rootMargin: '100px',
    threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.getElementById("card").classList.add('animate__fadeInDown', 'animate__animated');
            document.getElementById("card1").classList.add('animate__fadeInDown', 'animate__animated', 'animate__delay-1s');
            document.getElementById("card2").classList.add('animate__fadeInDown', 'animate__animated', 'animate__delay-2s');
            return;
        }
        document.getElementById("card").classList.remove('animate__fadeInDown', 'animate__animated');
        document.getElementById("card1").classList.remove('animate__fadeInDown', 'animate__animated');
        document.getElementById("card2").classList.remove('animate__fadeInDown', 'animate__animated');
    });
}, options);

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.getElementById("card3").classList.add('animate__fadeInDown', 'animate__animated');
            document.getElementById("card4").classList.add('animate__fadeInDown', 'animate__animated', 'animate__delay-1s');
            document.getElementById("card5").classList.add('animate__fadeInDown', 'animate__animated', 'animate__delay-2s');
            return;
        }
        document.getElementById("card3").classList.remove('animate__fadeInDown', 'animate__animated');
        document.getElementById("card4").classList.remove('animate__fadeInDown', 'animate__animated');
        document.getElementById("card5").classList.remove('animate__fadeInDown', 'animate__animated');
    });
}, options);

observer.observe(document.querySelector('.card-container'));
observer1.observe(document.querySelector('.card-container1'));

//Modal Login-Register
$('#modal-login').click(function () {
    $('#modal-container').removeAttr('class').addClass('modal-login');
    $('#modal-container1').removeAttr('class');
    $('body').addClass('modal-active');
});

$('#modal-container').click(function (event) {

    if (!$(event.target).closest('.modal').length && !$(event.target).is('.modal')) {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    }
});

$('#modal-container1').click(function (event) {

    if (!$(event.target).closest('.modal').length && !$(event.target).is('.modal')) {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    }
});

$('#register').click(function () {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');

    $('#modal-container1').removeAttr('class').addClass('modal-register');
    $('body').addClass('modal-active');


});

$('#login').click(function () {
    $('#modal-container1').addClass('out');
    $('body').removeClass('modal-active');

    $('#modal-container').removeAttr('class').addClass('modal-login');
    $('body').addClass('modal-active');


});

//Sticky Navbar auto hidden
(function () {
    var $win = $(window), 
        box = $(document),
        navCon = $('.main-nav-container'),
        postEnd = 0;

    box.on('scroll', function () {
        var posStart = $(this).scrollTop();

        if (posStart > postEnd) {
            navCon.addClass('hidden');
            navCon.removeClass('offset-nav');
        }
        else {           
            if ($win.scrollTop() == 0) {
                navCon.removeClass('hidden');
                navCon.removeClass('offset-nav');
            } else{
                navCon.removeClass('hidden');
                navCon.addClass('offset-nav');
            }
        }
        postEnd = posStart;
    });
})();
