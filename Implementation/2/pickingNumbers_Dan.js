//Given an array of integers, find and print the 
//maximum number of integers you can select from the array 
//such that the absolute difference between any two of the chosen integers is less than 1 .



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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    a.sort()
  var max = 0
  var counter = 1
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if ((Math.abs(a[i] - a[j]) <= 1)) {
        counter++
      } else {
        break
      }
    }
    if (counter > max) {
      max = counter
    }
    counter = 1
  }
console.log(max)
}


