/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var result =0;
for (var i =1; i<=experience; i++){
    result = (startingSalary *5)/(100)
    startingSalary=result+startingSalary
}
console.log(startingSalary.toFixed(2))