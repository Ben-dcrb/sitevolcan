const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const btnsquizz = document.querySelector('.btn-second');
const btnvalidation = document.querySelector('.btn-third');

window.addEventListener('load', () => {
		const TL = gsap.timeline({paused :true});
		TL
		.staggerFrom(titreSpans, 1, {top:-50, opacity: 0, ease: "power2.out"}, 0.2)
		.staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.2, '-=1')
		.staggerFrom(btnsquizz, 1, {opacity: 0, ease: "power2.out"}, 0)
		TL.play();
})

btnsquizz.addEventListener("mouseover", function() {
 	this.textContent = "Vous êtes sûrs de vous ?";
})
btnsquizz.addEventListener("mouseout", function() {
 	this.textContent = "Tentez notre Quizz";
})

btnvalidation.addEventListener("click", function() {
	alert("test");
	this.textContent = "Tessizz";
})

