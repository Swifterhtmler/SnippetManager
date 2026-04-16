let map = new Map();

function Snippet(name,code) {
   this.name = name,
   this.code = code
}

 let naming = document.getElementById('codebox');
 let codeNames = [];
  //  let textbox = document.getElementsByClassName('textbox');
 let textboxtext = document.getElementById('textbox');



 textboxtext.addEventListener('keypress', function(e) {
     if (e.key === 'Enter') {
         e.preventDefault();
         textboxtext.style.display = 'none'
         const newSnippet = new Snippet(naming.value,textboxtext.value);
         codeNames.push(newSnippet)
         // console.log(newSnippet);
         console.log(codeNames);
         naming.value = '';
         textboxtext.value = '';
   
     }
 })
  

 naming.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         e.preventDefault(); // Prevent form submission
       //  codeNames.push(naming.value)
         // clear the textfield
         document.getElementById('textbox').style.display = 'block';
         document.getElementById('textbox').focus()
         console.log
         
 
     }
 });

