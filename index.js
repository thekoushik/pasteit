#!/usr/bin/env node

var clipboard = require('copy-paste');
var fs=require('fs');

var filename=process.argv[2];

if(filename==undefined){
    console.log([
        "",
        "Usage: pasteit filename",
        ""
    ].join("\n"));
}else{
    var fromClipboard = clipboard.paste();
    fs.writeFile(filename,fromClipboard,(err)=>{
        if (err) {
            return console.error(err);
        }
        console.log(fromClipboard.length+" byte(s)");
    });
}

