/*global jQuery*/
/*global MediumEditor*/


"use strict";


/**
 * version 0.1
 */

String.prototype.unformatMoney = function()
{
    var n = this;
    return parseFloat( n.split("$").join("").split(".").join("").split(",").join("").split(" ").join("")  );
};


(function($) {

    var initWysiwyg = function($div, callback)
    {
        var site = $.environmentVar('/n', '', '');
        var me;

        // detect if summernote is available

        try 
        {
            me = MediumEditor;
        }
        catch (ex)
        {
            // nothing here...
        }

        if (me === undefined)
        {
            $('<link/>', {
               rel: 'stylesheet',
               type: 'text/css',
               href: 'https://cdn.jsdelivr.net/medium-editor/latest/css/medium-editor.min.css'
            }).appendTo('head');
            $('<link/>', {
               rel: 'stylesheet',
               type: 'text/css',
               href: 'https://yabwe.github.io/medium-editor/bower_components/medium-editor/dist/css/themes/beagle.css'
            }).appendTo('head');
            $('<link/>', {
               rel: 'stylesheet',
               type: 'text/css',
               href: site + '/common/css/wysiwyg.custom.css'
            }).appendTo('head');

            // load summernote
            $.getScript('https://cdn.jsdelivr.net/medium-editor/latest/js/medium-editor.min.js', function(){
                new initWysiwyg($div, callback);
            });

            return;
        }

        // init on all textareas with class "textareas"
        if ($div.data('textedit-wysiwyg') === undefined)
        {

            var editor = new MediumEditor($div, {
                placeholder: {
                    text: 'click para editar...'
                },
                toolbar: {
                    buttons : ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'quote']
                }
            });

            $div.data('textedit-wysiwyg', editor);

            editor.subscribe('focus', function()
            {
                $div.data('old-code', $div.html());
            });

            editor.subscribe('blur', function () 
            {
                callback($div.data('old-code'), $div.html());
            });

            $div.on('click', function(e)
            {
                e.preventDefault();
            });
        }
    };

    $.fn.editable = function(options, callback) 
    {

        if (typeof(options) == "function")
        {
            callback = options;
            options = {};
        }

        if (callback === undefined)
        {
            callback = function(){};
        }

        var set = $.extend({
                    textAlign : "left",
                    changed: callback,
                    width  : "auto",
                    height : "auto",
                    input_type : "input",
                    event  : "click" // "dblclick"
                }, options);

        // check dependencies
        if ($.environmentVar === undefined)
        {
            $.ajax({
              url: '/common/js/environment.detection.js',
              dataType: "script",
              success: $.noop
            });
        }

        $(this).each(function()
        {
            $(this).on( set.event, function(evt)
            {
                evt.stopPropagation();
                evt.preventDefault();

                var $element = $(this);
                // var old_data = $element.html(); // parseInt( $element.html().unformatMoney() );

                if ($element.attr( "lp-editing" ) == "true")
                {
                    return true;
                }

                new initWysiwyg($element, function(old_code, new_code)
                {
                    $element.html( new_code );
                    set.changed.call( $element, old_code, new_code );
                    $element.attr( "lp-editing", "false" );
                });

                $element.attr( "lp-editing", "true" );
                $element.on('click', function(e)
                {
                    e.preventDefault();
                });

                return;

            });
        });
    };

})(jQuery);
