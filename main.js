// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
modal.className = "hidden";

let glyphs = document.querySelectorAll(".like-glyph");
glyphs.forEach((glyph) => {
	glyph.addEventListener("click", () => {
		mimicServerCall()
			.then(() => {
				if (glyph.innerHTML === EMPTY_HEART) {
					glyph.innerHTML = FULL_HEART;
					glyph.className = "activated-heart";
				} else {
					glyph.innerHTML = EMPTY_HEART;
					glyph.className = "";
				}
			})

			.catch((error) => {
				modal.className = "";
				modal.innerText = error;
				setTimeout(() => {
					modal.className = "hidden";
				}, 3000);
			});
	});
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject("Random server error. Try again.");
			} else {
				resolve("Pretend remote server notified of action!");
			}
		}, 300);
	});
}