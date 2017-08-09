/**
 * Input : The first line is an integer T, indicating the number of test cases.
 * The T subsequent lines each contain an integer, N
 * output : For every test case, count and print(on a new line)
 * the number of digits in N that are able to evenly divide N
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
function getlength(number) {
    return number.toString().length;
}
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var count = 0
        var n = parseInt(readLine());
        var digits = (""+n).split("");

        for(var i = 0; i < getlength(n); i++){
            if(digits[i] == 0){
                i++
            }
            if((n % digits[i]) == 0){
                count++
            }
            
           }
         console.log(count)

    }
    

}

