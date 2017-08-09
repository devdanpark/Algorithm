//Input => {U,D} and n(number)
//if U -> /
//if D -> \
//a vally is between sea levels


function processData(input) {
    
    var seaLevel = 0
    var vally = 0 
    var slopes = input.split("\n", 2)[1];
    for (var i in slopes) {
        seaLevel = (slopes[i] == 'U') ? seaLevel + 1 : seaLevel - 1;  //Increase/decrease sea level 
        if (seaLevel === 0 && slopes[i] === 'U') {              //Check for transition of sea level
            vally++;                                  
        }
    }
    console.log(vally);
} 


//function processData2(input){
//    var seaLevel = 0;
//    var vally = 0;
//    var slopes = input.split("\n", 2)[1];
//    for(var i in slopes) {
//        if(slopes[i] == 'U') {
//            seaLevel ++;
//        } else {
//            seaLevel --;
//        }
//        if(seaLevel === 0 && slopes[i] === 'U') {
//            vally++;
//        }
//    }
//    console.log(vally)
//}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

