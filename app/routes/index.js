var express = require('express');
var mads = require('madlibify');
var router = express.Router();
var stories = ['The quick {{color1}} {{noun1}} jumps over the lazy {{noun2}}'];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mad Libs!' });
});

router.post('/', function (req, res) {
  var index = stories.length;
  stories.push(req.body.content);
  res.render('index', { storyIndex: index });
});

router.get('/:story', function (req, res) {
  var storyNumber = req.params.story;
  var blanks = mads.parse(stories[storyNumber]);
  console.log(blanks)
  res.render('story', { blanks: blanks });
});

router.post('/:story', function (req, res) {
  var storyNumber = req.params.story;
  var body = req.body;
  var completeStory = mads.compile(stories[storyNumber], body);
  res.render('story', {story: completeStory});
});

module.exports = router;
