var webPage = require('webpage');
var page = webPage.create();

page.onConsoleMessage = function(msg) {
    console.log(msg)    
}

page.open('SpecRunner.html', function(status) {

    phantom.exit();

});
