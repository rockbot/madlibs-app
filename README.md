# Node.js Workshop + Madlibs App

## Goals

* Understand the basics of node
* Play with the REPL
* Talk about modules/packages and npm
* Install a module
* Build a command-line application that uses the module
* Build a web application that uses the module

## What is Node.js?

* "Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices." - www.nodejs.org

## How do I play with the REPL?

* After installing node, type `node` on the command line. You'll see a a line that starts with `>`. This is the Read-Eval-Print-Loop (REPL). You can treat it exactly like the console in your browser, except you can require modules :-)

## What is a module?

* A module is a snippet of code that you can install via npm (node's package management system).

## How do I install a module?

* npm comes with node.js, though it may not be the most up-to-date version. Ensure you have it with `[sudo] npm install npm -g`.
* To install a module, simply do `npm install <modulename>`. You can find all sorts of modules at https://www.npmjs.com.
* For this exercise, let's install the [`madlibify`](https://www.npmjs.com/package/madlibify) module.

## Build a command-line application that uses `madlibify`

* First, familiarize yourself with [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) works. (It's a children's game and very simple :-))
* Next, review the `madlibify` [README](https://www.npmjs.com/package/madlibify#to-use)
* Finally, create a very simple program that takes a stringed command line argument and returns the madlibified string
* Feel free to extend this simple program to take in a file name, ask the user for inputs, etc!
* For an example application, see `index.js` in this repo.

## Build a web application

* Using the [Express framework](https://www.npmjs.com/package/express), create a web application that allows a user to input a story skeleton and share a URL with someone else, at which point the other person can fill in the blanks and see the generated story.
* To see an example (but far from complete!) application, look in the `app` folder in this repo.
