//alert("Bienvenue sur le meilleur site de volcan créé par Benjamin DECOURBE");
//alert("Vous trouverez un petit quiz à la fin pour tester vos nouvelles connaissances")
//alert("Grosse dédicace à mon prof de NSI qui m'as appris tellement de choses intéressantes !");
//var nom = prompt ("Quel est votre nom, cher(e) ami(e) ?");
//var couleur = prompt ("Quel est ta couleur préférée ?(en anglais stp)")
//a.style
//alert("Bienvenue sur mon site " + nom);

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
 	this.textContent = "Vous êtes sur de vous ?";
})
btnsquizz.addEventListener("mouseout", function() {
 	this.textContent = "Tentez notre Quizz";
})

btnvalidation.addEventListener("click", function() {
	alert("test");
	this.textContent = "Tessizz";
})

