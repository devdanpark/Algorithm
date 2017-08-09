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

function getRecord(s){
    // Complete this function
    var count1 = 0
    var count2 = 0
    var max = s[0]
    var min = s[0]
    for(var i = 0; i < s.length; i++){
        while(s[i] < max){
            max = s[i]
            count1 += 1
        }
    }
    for(var j = 0; j < s.length; j++) {
        while(s[j] > min) {
            min = s[j]
            count2 += 1
        }
    }
    return [count2, count1]
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}

