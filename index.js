var mads = require('madlibify');
var fs = require('fs');

fs.readFile('./story.txt', 'utf8', function (err, t) {
  if (err) {
    console.error(err);
  }
  
  console.log("HERE'S THE STUFF: ", t)
  console.log(mads.parse(t));

  var obj = {
    color1: 'blue',
    noun1: 'kiwi',
    noun2: 'biscuit'
  };

  console.log(mads.compile(t,obj));

});

