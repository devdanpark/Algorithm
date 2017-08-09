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

function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) {
    return 'NO';
  }
  var sum1 = x1;
  var sum2 = x2;
  var gap = x2 - x1;
  while (sum1 < sum2) {
    sum1 += v1;
    sum2 += v2;
    if (sum1 === sum2) {
      return 'YES';
    } else if ((sum2 - sum1) === gap) {
      return 'NO';
    }
  }
  return 'NO';
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}

