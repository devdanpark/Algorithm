function processData(input) {
    var setup = input.split(" ")
    var i = parseInt(setup[0])
    var j = parseInt(setup[1])
    var k = parseInt(setup[2])
    var beautifulDays = 0;
    for (i; i <= j; i++) {
        var reverse = parseInt(i.toString().split("").reverse().join(""), 10);
        if (Math.abs(i - reverse) % k === 0) {
            beautifulDays++;
        }
    }
    console.log(beautifulDays);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

