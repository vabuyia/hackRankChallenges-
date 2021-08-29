/******
 * Day 6: Let's Review

Task
Given a string, S, of length N that is indexed from 0 to N-1 , print its even-indexed and odd-indexed characters 
as 2  space-separated strings on a single line (see the Sample below for more detail).

Note: 0  is considered to be an even index.



Print abc def
 */

function processData(input) {
    //Enter your code here
     message = input.split("\n");
    
    var n = parseInt(message[0]);
    
    for (var x = 0; x < n; x++)
        {
            var m = message[x + 1];
            var l = m.length;
            var arr = m.split('');
            var ra = "";
            var rb = "";
            
            for (var y = 0; y < l; y++)
                {
                    if (y%2 == 0)
                        ra = ra + arr[y];
                    else
                        rb = rb + arr[y];
                }
            console.log(ra + " " + rb);
            
        }
} 