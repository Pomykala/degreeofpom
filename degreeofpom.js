const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
let sum = 0
let degreelist = 0
for(let i=0,i<mtrx(v-1).length;i++){
    sum = sum + mtrx(v-1)[i];

}
return sum;
}

function degreecentrality(){

}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
