
const btnvalidation = document.querySelector('.btn-third');
const gif = document.querySelector('.container-img');

let nb = 0

btnvalidation.addEventListener("click", function() {
	if (document.querySelector('input[name=oui1]:checked').value=="oui") { 
		nb = nb + 1;
	}
})

btnvalidation.addEventListener("click", function() {
	if (document.querySelector('input[name=oui2]:checked').value=="oui") { 
		nb = nb + 1;
	}
})

btnvalidation.addEventListener("click", function() {
	if (document.querySelector('input[name=oui3]:checked').value=="non") { 
		nb = nb + 1;
	}
})

btnvalidation.addEventListener("click", function() {
	if (document.querySelector('input[name=oui4]:checked').value=="oui") { 
		nb = nb + 1;
		
	}
	
	
})
	
btnvalidation.addEventListener("click", function() {
	if (nb==0) {
		
		this.textContent = "Ohhhh !! (0/4) ";	
	nb = 0
	} 
});

btnvalidation.addEventListener("click", function() {
	if (nb==1) {
		
		this.textContent = "Courage, tu as une bonne réponse !! (1/4) ";	
	nb = 0 // pour remettre les compterur à 0 si la personne veut retenter ses réponses
	} 
});

btnvalidation.addEventListener("click", function() {
	if (nb==2) {
		
		this.textContent = "Tu as fait la moitié du chemin !! (2/4) ";	
	nb = 0
	} 
});

btnvalidation.addEventListener("click", function() {
	if (nb==3) {
		
		this.textContent = "Aller, plus qu'une !! (3/4) ";	
	nb = 0
	} 
});

btnvalidation.addEventListener("click", function() {
	if (nb==4) {
		
		this.textContent = "Ouiii, tu as réussi(e) !! (4/4) ";	
		nb = 0
		document.getElementById('mbappe').src =  "images/win.gif";
	} 
});



