
  let map = new Map();

  let visibility = false;

  function Snippet(name,code) {
     this.name = name,
     this.code = code
  }

   let naming = document.getElementById('codebox');
   let codeNames = [];
    //  let textbox = document.getElementsByClassName('textbox');
   let textboxtext = document.getElementById('textbox');

   let listActivationButton = document.getElementById('listactivation');


   let listElementList = document.getElementById('listelements')



   

   // add items to list

   // hide the ui depending on state

    listActivationButton.addEventListener('click', function clicked() {
     let list = document.getElementById('listelements');
     if (list.style.display === "none" ) {
         list.style.display = "block";
     } else {
         list.style.display = "none";
     }

      //  codeNames.forEach(function(element) {
      //  console.log("forEach running")
      //  var name = document.createElement('div');
      //  var code = document.createElement('div');

      //  name.innerHTML = element.name;
      //  code.innerHTML = element.code;

      //  listElementList.appendChild(name);
      //  listElementList.appendChild(code);

      // });

   });

  




   // add items to list

   textboxtext.addEventListener('keypress', function(e) {
       if (e.key === 'Enter') {
           e.preventDefault();
           textboxtext.style.display = 'none'
           const newSnippet = new Snippet(naming.value,textboxtext.value);
           codeNames.push(newSnippet);
           console.log(codeNames);



     //   codeNames.forEach(function(element) {
     //   console.log("forEach running")
     //   var name = document.createElement('div');
     //   var code = document.createElement('div');
       
     //   name.innerHTML = element.name;
     //   code.innerHTML = element.code;

     //   console.log(name);
     //   console.log(code);
     //   listElementList.appendChild(name);
     //   listElementList.appendChild(code);
     //  });

      var name = document.createElement('div');
      var code = document.createElement('div');

       name.innerHTML = newSnippet.name;
       code.innerHTML = newSnippet.code;

       listElementList.appendChild(name);
       listElementList.appendChild(code);





           naming.value = '';
           textboxtext.value = '';
           document.getElementById('codebox').focus();
     
       }
   })
    

   naming.addEventListener('keypress', (e) => {
       if (e.key === 'Enter') {
           e.preventDefault(); // Prevent form submission
         //  codeNames.push(naming.value)
           // clear the textfield
           document.getElementById('textbox').style.display = 'block';
           document.getElementById('textbox').focus();
   
       }
   });


