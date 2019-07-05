var container = document.querySelector('.container');
var btnLeft = document.querySelector('#btnLeft');
var btnRight = document.querySelector('#btnRight');
var cont = 0;
var actualSlide = 0;
var slideCont;
var quantSlides = container.children.length;
var voltar = false;
var automate;
var automation;
var interval = 3000;


function slidesLoop() {
		for(var i = 0; i < quantSlides; i++) {
		console.log(i);
		container.children[i].style.transform = slideCont;
	};
}


function slidesRestart() {
	voltar = false;
	cont = 0;
	actualSlide = 0;
	console.log('início de slides');
	slideCont = 'translateX(' + cont + 'vw)';
	slidesLoop();
}


function slidesForward() {
	if (actualSlide === quantSlides -1) {
		voltar = true;
		console.log('fim de slides');
		slidesRestart();
	} else {		
		cont -= 100;
		actualSlide += 1;
		console.log(cont);
		console.log('actual slide: ' + actualSlide);
		slideCont = 'translateX(' + cont + 'vw)';
		console.log(slideCont);
		slidesLoop();
	};
};


function slidesReverse() {
	if (actualSlide === 0) {
		voltar = false;
		cont = 0;
		actualSlide = 0;
		console.log('início de slides');
	} else {
		cont += 100;
		actualSlide -= 1;
		console.log(cont);
		console.log('actual slide: ' + actualSlide);
		slideCont = 'translateX(' + cont + 'vw)';
		console.log(slideCont);
		slidesLoop();
	};
};

automate = function() {
	slidesForward();
}

automation = setInterval(automate, interval);

btnLeft.addEventListener('click', slidesReverse);
btnRight.addEventListener('click', slidesForward);

container.addEventListener('mouseover', function() {
	 clearInterval(automation);
});

container.addEventListener('mouseleave', function() {
	automation = setInterval(automate, interval);
});