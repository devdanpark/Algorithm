//Input -> money, #keyboards, # usb
//Input -> prices of each keyboards and usb for second and third lines
//output -> max money for buying each one of usb and keyboard 

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

function getMoneySpent(keyboards, drives, s){
    // Complete this function
    var total = 0
    var arr = []
    var keySorted = keyboards.sort()
    var usbSorted = drives.sort()
    var min = Math.min(...keySorted) + Math.min(...usbSorted)
    if(min > s) {
        return -1
    } else {
    for(var i in keySorted) {
        for(var j in usbSorted) {
            if((keySorted[i] + usbSorted[j]) <= s){
                total = keySorted[i] + usbSorted[j]
                arr.push(total)
            }
        }
    }
    return Math.max(...arr)
  }
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    process.stdout.write(""+moneySpent+"\n");

}

