time_elm = document.getElementById("current-time")

// var today = new Date();
// var time = today.getDay() + ":" + today.getMonth() + ":" + today.getFullYear();

// document.getElementById("current-time").innerText = time;

var dt = new Date();
document.getElementById("current-time").innerHTML = dt.toLocaleDateString();

function sidebarcontent() {
    var element1 = document.getElementById("hidden");

    console.log(element1);
    console.log("hello world");
  
    if (element1.style.display === "" || element1.style.display === "none") {
      element1.style.display = "block";
    } 
  }

  function close_sidebar() {
    var element1 = document.getElementById("hidden");
  
      element1.style.display = "none";
    
  }


    