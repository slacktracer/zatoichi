requirejs(
    [
        'common',
        'context',
        'hexagons',
        'orientation',
        'player'
    ],
    function(
        common,
        context,
        hexagons,
        orientation,
        player
    ) {
        orientation().then(function onResolve() {
            context.start()
            playAll()
        })
        .catch(function (reason) {
            alert(reason)
        });
        context.draw = function draw() {
            context.save()
            context.translate(context.width/2, context.height/2)
            hexagons.ground(context, player)
            hexagons.player(context, player)
            context.restore()
        }
        context.update = function update() {
            document.getElementById('data').innerHTML = common.dataToHTML({
                orientation,
                player
            })
            player.update(orientation.alpha, orientation.beta, orientation.gamma)
        }
    }
);

function playAll() {
    var a = new Howl({
        src: ['sounds/coin0.wav'],
        onload: function () {
            a.pos(150, 0, 0);
            setInterval(function () {
                a.play();
            }, 1300);
        },
        volume: 0.5
    });
    var b = new Howl({
        src: ['sounds/coin1.wav'],
        onload: function () {
            b.pos(-150, 0, 0);
            setInterval(function () {
                b.play();
            }, 1500);
        },
        volume: 0.5
    });
    var c = new Howl({
        src: ['sounds/coin2.wav'],
        onload: function () {
            c.pos(0, 0, 150);
            setInterval(function () {
                c.play();
            }, 1700);
        },
        volume: 0.5
    });
    var d = new Howl({
        src: ['sounds/coin3.wav'],
        onload: function () {
            d.pos(0, 0, -150);
            setInterval(function () {
                d.play();
            }, 1900);
        },
        volume: 0.5
    });
}
