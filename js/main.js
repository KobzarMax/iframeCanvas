$(function() {
    $(".inner").each(function() {
        var $wrap = $(this);
        function iframeScaler(){
            var wrapWidth = $wrap.width(); // width of the wrapper
            var wrapHeight = $wrap.height();
            var childWidth = $wrap.children("iframe").width(); // width of child iframe
            var childHeight = $wrap.children("iframe").height(); // child height
            var wScale = wrapWidth / childWidth;
            var hScale = wrapHeight / childHeight;
            var scale = Math.min(wScale,hScale);  // get the lowest ratio
            $wrap.children("iframe").css({"transform": "scale("+scale+")", "transform-origin": "left top", "overflow": "hidden" });  // set scale
        };
        $(window).on("resize", iframeScaler);
        $(document).ready( iframeScaler);
    });
});