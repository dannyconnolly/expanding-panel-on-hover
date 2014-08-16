$(document).ready(function() {
    $('.kwicks').kwicks({
        maxSize: '60%',
        spacing: 0,
        behavior: 'menu',
        duration: 500,
        isVertical: false,
        easing: undefined,
        autoResize: true,
        delayMouseIn: 0,
        delayMouseOut: 0,
        selectOnClick: true,
        deselectOnClick: false,
        // slideshow behavior options:
        interval: 500,
        interactive: true
    });
});