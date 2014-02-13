/*
 * jQuery ReplaceOnError is a plug-in that lets you easily replace one image when trigger an error (403, 404, etc).
 * 
 * author: Francisco Lavin (@flavin)
*/
;(function( $ ){

    var defaults = {
        'placeholder': ''
    };

    $.fn.replaceOnError = function( options ) {
        var opts = $.extend( {}, defaults, options );

        return this.each(function () {
            var img = this;

            if (img.nodeName.toLowerCase() !== 'img')
                return;

            $(img).error(function() {
                if (!!img.getAttribute('data-broken_image_updated'))
                    return;

                img.src = opts.placeholder;

                // mark to avoid do it again.
                img.setAttribute('data-broken_image_updated','true');
            });
        });
    }
    return $.fn.replaceOnError;
})(jQuery);
