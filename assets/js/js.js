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
            } else {
                navCon.removeClass('hidden');
                navCon.addClass('offset-nav');
            }
        }
        postEnd = posStart;
    });
})();

//animated when scroll


document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các phần tử có class name "card"
    var cardElements = document.querySelectorAll('.card');

    // Hàm kiểm tra xem một phần tử có trong tầm nhìn không
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Hàm xử lý khi cuộn trang
    function handleScroll() {
        cardElements.forEach(function (card) {
            if (isElementInViewport(card)) {
                card.classList.add('animate__animated', 'animate__fadeInDown'); // Thêm class "visible" vào các thẻ có trong tầm nhìn
            } else {
                card.classList.remove('animate__animated', 'animate__fadeInDown'); // Loại bỏ class "visible" khỏi các thẻ không trong tầm nhìn
            }
        });
    }

    // Gắn sự kiện cuộn trang để gọi hàm xử lý
    window.addEventListener('scroll', handleScroll);

    // Gọi hàm một lần ban đầu để kiểm tra các thẻ đã có trong tầm nhìn khi trang tải
    handleScroll();
});

//smooth scroll
document.getElementById('ms-link').onclick = function (e) {
    e.preventDefault();
    document.getElementById('matchSchedule').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('mr-link').onclick = function (e) {
    e.preventDefault();
    document.getElementById('matchResult').scrollIntoView({ behavior: 'smooth' });
};

