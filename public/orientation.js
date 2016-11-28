define(
    [
        'gyronorm/gyronorm.min'
    ],
    function setGyroNorm(
        GyroNorm
    ) {
        var
            gn;
        gn = new GyroNorm();
        return orientation;
        //
        // functions
        //
        function orientation() {
            return gn
                .init()
                .then(function onResolve() {
                    gn.start(function (data) {
                        orientation.alpha = data.do.alpha;
                        orientation.beta = data.do.beta;
                        orientation.gamma = data.do.gamma;
                    });
                    // alert('Orientation Module Set!');
                })
                .catch(function onReject(reason) {
                    alert(reason);
                });
        }
    }
);
