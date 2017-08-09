/**
 * Input : THe first line contains two space-seperated integer, n and k(the jump distance)
 * The second line contains n space-seperated integers describing the respective values of clouds c0,c1,...c_n-1
 * Each cloud is described as follows
 * if c_i = 0, ordinary cloud 
 * if c_i = 1, thundercloud
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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var energy = 100;
    var total = 0
    for(var i = 0; i < n; i+=k){

        if(c[i] == 0){
            energy -=1
            total ++
        } else if(c[i] == 1){
            energy -=1
            energy -=2
            total ++
        }
    }
    console.log(energy)

}