define(
    [
        'common'
    ],
    function setHexagons(
        common
    ) {
        var
            hexagons;
        hexagons = {
            ground: ground,
            player: player
        };
        return hexagons;
        //
        // functions
        //
        function ground(context, player) {
            var
                MINUS_TWO_PI_BY_6,
                RADIUS,
                TWO_PI;
            RADIUS = 150;
            TWO_PI = Math.PI * 2;
            MINUS_TWO_PI_BY_6 = -(TWO_PI / 6);
            context.save();
            context.rotate(common.toRadians(player.angles.alpha));
            context.beginPath();
            context.moveTo(RADIUS, 0);
            for (var i = 1; i < 6; i++) {
                context.lineTo(
                    RADIUS * Math.cos(MINUS_TWO_PI_BY_6 * i),
                    RADIUS * Math.sin(MINUS_TWO_PI_BY_6 * i)
                );
            }
            context.closePath();
            context.lineWidth = 2;
            context.strokeStyle = 'hsla(0, 0%, 0%, 1)';
            context.stroke();
            context.beginPath();
            context.moveTo(RADIUS - 18, 0);
            for (var i = 1; i < 4; i++) {
                context.lineTo(
                    (RADIUS - 18) * Math.cos(MINUS_TWO_PI_BY_6 * i),
                    (RADIUS - 18) * Math.sin(MINUS_TWO_PI_BY_6 * i)
                );
            }
            context.closePath();
            context.fillStyle = 'hsla(0, 0%, 0%, 1)';
            context.fill();
            context.restore();
        }
        function player(context, player) {
            var
                MINUS_TWO_PI_BY_6,
                RADIUS,
                TWO_PI;
            RADIUS = 50;
            TWO_PI = Math.PI * 2;
            MINUS_TWO_PI_BY_6 = -(TWO_PI / 6);
            context.save();
            context.translate(common.cap(player.angles.gamma, 60), common.cap(player.angles.beta, 60));
            context.beginPath();
            context.moveTo(RADIUS, 0);
            for (var i = 1; i < 6; i++) {
                context.lineTo(
                    RADIUS * Math.cos(MINUS_TWO_PI_BY_6 * i),
                    RADIUS * Math.sin(MINUS_TWO_PI_BY_6 * i)
                );
            }
            context.closePath();
            context.lineWidth = 2;
            context.strokeStyle = 'hsla(342, 100%, 50%, 0.6)';
            context.stroke();
            context.beginPath();
            context.moveTo(RADIUS - 6, 0);
            for (var i = 1; i < 4; i++) {
                context.lineTo(
                    (RADIUS - 6) * Math.cos(MINUS_TWO_PI_BY_6 * i),
                    (RADIUS - 6) * Math.sin(MINUS_TWO_PI_BY_6 * i)
                );
            }
            context.closePath();
            context.fillStyle = 'hsla(342, 100%, 50%, 0.6)';
            context.fill();
            context.restore();
        }
    }
);
