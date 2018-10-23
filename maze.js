// ID# : 620107667



window.onload = function(){


    let boundary = document.querySelectorAll(".boundary");
    let boundary1 = document.getElementById("boundary1");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let maze = document.getElementById("maze");
    let tap = 0;

//
// // Turns first boundary wall red
    boundary1.addEventListener("mouseover", youLost);


    // boundaries to highlight red
    boundary.forEach(b => {b.addEventListener("mouseover", youLost)});

  }

    // function instant(){
  	// 	for ( k=0; k<boundaries.length ; k++){
		// 	      boundaries[b].addEventListener("mouseover", function(element){
		// 		for ( k=0; k<boundaries.length ; k++)
		// 		boundaries[b].classList.add("youlose");
		// 		status = document.getElementById("status").innerHTML = "You have Lost. Click S to start over."
		// 		//boundaries[b].removeListener();

    //   for (let i = 0; i < boundary.length; i++){
    //     boundary[i].className='div.youlose'
    //   }
    // }

//Exercise 2
    function youLost(){

      for (let i = 0; i < boundary.length ; i++){
          boundary[i].classList.contains("youlose")
          document.getElementById("status").innerHTML = "You Lose! Better Luck next time!"
    }
}



    end.addEventListener("mouseover", youWon);


//
    function youWon(){
    //for (let i=0; i < boundary.length; i++){
        let x =document.getElementsByClassName('youlose');

        if (x.length == 0){
          document.getElementById("status").innerHTML = "You Win!!"

    }
  }


    start.addEventListener("click", startOver);

// Function allows player to start over after losing
    function startOver(){
      // let boundary = document.querySelectorAll(".boundary");
      //
      // for (let i = 0; i < boundary.length ; i++){
      //   boundary[i].classList.remove("youlose");
      //   tap = 0;
      // document.getElementById("status").innerHTML = "Move back to 'S' to begin";
      boundary.forEach(b => {b.classList.remove("youlose")});

      let boundary = document.querySelectorAll (".boundary")
              impact=0;
              document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";

    }


    maze. addEventListener("mouseleave", noCheat);

//Exercise 6
    function noCheat(){
      youLose();
      document.getElementById("status").innerHTML = "Cheating not allowed , TRY AGAIN!";

  }

}
