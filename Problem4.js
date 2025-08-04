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