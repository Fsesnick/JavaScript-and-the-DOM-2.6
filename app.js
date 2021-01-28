const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
//const removeItemButton = document.querySelector('button.removeItemButton');

listUl.addEventListener('click', (event) => {
  
  if(event.target.tagName == 'BUTTON'){
   if(event.target.className == 'remover'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
    if(event.target.className == 'acima'){
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if(prevLi){
    ul.insertBefore(li,prevLi);
    }
  }
 }
});

/*listDiv.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'LI'){
 // event.target.textContent = event.target.textContent.toLowerCase();
  }
});


document.addEventListener('click', (event) =>{
  console.log(event.target);
});
*/
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Ocultar lista';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Mostrar lista';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
/*
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
*/  
  
  
  
  