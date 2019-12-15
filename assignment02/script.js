$(document).ready (function(){

var female1 = prompt("enter protagonist name","Dorthy")
$("#female1 , #female1_rep, #female1_rep1").text(female1);

var State1 = prompt("enter state name","Kansas");
$('#State1').text(State1);

var GeoFeat1 = prompt("enter geo feature", "canyon");
$('#GeoFeat1, #GeoFeat1_rep').text(GeoFeat1);

var Male1 = prompt("enter Uncle name","Ben");
$('#Male1, #Male1_rep').text(Male1);

var job1 = prompt("enter occupation", "farmer");
$('#job1').text(job1);

var female2 = prompt("enter Aunts name","Maby");
$("#female2, #female2_rep").text(female2)

var Noun1 = prompt("enter funiture noun 1/5","couch");
$('#Noun1').text(Noun1);

var Noun2 = prompt("enter funiture noun 2/5","cupboard");
$('#Noun2').text(Noun2);

var Noun3 = prompt("enter description 3/5","barn");
$('#Noun3').text(Noun3);

var Noun4 = prompt("enter an object 4/5","tree");
$('#Noun4').text(Noun4);

var Noun5 = prompt("enter an object 5/5", "cloud");
$('#Noun5').text(Noun5);

var color1 = prompt("enter color description","brown");
$("#color1 , #color1_rep, #color1_rep1").text(color1);

});
