var path = require('path');
var sassTrue = require('sass-true');
var sass = require('node-sass');

var sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass({
    file: sassFile,
    functions: {
        'math-round($number)': function(number) {
            return new sass.types.Number(  Math.round(number.getValue())  );
        }
    }
}, { describe, it });

