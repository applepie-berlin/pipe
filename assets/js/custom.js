var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
    $('.youtube-video').inViewAutoplay({
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        quality: 'hd720',
        controls: 0,
        showinfo: 0
    });
    $('.youtube-video-second').inViewAutoplay({
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        quality: 'hd720',
        controls: 0,
        showinfo: 0
    });

}




let buttons = document.querySelector(".mobile-slider__menu")
let element = document.querySelector(".header__menu-icon")
let closeBtn = document.querySelector(".closebtn")



element.addEventListener("click", function () {
    buttons.classList.add("visible")
    document.body.classList.add("lock-scroll")

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


toggleSimonBtn.addEventListener("click", function () {
    showTimbtn.classList.remove("border-on-button")
    toggleSimonBtn.classList.add("border-on-button")
    timDisplayed.style.display = "none";
    displaySimon.classList.remove("toggle-class")
    displaySimon.style.display = "block"

}

)

showTimbtn.addEventListener("click", function () {
    showTimbtn.classList.add("border-on-button")
    toggleSimonBtn.classList.remove("border-on-button")
    timDisplayed.style.display = "block";
    displaySimon.style.display = "none";

})

