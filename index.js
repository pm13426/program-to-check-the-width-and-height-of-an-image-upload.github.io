$( document ).ready(function() {
$("#ImageForm").submit( function( e ) {
    var form = this;
    e.preventDefault(); //Stop the submit for now
                                //Replace with your selector to find the file input in your form
    var fileInput = $(this).find("#image-file")[0],
        file = fileInput.files && fileInput.files[0];
	console.log(file)
    if( file ) {
        var img = new Image();

        img.src = window.URL.createObjectURL( file );

        img.onload = function() {
            var width = img.naturalWidth,
                height = img.naturalHeight;

            window.URL.revokeObjectURL( img.src );

            if( width <= 200 && height <= 200) {
                form.submit();
            }
            else {
                alert('too big');
            }
        };
    }
    else { //No file was input or browser doesn't support client side reading
        form.submit();
    }

});
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<form id="ImageForm" method="post">

    Upload image:
    <input id="image-file" type="file" name="file" />
    <input type="submit" value="Upload" />
</form>