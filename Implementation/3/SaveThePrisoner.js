/**
 * Input : The first line contains an integer T (number of test cases)
 * T subsequent lines each contain 3 space-seperated integers
 * N(number of prisoners), M(number of sweets), S(the prisoner ID)
 * Output : For each test case, print the ID number of the prisoner who receives the poisoned sweet on a new line.
 */




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

function saveThePrisoner(n, m, s){
    
    var res = m+s-1
    res = res % n
    if(res === 0){
        return n
    }
    else {
        return res
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write(""+result+"\n");
    }

}

