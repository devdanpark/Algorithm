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

function solve(y){
    var days =  31 + 31 + 30 + 31 + 30 + 31 + 31;
    var feburary = ''
    
    if(y>1918) {
        if(((y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0)))) {
            feburary = 29
        } else {
            feburary = 28
        }
    } else if(y < 1918) {
        if(y % 4 == 0) {
            feburary = 29;
        } else {
            feburary = 28
        }
    } else {
        if(y % 4 ==0) {
            feburary = 29
        } else {
            feburary = 28
        }
        feburary -= 14
        feburary += 1
    }
    days += feburary
    var day = 256 - days
    return day + '.' +'09.' + y
    }
function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}

