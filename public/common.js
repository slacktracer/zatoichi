define(
    function setCommon() {
        var
            common;
        common = {
            cap: cap,
            dataToHTML: dataToHTML,
            toRadians: toRadians
        };
        return common;
        //
        // functions
        //
        function cap(value, at) {
            if (
                value > at
            ) {
                return at;
            }
            if (
                value < -at
            ) {
                return -at;
            }
            return value;
        }
        function dataToHTML(data) {
            return 'Alpha: ' + data.orientation.alpha.toFixed(3) +
                '<br>Beta: ' + data.orientation.beta.toFixed(3) +
                '<br>Gamma: ' + data.orientation.gamma.toFixed(3) +
                '<br>Orientation: ' + data.player.orientation[0].toFixed(3) + ', ' + data.player.orientation[1].toFixed(3) + ', ' + data.player.orientation[2].toFixed(3) +
                '<br>Position: ' + data.player.position[0].toFixed(3) + ', ' + data.player.position[1].toFixed(3) + ', ' + data.player.position[2].toFixed(3);
                // '<br>Position: ' + data.player.position[0].toFixed(3) + ', ' + data.player.position[1].toFixed(3) + ', ' + data.player.position[2].toFixed(3) +
                // '<br>Movement: ' + data.player.movement[0].toFixed(3) + ', ' + data.player.movement[1].toFixed(3);
        }
        function toRadians(degrees) {
            return (degrees * Math.PI) / 180;
        }
    }
);
