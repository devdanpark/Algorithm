function processData(input) {
        var reached = 2
        var sharing = 2
        for(var i = 1; i < input; i++)
        {
            reached += Math.floor((sharing * 3) / 2);
            sharing = Math.floor((sharing * 3) / 2);
        }
    console.log(reached);
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

