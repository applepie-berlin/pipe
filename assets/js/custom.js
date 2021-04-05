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
    // document.body.classList.add("lock-scroll")

})
closeBtn.addEventListener("click", function () {
    buttons.classList.remove("visible")
    // document.body.classList.remove("lock-scroll")
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



