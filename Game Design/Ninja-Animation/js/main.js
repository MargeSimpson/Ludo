var stage = new Kinetic.Stage({
    container: 'container',
    width: 32,
    height: 32
});

var layer = new Kinetic.Layer();

var imageObj = new Image();

imageObj.onload = function() {
    var ninja = new Kinetic.Sprite({
        x: 0,
        y: 0,
        image: imageObj,
        animation: 'horizontal',
        animations: {
            horizontal:[
                0,0,32,32,
                32,0,32,32,
                64,0,32,32,
                96,0,32,32
            ],
            down:[
                0, 32,32, 32,
                32, 32,32, 32
            ],
            up:[
                64, 32,32, 32,
                96, 32,32, 32
            ]
        },
        frameRate: 4,
        frameIndex: 0
    });

    layer.add(ninja);

    stage.add(layer);

    ninja.start();

    var frameCount = 0;

    // Moving
    function moveLeft() {
        ninja.scaleX(-1);
        ninja.attrs.animation = "horizontal";
    }

    function moveRight() {
        ninja.scaleX(1);
        ninja.attrs.animation = "horizontal";
    }

    function moveUp() {
        ninja.attrs.animation = "up";
    }

    function moveDown() {
        ninja.attrs.animation = "down";
    }

};
imageObj.src = 'ninja-sprite.png';