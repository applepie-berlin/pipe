
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let iframe = document.querySelector(".youtube-video")
function onYouTubeIframeAPIReady() {
    player = new YT.Player('demo-1', {
        height: '390',
        width: '640',
        playerVars: { 'controls': 0, 'showinfo': 0, 'modestbranding': 1, 'playsinline': 1, 'iv_load_policy': 3, 'enablejsapi': 1 },
        videoId: '8Kot5vm-UWg',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });


    function onPlayerStateChange(event) {

        if (event.data == 0) {
            player.playVideo();
        }
    }

    $(window).scroll(function () {
        var top_of_element = $("#demo-1").offset().top;
        var bottom_of_element = $("#demo-1").offset().top + $("#demo-1").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            setTimeout(
                function () {
                    player.playVideo();
                }, 2000)

        } else {
            // the element is not visible, do something else
            player.pauseVideo();
        }
    });
    function stopVideo() {
        player.playVideo();
    }
    /* setTimeout(
        function () {


            $('.youtube-video').inViewAutoplay({
                loop: 1,
                autoplay: 0,
                autohide: 1,
                modestbranding: 1,
                rel: 0,
                quality: 'hd720',
                controls: 0,
                showinfo: 0

            });

            $('.youtube-video').inViewAutoplay({
                loop: 1,
                autoplay: 0,
                autohide: 1,
                modestbranding: 1,
                rel: 0,
                quality: 'hd720',
                controls: 0,
                showinfo: 0

            });


        }, 5000

    ) */



}


/*$(window).scroll(function () {
    var top_of_element = $("#demo-1").offset().top;
    var bottom_of_element = $("#demo-1").offset().top + $("#demo-1").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        // the element is visible, do something
        player.playVideo();
    } else {
        // the element is not visible, do something else
        player.stopVideo();
    }
});*/



























let buttons = document.querySelector(".mobile-slider__menu")
let element = document.querySelector(".header__menu-icon")
let closeBtn = document.querySelector(".closebtn")



element.addEventListener("click", function (e) {
    buttons.classList.add("visible")
    document.body.classList.add("lock-scroll")
    console.log("added")
    e.preventDefault();

})
closeBtn.addEventListener("click", function () {
    buttons.classList.remove("visible")
    document.body.classList.remove("lock-scroll")
})




$(function () {
    // this will get the full URL at the address bar
    let url = window.location.href;

    // passes on every "a" tag 
    $("nav a").each(function () {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).addClass("active");
        }
    });
});
$(function () {
    // this will get the full URL at the address bar
    let mobileUrl = window.location.href;

    // passes on every "a" tag 
    $(".mobile-slider__menu-list-item a").each(function () {
        // checks if its the same on the address bar
        if (mobileUrl == (this.href)) {
            $(this).addClass("active");
        }
    });
});

$(document).ready(function () {
    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 400);
    })
})



let showTimbtn = document.querySelector(".show-tim-btn");
let toggleSimonBtn = document.querySelector(".toggle-simon-btn");
let displaySimon = document.querySelector(".display-simon");
let timDisplayed = document.querySelector(".tim-displayed");
let timDisplayed__heading__tim = document.querySelector(".show-tim-btn__Tim");
let timDisplayed__heading__Simon = document.querySelector(".show-tim-btn__Simon");




toggleSimonBtn.addEventListener("click", function () {

    timDisplayed__heading__Simon.classList.add("border-on-button")
    timDisplayed__heading__tim.classList.remove("border-on-button")
    timDisplayed.style.display = "none";
    displaySimon.classList.remove("toggle-class");
    displaySimon.style.display = "block"

})



showTimbtn.addEventListener("click", function () {
    timDisplayed__heading__Simon.classList.remove("border-on-button")
    timDisplayed__heading__tim.classList.add("border-on-button")
    timDisplayed.style.display = "block";
    displaySimon.style.display = "none";

})
