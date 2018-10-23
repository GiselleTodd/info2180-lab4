// ID# : 620107667



window.onload = function(){


    let boundary = document.querySelectorAll(".boundary");
    let boundary1 = document.getElementById("boundary1")
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let maze = document.getElementById("maze");
    let tap = 0;

 // // Turns first boundary wall red
    boundary1.addEventListener("mouseover", youLost);



    boundary.forEach(b => {b.addEventListener("mouseover", youLost)});


    //Exercise 2
    function youLost(){
      tap++;
      this.classList.add("youlose");
}

    end.addEventListener("mouseover", youWon);

    function youWon(){
    //for (let i=0; i < boundary.length; i++){
        if (tap < 1){
          document.getElementById("status").innerHTML = "You Win!!"
    }else (
       document.getElementById("status").innerHTML = "You Lose!"
    )
  }


    start.addEventListener("click", startOver);

// Function allows player to start over after losing
    function startOver(){

      boundary.forEach(b => {b.classList.remove("youlose")});

      //let boundary = document.querySelectorAll (".boundary")
              tap=0;
              document.getElementById("status").innerHTML = "Click 'S' to start over.";

    }


    maze.addEventListener("mouseleave", noCheat);

//Exercise 6
    function noCheat(){
      document.getElementById("status").innerHTML = "Cheating not allowed , TRY AGAIN!";

  }
};
