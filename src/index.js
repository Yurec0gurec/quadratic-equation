module.exports = function solveEquation(equation) {

    var a,b,c;
    
    var regEx = /(-|\d{2,})/g;
    var numbers = equation.match(regEx);
    if(numbers.length == 3) {
    a = numbers[0];
    b = numbers[1];
    c = numbers[2];
    }
    if(numbers.length == 4) {
        if(numbers[0] == "-") {
           numbers[1] = numbers[1] * (-1);
           a = numbers[1];
           b = numbers[2];
           c = numbers[3];
           }
       else if(numbers[1] == "-") {
               numbers[2] = numbers[2] * (-1);
               a = numbers[0];
               b = numbers[2];
               c = numbers[3];
               }
        else if(numbers[2] == "-") {
            numbers[3] = numbers[3] * (-1);
            a = numbers[0];
            b = numbers[1];
            c = numbers[3];
        }
} 
    if(numbers.length == 5) {
        if(numbers[0] == "-" && numbers[2] == "-") {
            numbers[1] = numbers[1] * (-1);
            numbers[3] = numbers[3] * (-1);
            a = numbers[1];
            b = numbers[3];
            c = numbers[4];
        }
        else if(numbers[0] == "-" && numbers[3] == "-") {
            numbers[1] = numbers[1] * (-1);
            numbers[4] = numbers[4] * (-1);
            a = numbers[1];
            b = numbers[2];
            c = numbers[4];
        }
        else if(numbers[1] == "-" && numbers[3] == "-") {
            numbers[2] = numbers[2] * (-1);
            numbers[4] = numbers[4] * (-1);
            a = numbers[0];
            b = numbers[2];
            c = numbers[4];
        }
    }
   if(numbers.length == 6) {
       numbers[1] = numbers[1] * (-1);
       numbers[3] = numbers[3] * (-1);
       numbers[5] = numbers[5] * (-1);
       a = numbers[1]
       b = numbers[3];
       c = numbers[5];
}
    
   
 
    var kord;
    var x1, x2;
    var d = b * b - 4 * a * c;
    if (d === 0) {
        x1 = -b / (2 * a)   ;
        x2 = -x1;
    } else {
        kord = Math.sqrt(d);
        x1 = (-b - kord) / (2 * a);
        x2 = (-b + kord) / (2 * a);
    }
var ans1 = Math.round(x1)
var ans2 = Math.round(x2)

 var answer = [];
 answer.push(ans1);
 answer.push(ans2);
 answer.sort(function(a,b) { return a - b; });
 
 return answer;
}
