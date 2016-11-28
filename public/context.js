define(
    [
        'sketch.js/sketch.min'
    ],
    function setContext(
        Sketch
    ) {
        var
            context;
        context = Sketch.create({
            autostart: false,
            container: document.getElementById('container')
        });
        return context;
    }
);
