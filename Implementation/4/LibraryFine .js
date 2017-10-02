/**
 * Calculating Library Fine.
 * If on time, fine = 0
 * If same month, late day, fine = 15 * dif
 * If dif month, late, fine = 500 * dif(month)
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
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);

    var pen = 0;
    var count = function () {
        if (y1 != y2) {
            if (y2 > y1) {
                pen = 0;
            } else {
                pen = 10000;
            }
        } else if (y1 == y2) {
            if (m1 == m2 && d1 == d2) {
                pen = 0;
            } else if (m1 != m2) {
                if (m2 - m1 > 0) {
                    pen = 0;
                } else {
                    pen = 500 * Math.abs((m2 - m1))
                }
            } else if (m1 == m2 && d1 != d2) {
                if (d2 - d1 > 0) {
                    pen = 0;
                } else {
                    pen = 15 * Math.abs((d2 - d1))
                }
            }
        }
        console.log(pen)
    }

    count();

}