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

//find Minimum value among array elements.

function cutTheStick(arr) {
    var temp = [];
    var len = arr.length
    console.log(len)
    while (len !== 0) {
        var min = Math.min(...arr);
        for (var i = 0; i < len; i++) {
            if ( arr[i] - min > 0)
                temp.push(arr[i] - min);
        }
        if (temp.length == 0){
            break;
            } else {
        console.log(temp.length);
        //reset the temp to go next step
        arr = temp;
        temp = [];
                }
    }

}
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    cutTheStick(arr);
}