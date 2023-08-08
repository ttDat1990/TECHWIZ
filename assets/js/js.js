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
    rootMargin: '300px',
    threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const card = entry.target.querySelector('#card');


        if (entry.isIntersecting) {

            card.classList.add('animate__fadeInLeft', 'animate__animated');
            card1.classList.add('animate__fadeInDown', 'animate__animated');
            card2.classList.add('animate__fadeInRight', 'animate__animated');

            return;
        }

        card.classList.remove('animate__fadeInLeft', 'animate__animated');
        card1.classList.remove('animate__fadeInDown', 'animate__animated');
        card2.classList.remove('animate__fadeInRight', 'animate__animated');

    });
}, options);

observer.observe(document.querySelector('.card-container'));

//Modal Login
$('#modal-login').click(function () {
    $('#modal-container').removeAttr('class').addClass('modal-login');
    $('#modal-container1').removeAttr('class');
    $('body').addClass('modal-active');
});

$('#modal-container').click(function (event) {
    
    if(!$(event.target).closest('.modal').length && !$(event.target).is('.modal')) {
        $(this).addClass('out');
    $('body').removeClass('modal-active');
    }
});

$('#modal-container1').click(function (event) {
    
    if(!$(event.target).closest('.modal').length && !$(event.target).is('.modal')) {
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