/*global $*/
/*global site_base*/
"use strict";

var editableimage = function(tthis)
    // $(".editableimage").change(function()
    {
        var self= this;

        if(tthis instanceof HTMLElement)
            self=$(tthis);

        var base=0;
        var image_id=$(self).attr("image-id");
        var name="nombre";


        if ( self.files && self.files[0] ) 
        {
            name = self.files[0].name;
            var FR = new FileReader();
            FR.onload = function(e) 
            {
                try
                {
                    document.getElementById("imgLOAD").style.display='block';
                }
                catch (ex)
                {
                    // nothing here..
                }

                base=e.target.result;
                // name=self.file.split(/(\\|\/)/g).pop();
                $.post(site_base + "/editableimage/save", { 
                    "image_id" : image_id, 
                    "base64" : base, 
                    "name": name 
                }, function(result)
                {
                    document.getElementById(image_id).removeAttribute('onload');
                    document.getElementById(image_id).setAttribute( 'src', e.target.result);
                    // document.getElementById(image_id).setAttribute( 'onload', "this.src='"+e.target.result+"'");
                    
                    try
                    {
                        document.getElementById("imgLOAD").style.display='none';
                    }
                    catch (err)
                    {
                        // nothing here...
                    }
                }).error(function(error)
                {
                    console.log("no se pudo subir la imagen", error)
                });
           };
           FR.readAsDataURL( self.files[0] );
       }
   };

$(document).ready(function()
{
  $(document).on("change", ".editableimage", editableimage);
});



