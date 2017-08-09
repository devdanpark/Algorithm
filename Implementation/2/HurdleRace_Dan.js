//Hurdle Race
//Input = > The first line contains two space-separated integers describing the respective values of n(the number of hurdles) 
//and k (the maximum height he can jump without consuming any beverages).
//The second line contains  space-separated integers describing the respective values heights
//Output : Print an integer denoting the minimum number of magic beverages Dan must drink to complete the hurdle race.



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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    height = readLine().split(' ');
    height = height.map(Number);
    // your code goes here
    
  var highest = Math.max(...height);

  var minDrinks = 0;

  if (k < highest) {
    minDrinks = highest - k;
  }
    console.log(minDrinks)
}

