#!/usr/bin/env node

var clipboard = require('copy-paste');
var fs=require('fs');

var filename=process.argv[2];
var option = [];
if(process.argv[3]!=undefined) option=process.argv[3].toLowerCase().split("");

if(filename==undefined){
    console.log([
        "",
        "Usage: pasteit filename <option>",
        "",
        " <option> can contain the following:",
        " a      append",
        " an     append preceded with a new line",
        "",
        " overwrite if no option is given",
        ""
    ].join("\n"));
}else{
    var fromClipboard = clipboard.paste();
    if(option.indexOf('a')>=0){
        fs.appendFile(filename, (option.indexOf('n')>=0)? "\n"+fromClipboard : fromClipboard,(err)=>{
            if (err) {
                return console.error(err);
            }
            console.log(fromClipboard.length+" byte(s) appended");
        });
    }else{
        fs.writeFile(filename,fromClipboard,(err)=>{
            if (err) {
                return console.error(err);
            }
            console.log(fromClipboard.length+" byte(s) written");
        });
    }
}

