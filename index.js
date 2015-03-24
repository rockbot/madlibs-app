var mads = require('madlibify');

console.log(process.argv[2])

var t = process.argv[2];

console.log(mads.parse(t));

var obj = {
  color1: 'blue',
  noun1: 'kiwi',
  noun2: 'biscuit'
};

console.log(mads.compile(t,obj));
