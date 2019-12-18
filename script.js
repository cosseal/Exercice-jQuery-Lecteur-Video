var video = $(".player__video")[0];

var volume = $("input[name='volume']");
volume.change(function() {
    video.volume = $(this).val();
});

var vitesse = $("input[name='playbackRate']");///à vérifier car non fonctionnel
vitesse.change(function () {
    video.playbackRate = $(this).val();
});

$(".toggle").click(function() {

     video.ontimeupdate=function () {
         var duration = video.duration; //durée totale
         var time = video.currentTime; // temps écoulé
         var fraction = time/duration; // pour préparer le %
         var percent = Math.ceil(fraction*100);
         var progress = $(".progress__filled");

         progress.css({"widht":percent + "%", "flex-basis":percent + "%"});
     };


    if(video.paused) {
        video.play();
        $(".toggle").html("►");
    }
    else {
       video.pause();
       $(".toggle").html("Pause");
    }
    });


