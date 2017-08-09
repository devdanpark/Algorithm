/**
 * When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In a new kind of PDF viewer, the selection of each word is independent of the other words; this means that 
 * each rectangular selection area forms independently around each highlighted word.
 * In this type of PDF viewer, the width of the rectangular selection area is equal to the number of letters in the word times the width of a letter, 
 * and the height is the maximum height of any letter in the word.
 * 
 * Input : The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter. 
 * Output : Print a single integer denoting the area of highlighted rectangle when the given word is selected. The unit of measurement for this is square millimeters, but you must only print the integer.

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

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var eq = []
    for(var i = 0; i < 26; i++){
        for(var j = 0; j < word.length; j++){
            if(word[j] === arr[i]){
                eq.push(h[i])
            }
        }
    }
    console.log(Math.max(...eq) * word.length)
}

