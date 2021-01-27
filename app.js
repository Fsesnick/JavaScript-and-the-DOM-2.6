const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');


//const input = document.querySelector('input');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');

//const button = document.querySelector('button') ; gives us an error bc o toggle
const button = document.querySelector('button.description') ;

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}

toggleList.addEventListener('click', () =>{
  if(listDiv.style.display == 'none'){
  
  toggleList.textContent = 'Ocultar lista';
  listDiv.style.display= 'block';

}else{
  toggleList.textContent = 'Mostrar Lista';
  listDiv.style.display = 'none';    
}                      
});

button.addEventListener('click', () => {
  p.textContent = input.value + ';';
  addItemInput.value = '';
                        
});

p.title = "List description";

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
  
});

  
  