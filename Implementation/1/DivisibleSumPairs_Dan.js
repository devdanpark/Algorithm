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

function divisibleSumPairs(n, k, ar) {
    // Complete this function
    var sum = 0;
    var count = 0
    for(var i = 0; i < ar.length; i++){
        for(var j = 0; j < ar.length; j++){
            if(j !== i){
            sum = ar[i] + ar[j]
            var rem = sum % k
            if(rem == 0) {
                count ++ 
            } else {
                count = count
            }
        }
    }
  }
    return count/2
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    process.stdout.write("" + result + "\n");

}

