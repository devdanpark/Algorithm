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

function getTotalX(a, b){
    var total = 0;

    for(var i = a[0]; i<=b[0]; i++){
     var counter = 0;
        
      for(var j = 0; j<a.length; j++){
        if(i % a[j] !== 0){
          counter += 1;
        }
      }

      if (counter === 0){
        for(var z = 0; z<b.length; z++){
           if(b[z] % i !== 0){
            counter += 1;
          }
        }
      }

      if(counter === 0){
        total+=1;
      }

    }
    return(total);

}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write(""+total+"\n");

}

