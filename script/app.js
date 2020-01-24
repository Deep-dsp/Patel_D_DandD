(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

	function changeImageSet()
	{
		//chnage all image elements on the page -> dragabble image sources,
		//and set the drop zone background
		debugger;
	}

	//add event handler -> how is user going to use our app
	//what triggers do we need?

	//click on the buttom buttons to change the puzzle image we are working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
