
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

     let hasRun = false;


     // add items to list

     // hide the ui depending on state

      listActivationButton.addEventListener('click', function clicked() {
       let list = document.getElementById('listelements');
       if (list.style.display === "none" ) {
           list.style.display = "block";
       } else {
           list.style.display = "none";
       }

     });

 
    


  

     // add items to list

     textboxtext.addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
             e.preventDefault();
             textboxtext.style.display = 'none'
             const newSnippet = new Snippet(naming.value,textboxtext.value);
             codeNames.push(newSnippet);
             // console.log(codeNames);

        var name = document.createElement('div');
        var code = document.createElement('div');

         name.innerHTML = newSnippet.name;
         code.innerHTML = newSnippet.code;

         listElementList.appendChild(name);
         listElementList.appendChild(code);

            // localstorage save arrays
           console.log(codeNames);
           localStorage.naming = JSON.stringify(codeNames);
      //   localStorage.setItem("newItems",JSON.stringify(newSnippet));
         
             naming.value = '';
             textboxtext.value = '';
             document.getElementById('codebox').focus();
       
         }

     })


     naming.addEventListener('keypress', (e) => {
         if (e.key === 'Enter') {
             e.preventDefault(); // Prevent form submission
             // clear the textfield
             document.getElementById('textbox').style.display = 'block';
             document.getElementById('textbox').focus();
     
         }
     });
     
  // onload function
 window.addEventListener("load", function () {
             
          // get the list
          var storedNames = JSON.parse(localStorage.naming);
          //console.log(storedNames);

          // render list when page loads
          storedNames.forEach(function(element) {
          console.log("forEach running")
          var name = document.createElement('div');
          var code = document.createElement('div');

          name.innerHTML = element.name;
          code.innerHTML = element.code;

          listElementList.appendChild(name);
          listElementList.appendChild(code);
          });
  });

