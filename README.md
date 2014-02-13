#About
**jQuery replaceOnError** is a plug-in that lets you easily replace one image when trigger an error (403, 404, etc).

The syntax is as follows:

    $(expression).replaceOnError(options);
    
    
    // e.g. replace bad image with '/static/img/default/avatar.png'
    $('img.foo').replaceOnError({'placeholder': '/static/img/default/avatar.png'});

## Options
placeholder: the url of the image to use as default
