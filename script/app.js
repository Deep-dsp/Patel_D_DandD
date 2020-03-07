(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img')
				gameBoard = document.querySelector('.puzzle-board'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				pieceContainer = document.querySelector('.puzzle-pieces');

  const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet()
	{
		//chnage all image elements on the page -> dragabble image sources

		//Change image on left box
		pieceNames.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
		puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;
																					});
		//and set the drop zone background image based on the puzzle that user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	function allowDrag(event)
	{
		console.log('Started Dragging an Image');

		event.dataTransfer.setData("text/plain", this.id);
		// debugger;
	}

	function allowDragOver(event)
	{
		if(this.childNodes.length == 0)
		{
			event.preventDefault();
		}
		console.log('Dragged Over Drop Zone');

	}

	function allowDrop(event)
	{
		//event.preventDefault();
		console.log('Dropped on a Drop Zone');

		let currentImage = event.dataTransfer.getData('text/plain');
		event.target.appendChild(document.querySelector(`#${currentImage}`));
	}

	function resetPuzzlePiecesCon()
	{
		for(let j=0;j<puzzlePieces.length;j=j+1)
		{
			pieceContainer.appendChild(puzzlePieces[j]);
		}
	}
	//add event handler -> how is user going to use our app
	//what triggers do we need?

	//click on the buttom buttons to change the puzzle image we are working with
	puzzleButtons.forEach(button => { button.addEventListener('click', changeImageSet),
									  button.addEventListener('click', resetPuzzlePiecesCon)
									});

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => { zone.addEventListener(('dragover'), allowDragOver);
														 zone.addEventListener(('drop'), allowDrop);
													 });

	//call the function nad pass in the first nav button as a reference
	// Call, apply and Bind -->
	changeImageSet.call(puzzleButtons[0]);
})();
