define(
    [
        'common',
        'gl-matrix/gl-matrix-min'
    ],
    function setPlayer(
        common,
        glm
    ) {
        var
            threshold,
            player;
        player = Object.create(null);
        player.angles = {
            alpha: 0,
            beta: 0,
            gamma: 0
        };
        player.move = move;
        player.movement = [0, 0];
        player.POSITION = [0, 0, 0];
        player.ORIENTATION = [0, 0, -1];
        player.update = update;
        threshold = 10;
        Object.defineProperties(
            player,
            {
                orientation: {
                    enumerable: true,
                    get: function () {
                        return this.ORIENTATION;
                    },
                    set: function (orientation) {
                        this.ORIENTATION = orientation;
                        Howler.orientation(orientation[0], 0, orientation[2], 0, 1, 0);
                    }
                },
                position: {
                    enumerable: true,
                    get: function () {
                        return this.POSITION;
                    },
                    set: function (position) {
                        this.POSITION = position;
                        Howler.pos(position[0], 0, position[2]);
                    }
                }
            }
        );
        return player;
        //
        // functions
        //
        function accountForThreshold(value) {
            if (
                value > 0
            ) {
                value -= threshold;
                if (
                    value < 0
                ) {
                    value = 0;
                }
            }
            if (
                value < 0
            ) {
                value += threshold;
                if (
                    value > 0
                ) {
                    value = 0;
                }
            }
            return value;
        }
        function move(inclination, orientation, position) {
            if (
                inclination[0] > 0
            ) {
                inclination[0] = inclination[0] - 10;
                if (
                    inclination[0] < 0
                ) {
                    inclination[0] = 0;
                }
            }
            if (
                inclination[0] < 0
            ) {
                inclination[0] = inclination[0] + 10;
                if (
                    inclination[0] > 0
                ) {
                    inclination[0] = 0;
                }
            }
            if (
                inclination[1] > 0
            ) {
                inclination[1] = inclination[1] - 10;
                if (
                    inclination[1] < 0
                ) {
                    inclination[1] = 0;
                }
            }
            if (
                inclination[1] < 0
            ) {
                inclination[1] = inclination[1] + 10;
                if (
                    inclination[1] > 0
                ) {
                    inclination[1] = 0;
                }
            }
            // if (
            //     orientation[0] >= 0
            // ) {
            //     position[0] += inclination[0];
            // } else {
            //     position[0] -= inclination[0];
            // }
            // if (
            //     orientation[1] >= 0
            // ) {
            //     position[1] += inclination[1];
            // } else {
            //     position[1] -= inclination[1];
            // }
            inclination = rotate(inclination);
            player.movement = [inclination[0], inclination[1]];
            player.position = [position[0] + (inclination[0] / 400), 0, position[1] + (inclination[1] / 400)];
        }
        function io(inclination, orientation) {
            if (
                orientation > 0
            ) {
                inclination *= -1;
            }
        }
        function rotate(toRotate) {
            var
                rotated;
            rotated = [];
            rotated[0] = toRotate[0] * Math.cos(common.toRadians(player.angles.alpha)) - toRotate[1] * Math.sin(common.toRadians(player.angles.alpha));
            rotated[1] = toRotate[0] * Math.sin(common.toRadians(player.angles.alpha)) + toRotate[1] * Math.cos(common.toRadians(player.angles.alpha));
            return rotated;
            // double x = this.x * Math.cos(radians) - this.y * Math.sin(radians);
            // double y = this.x * Math.sin(radians) + this.y * Math.cos(radians);
        }
        function update(alpha, beta, gamma) {
            player.angles.alpha = alpha;
            player.angles.beta = beta;
            player.angles.gamma = gamma;
            // player.move(beta, gamma);
            player.orientation = [Math.cos(common.toRadians(alpha)), 0, -Math.sin(common.toRadians(alpha))];
            player.move(
                [-beta, gamma],
                [player.orientation[0], player.orientation[2]],
                [player.position[0], player.position[2]]
            );
        }
    }
);
