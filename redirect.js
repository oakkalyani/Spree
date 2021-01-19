$(function(){

    var video = $('#video')[0];

    video.addEventListener('playing', function(){
           $('.text').fadeOut();
    })
     video.addEventListener('pause', function(){
           $('.text').fadeIn();
    })

})