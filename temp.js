//Functions as Parameters
// 
// <script src="temp.js"></script>
    
/*

function diga(something){
  console.log(something);
}

//diga('Ola');

function exec (func, arg){
  func(arg);
}

exec(diga,'Hi,there');

exec((something) =>{
  console.log(something);
},'Saudacoes a todos.');
*/

window.setTimeout((something)=>{
  console.log(something);
}, 3000, 'Saudacoes a todos.');