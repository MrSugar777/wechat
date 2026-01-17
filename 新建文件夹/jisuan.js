function z(){
document.getElementById("res").innerHTML = Number(document.getElementById("a").value) + Number(document.getElementById("b").value)  ;
}
function x(){
document.getElementById("res").innerHTML = Number(document.getElementById("a").value) - Number(document.getElementById("b").value)  ;
}
function c(){
document.getElementById("res").innerHTML = Number(document.getElementById("a").value) * Number(document.getElementById("b").value)  ;
}
function v(){
document.getElementById("res").innerHTML = Number(document.getElementById("a").value) / Number(document.getElementById("b").value)  ;
}
function S(){
var ans1 = 0;
a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);

for(var i1 = a;i1<=b;i1=i1+1){
ans1=ans1+i1;
}
document.getElementById("ans1").innerHTML = ans1;
}

function s(){
var ans2 = 0;
a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);

for(var i2 = a;i2<=b;i2=i2+1){
if(i2%2==1){
ans2=ans2+i2;
}
}
document.getElementById("ans2").innerHTML = ans2;


}