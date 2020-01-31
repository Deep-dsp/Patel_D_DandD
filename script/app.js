(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img')
				gameBoard = document.querySelector('.puzzle-board'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img');

  const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet()
	{
		//chnage all image elements on the page -> dragabble image sources

		//Change image on left box
		pieceNames.forEach((piece, index) => puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg` );
		//and set the drop zone background image based on the puzzle that user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	//add event handler -> how is user going to use our app
	//what triggers do we need?

	//click on the buttom buttons to change the puzzle image we are working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	//call the function nad pass in the first nav button as a reference
	// Call, apply and Bind --> 
	changeImageSet.call(puzzleButtons[0]);
})();
