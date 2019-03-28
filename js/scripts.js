function triangleTracker(){
  var l = parseFloat(document.getElementById("l").value);
  var w = parseFloat(document.getElementById("w").value);
  var h = parseFloat(document.getElementById("h").value);
  if (l===w && w===h && l===h){
    alert("This is an Equilateral triangle");
  }
  
}
