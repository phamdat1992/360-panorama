$(function () {
    let img = new Image();
    img.src = './asset/img/' + 1 + '.jpg';

    img.onload = function () {
        let ctx = document.getElementById('myCanvas');
        ctx = ctx.getContext('2d');
        ctx.drawImage(img, 0, 0, 250, 250);
    }

    $("#slider").slider({
        min: 1,
        max: 99,
        change: function( event, ui ) {
            let img = new Image();
            img.src = './asset/img/' + ui.value + '.jpg';

            img.onload = function () {
                let ctx = document.getElementById('myCanvas');
                ctx = ctx.getContext('2d');
                ctx.drawImage(img, 0, 0, 250, 250);
            }
        }
    });
});

$('#content').mousemove(function (e) {
    if (e.buttons == 1) {
        // console.log(e.clientX, e.clientY)
        // let selection = $( ".selector" ).slider( "value" );

        $( "#slider" ).slider( "value", e.clientX/580*100 );
    }
});
