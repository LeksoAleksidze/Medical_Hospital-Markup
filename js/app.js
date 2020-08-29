

const gallery = document.getElementById('gallery');
const item = gallery.querySelectorAll('.img img');

const lightbox = document.getElementById('lightbox');
const closeBtn = lightbox.querySelector('.lightbox-close');
const current = lightbox.querySelector('.current-image');

const leftBtn = lightbox.querySelector('.left');
const rightBtn = lightbox.querySelector('.right');
const counter = lightbox.querySelector('.img-count');

let itemIndex = 0;

for( let x = 0; x < item.length; x++ ){

	item[x].addEventListener('click', ()=>{

		itemIndex = x;
		changePhoto();
		photoToggle();
	})

};

function photoToggle(){

   lightbox.classList.toggle('open');

};

function changePhoto(){

	let currentImg = item[itemIndex].getAttribute('src');
    counter.innerHTML =( itemIndex + 1) + " of " + item.length;
    current.src = currentImg;


};

closeBtn.onclick  =()=>{

   lightbox.classList.toggle('open');
}


rightBtn.onclick = ()=>{

	if( itemIndex == item.length - 1){
		itemIndex = 0;
	} else {

		itemIndex++;
	}
	changePhoto();

};

leftBtn.onclick = ()=>{

	if( itemIndex == 0 ){
		itemIndex = item.length - 1
	} else {

		itemIndex--;
	}
	changePhoto();

};