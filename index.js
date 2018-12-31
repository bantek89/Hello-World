
//hide/reveal links
document.getElementById('click').addEventListener('click', function(){
	let element = document.querySelector('.container');
	let secondElement = document.querySelector('.button');
	element.classList.toggle('pushed');
	secondElement.classList.toggle('clicked');
})


//navigation bar
document.getElementById('hola').addEventListener('click', function() {
	let hola = document.querySelector('.hola');
	let selected = document.querySelector('.display');

	selected.className = selected.className.replace('display', 'slide');
	hola.className = hola.className.replace("slide", "display");
	
	let holaBar = document.getElementById('hola');
	let listItems = document.getElementsByClassName('nav');

	for (let i = 0; i < listItems.length; i++){ 
		listItems[i].style.backgroundColor = 'white'
		listItems[i].style.color = 'green'
	}

	holaBar.style.backgroundColor = 'pink';
	holaBar.style.color = 'white';
})

document.getElementById('bonjour').addEventListener('click', function() {
	let bonjour = document.querySelector('.bonjour');
	let selected = document.querySelector('.display');
		
	selected.className = selected.className.replace('display', 'slide');
	bonjour.className = bonjour.className.replace("slide", "display");
	

	let bonjourBar = document.getElementById('bonjour');
	let listItems = document.getElementsByClassName('nav');

	for (let i = 0; i < listItems.length; i++){ 
		listItems[i].style.backgroundColor = 'white'
		listItems[i].style.color = 'green'
	}
	
	bonjourBar.style.backgroundColor = 'pink';
	bonjourBar.style.color = 'white';
	
})

document.getElementById('salaam').addEventListener('click', function() {
	let salaam = document.querySelector('.salaam');
	let selected = document.querySelector('.display');
		
	selected.className = selected.className.replace('display', 'slide');
	salaam.className = salaam.className.replace("slide", "display");
	

	let salaamBar = document.getElementById('salaam');
	let listItems = document.getElementsByClassName('nav');

	for (let i = 0; i < listItems.length; i++){ 
		listItems[i].style.backgroundColor = 'white'
		listItems[i].style.color = 'green'
	}
	
	salaamBar.style.backgroundColor = 'pink';
	salaamBar.style.color = 'white';
	
})

document.getElementById('merhaba').addEventListener('click', function() {
	let merhaba = document.querySelector('.merhaba');
	let selected = document.querySelector('.display');
		
	selected.className = selected.className.replace('display', 'slide');
	merhaba.className = merhaba.className.replace("slide", "display");
	

	let merhabaBar = document.getElementById('merhaba');
	let listItems = document.getElementsByClassName('nav');

	for (let i = 0; i < listItems.length; i++){ 
		listItems[i].style.backgroundColor = 'white'
		listItems[i].style.color = 'green'
	}
	
	merhabaBar.style.backgroundColor = 'pink';
	merhabaBar.style.color = 'white';
	
})










