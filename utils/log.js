
import {key_log} from "../config/cf.js";

let getStackTrace = function () {
    let obj = {};
    Error.captureStackTrace(obj, getStackTrace)
    return obj.stack
}

let customerLogger = function () {

    //get file dir
    let stack = getStackTrace();
    let stackArr = stack.split('\n');
    let atFile = stackArr[3];

    // get arguments
    let args = Array.from(arguments)
    let argsBreakLine =  args.map(arg => arg + '\n')
    argsBreakLine.unshift('[DEBUG]', atFile.trim(), '\n')

    //run
    console.log.apply(console, argsBreakLine)
}

export function DEBUG (){
    if (key_log === "developer") {
        let args = Array.from(arguments)
        customerLogger(...args)
    }
    else if (key_log === "disable" ) {
         // do not 
    }
}