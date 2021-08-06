var inPt=document.getElementById("inPt");
var outPt=document.getElementById("outPt");

inPt.oninput=changer;

function changer(){
    var cel = inPt.value;
    var farn= (cel*1.8)+32;

    if(inPt.value=="") outPt.value="";
    else outPt.value=farn  +" "+String.fromCharCode(176) +"F";
}