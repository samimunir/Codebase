# EJS (Embedded JavaScript)
## Templating
Allows us to send back a full HTML page (with CSS & JavaScript) from the server.
* __Separation of conerns__
    * Front-end
        * HTML
        * CSS
    * Back-end
        * JavaScript
## How does it work?
Almost like a little JavaScript module that can run JavaScript code inside a HTML file. *(.ejs file extension)*.
* res.sendFile() is only functional for static files.
* res.render() allows us to specify which file to render on the screen, and then add a JavaScript object to pass over some properties (key, value pair).