function triangleTracker(){
  var l = parseInt(document.getElementById("l").value);
  var w = parseInt(document.getElementById("w").value);
  var h = parseInt(document.getElementById("h").value);
  if (l===w && w===h && l===h){
    alert("This is an Equilateral triangle");
  }
  else if (l===w ||w===h ||  l===h) {
    alert("These in an Isosceles triangle");

  }
  else if ((l+w)<=h || (l+h)<=w || (w+h)<=l){
    alert("This is NOT a triangle");
  }
  else if (l!==w && w!==h) {
    alert("This is a Scalene triangle");
  }
}
