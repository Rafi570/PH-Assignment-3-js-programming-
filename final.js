// ------------------------------------------------------1-------------------------------------------------------------------------


/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here

console.log(area/2);

// -----------------------------------------------------------2-----------------------------------------------------------------

/** Problem -02 ( Cycle or Laptop ) */
var money = 24000;
//write your code here

if (money < 10000){
    console.log("Chocolate")
}
else if (money >=10000 && money < 25000){
    console.log("Cycle")
}
else{
    console.log("Laptop")
}

// --------------------------------------------------3-----------------------------------------------------------------------------


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here


for (var day=1; day<=lastDay; day++){
    if (day %3==0){

        // 3 - medicine
        console.log(day.toString()+" "+"-"+" "+"medicine")
    }
    else{
        console.log(day.toString()+" "+"-"+" "+"rest")
    }
}


// --------------------------------------------------------------4-------------------------------------------------------------------------

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if (fileName[0]=="#"
     || 
    (fileName[fileName.length-1]=="f" && fileName[fileName.length-2]=="d" && fileName[fileName.length-3]=="p" && fileName[fileName.length-4]==".") 
    || 
    (fileName[fileName.length-1]=="x" && fileName[fileName.length-2]=="c" && fileName[fileName.length-3]=="o" && fileName[fileName.length-4]=="d" && fileName[fileName.length-5]==".")){
    console.log("Store")

}
else{
    console.log("Delete")
}

// -----------------------------------------------------------------------------5----------------------------------------------------------------

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"  };
//write your code here
console.log(student.name+student.roll+"."+student.department+"@ph.ac.bd")


// ---------------------------------------------------------------------------------6-------------------------------------------------------------


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





// ----------------------------------------------------end---------------------------------------------------------------