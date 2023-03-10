var balls = document.getElementsByClassName("ball");
var slits = document.getElementsByClassName("slit");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth; //removed + "%""
      var y = (event.clientY * 100) / window.innerHeight;

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x + "%";
        slits[i].style.left = x + "%";
        balls[i].style.top = y + "%";
        slits[i].style.top = y + "%";
        balls[i].transform = "translate(-" + x + "%,-" + y + "%)";
        slits[i].transform = "translate(-" + (x+10) + "%,-" + (y+10) + "%)";
      }
    };

