process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function timeConversion(s) {
    // Complete this function
    if (s.slice(s.length - 2, s.length) == "AM") {
      if (s.slice(0, 2) === "12") {
        var timeAM = '00' + s.slice(2, s.length - 2)
        return timeAM
      } else {
        var timeAM = s.slice(0, s.length-2)
        return timeAM
      }
    } else if (s.slice(s.length - 2, s.length) == "PM") {
      if (s.slice(0,2) !== "12") {
        var timePM = parseInt(s.slice(0, 2)) + 12 + s.slice(2, s.length-2);
        return timePM
      } else {
        var timePM = '12' + s.slice(2, s.length - 2)
        return timePM
      }
    }
   
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}

