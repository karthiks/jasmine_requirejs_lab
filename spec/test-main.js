require.config({
    baseUrl: '',
    paths: {
        'domReady': 'lib/domReady', //domReady is a RequireJS plugin
        'jasmine': 'lib/jasmine-1.1.0/jasmine',
        'jasmine-html': 'lib/jasmine-1.1.0/jasmine-html',

        'hello': 'src/hello',
        // add new Subject Under Test here..

        'helloSpec': 'spec/helloSpec'
        // add new specs here
    },

    //You'd shim the 3rd party libs that are not AMD compatible
    shim: {
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': ['jasmine']
    },

    waitSeconds: 15
});

require([
    'domReady',
    'jasmine',
    'jasmine-html',
    'helloSpec'
    // add new specs here
],
function(domReady, jasmine) {
//    console.log("All is well..");
//    console.log(jasmine);
// Moved the script from Jasmine's SpecRunner.html scriptlet to this block..
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
    };


    domReady(function () {
        jasmineEnv.execute();
    });
});