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
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        if(Math.max(...x_temp) === z) {
            if((x > y) || ((x === z) && (y !== z))) {
                console.log('Cat A')
            } else if((y > x)||((y === z)&&(x !== z))) {
                console.log('Cat B')
            } else if(((x === z)&&(y ===z)) || ((Math.abs(y-z)) === (Math.abs(x-z)))) {
                console.log('Mouse C')
            }
        } else {
            if(((Math.abs(y-z)) > (Math.abs(x-z))) || (x === z)) {
                console.log('Cat A')
            } else if(((Math.abs(y-z)) < (Math.abs(x-z))) || (y === z)) {
                console.log('Cat B')
            } else if(((x === z) && (y === z)) || ((x > y) && (y < z)) || (x < y) && (x < z)) {
                console.log('Mouse C')
            }
        }
    }
}

