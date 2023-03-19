
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header1 = document.getElementsByClassName("button");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header1").style.fontSize = "2em";
    
    for (let i = 0; i < header1.length; i++) {
        header1[i].style.padding = "6px";
    }
  } else {
    document.getElementById("header1").style.fontSize = "4em";
    
    for (let i = 0; i < header1.length; i++) {
        header1[i].style.padding = "12px";
    }
  }
}
