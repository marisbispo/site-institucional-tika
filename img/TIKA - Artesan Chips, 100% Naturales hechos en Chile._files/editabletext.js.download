/*global $*/
/*global site_base*/
"use strict";

$(document).ready(function()
{
    $(".editabletext").editable(
        {
            "textAlign" : "center", 
            width : "100%",
            height : "200px",
            color : "black",
            input_type : "textarea",
        }, function(old_data, new_data)
        {

            if (new_data == "")
            {
                $(this).html("click para editar");
            }
            var text_id = $(this).attr("text-id");
            $.post(site_base + "/editabletext/save", { "text_id" : text_id, "content" : new_data }, function(){
                // nothing here
            });
        });
});
