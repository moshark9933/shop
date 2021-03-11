let cartBoudy=document.getElementById('cart');
window.addEventListener('click',(event)=>{
	console.log('clck');
	if (event.target.classList.contains('button-buy')) {

		console.log('клік на кнопку');
		addItem(event.target);
	}
});
function addItem(element){
	console.log('одавання товару');
	let li =document.createElement('li');
	li.innerHTML=element.dataset.img
	+element.dataset.name
	+element.dataset.prise
	+'<div class="delete-pise"> X </div>';
	cartBoudy.appendChild(li);
}
