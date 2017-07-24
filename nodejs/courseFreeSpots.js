#!/usr/bin/env node

// Example:
// npm install
// node courseFreeSpots.js 1179 CS 241E

const {JSDOM} = require("jsdom");

function printFreeSpots(sess, subject, cournum){
  const url = `http://www.adm.uwaterloo.ca/cgi-bin/cgiwrap/infocour/salook.pl?sess=${sess}&subject=${subject}&cournum=${cournum}`;
  return JSDOM.fromURL(url).then(dom => {
    const document = dom.window.document;
    const numSpots = parseInt(document.querySelector("tr:nth-child(2) td:nth-child(7)").innerHTML.trim());
    const numTaken = parseInt(document.querySelector("tr:nth-child(2) td:nth-child(8)").innerHTML.trim());
    console.log(`${numSpots - numTaken} spots remaining in ${subject}${cournum}`);
  });
}

printFreeSpots(...process.argv.slice(2));
