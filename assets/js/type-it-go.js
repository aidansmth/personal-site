new TypeIt(".multipleStrings", {
    breakLines: false,
    lifelike: true,
    loop: false,
    startDelay: 750,
    speed: 90,
    afterComplete: function (instance) {
        instance.destroy();
    }
}).go();