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

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var ar1 = new Array(3);
    ar1 = [a0,a1,a2];
    var ar2 = new Array(3);
    ar2 = [b0,b1,b2];
    var arr1 = 0;
    var arr2 = 0;

    for(var i = 0; i < 3; i++)
     {
      if(ar1[i] != ar2[i])
        {
         if(ar1[i] > ar2[i])
         {
           arr1++;
         }else 
           arr2++;
        }
        }
        return [arr1, arr2];

}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    


}

