  


 let map = new Map();

 let visibility = false;

 function Snippet(name,code) {
    this.name = name;
    this.code = code;
 }

 


  let naming = document.getElementById('codebox');
  let codeNames = [];
   //  let textbox = document.getElementsByClassName('textbox');
  let textboxtext = document.getElementById('textbox');

  let listActivationButton = document.getElementById('listactivation');


  let listElementList = document.getElementById('listelements')

  let hasRun = false;

  let copyButton = document.getElementById("copybutton");

  // add items to list

  // hide the ui depending on state

  let popupboxpopup = document.getElementById("popupbox");

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
      if (e.key === 'Enter' && textboxtext.value !== '') {
          e.preventDefault();
          textboxtext.style.display = 'none'
          const newSnippet = new Snippet(naming.value,textboxtext.value);
          codeNames.push(newSnippet);
          // console.log(codeNames);

   try {
     var name = document.createElement('div');
     var code = document.createElement('div');
     var divUnit = document.createElement('div');
     var previewDivUnit = document.createElement('div');
     var previewCopyButton = document.createElement('button');
     var copybutton = document.createElement('button');


      divUnit.className = "divUnit";
      code.className = "code";
      name.className = "name";

      copybutton.className = "copybutton";
  //    copyButton.alt = "copybutton";
      copybutton.textContent =  "Copy Snippet";
    
      name.textContent = newSnippet.name;
      code.textContent = newSnippet.code;
      // initialize preview windows
      previewDivUnit.className = "previewDivUnit";
      previewDivUnit.textContent = code.textContent;
      previewDivUnit.style.display = "none";

      // add logo/icon to button

      previewCopyButton.innerHTML = "<img src='copyicon.png' alt='copy' width='25' height='25'>";
      previewCopyButton.style.position = "absolute";
      previewCopyButton.style.right = "0";
      previewCopyButton.style.top = "0";
      previewCopyButton.style.marginRight = "15px";
      previewCopyButton.style.marginTop = "15px";
      previewCopyButton.style.color = "inherit";
      previewCopyButton.style.background = "none";
      previewCopyButton.style.cursor = "pointer";
      previewCopyButton.style.border = "none";

      previewDivUnit.appendChild(previewCopyButton);

      divUnit.appendChild(name);
      divUnit.appendChild(code);
      divUnit.appendChild(previewDivUnit);
      divUnit.appendChild(copybutton);
      listElementList.appendChild(divUnit);
      
   } catch (e) {
     console.log("Error in creating block", e.message)
   }

   // copybutton

     copybutton.addEventListener('click', function() {
            var copyingTextcontent = code.textContent;
            navigator.clipboard.writeText(copyingTextcontent);
            console.log("copied",copyingTextcontent);
     });

    previewCopyButton.addEventListener('click', function() {
            var copyingTextcontent = code.textContent;
            navigator.clipboard.writeText(copyingTextcontent);
            console.log("copied",copyingTextcontent);
     });

     // remove new elements after creatinon if user wnats to do so

     divUnit.addEventListener('dblclick', function () {
        divUnit.parentNode.removeChild(divUnit);
        // this returns the name textcontents of the specific div the mousecliks on no need to index the full dom
         let searchableIndexTextArray = name.textContent;

         // let index = codeNames.findIndex(i => i.name === searchableIndexTextArray);
        var storedNames = JSON.parse(localStorage.getItem("naming"));
        console.log(storedNames);
        let indexAnother = storedNames.findIndex(i => i.name === searchableIndexTextArray)
        console.log("new index of array",indexAnother);

        // removes the element of which index is taken using findIndex above
        storedNames.splice(indexAnother,1);
        // console.log(storedNames);
        codeNames = storedNames;
        localStorage.setItem("naming", JSON.stringify(codeNames));
         // overwrites array and replaces it

        // localStorage.removeItem('naming',JSON.stringify(codeNames[indexAnother]));
    });
   

    code.addEventListener("click", function () {
        try {
       if (previewDivUnit.style.display === "none" ) {
         previewDivUnit.style.display = "block";
            previewDivUnit.style.transition = "0.3s";
       } else {
          previewDivUnit.style.display = "none";
       }
        } catch (e) {
            console.log(e.message)
        }
       });

     
      previewDivUnit.addEventListener("click", function () {
        try {
       if (previewDivUnit.style.display === "none" ) {
         previewDivUnit.style.display = "block";
            previewDivUnit.style.transition = "0.3s";
       } else {
          previewDivUnit.style.display = "none";
       }
        } catch (e) {
            console.log(e.message)
        }
       });


         // localstorage save arrays
        console.log(codeNames);
        localStorage.setItem("naming", JSON.stringify(codeNames));
   //   localStorage.setItem("newItems",JSON.stringify(newSnippet));
      
          naming.value = '';
          textboxtext.value = '';
          document.getElementById('codebox').focus();

      }

  })

  naming.addEventListener('keypress', (e) => {
    try {
      if (e.key === 'Enter' && naming.value !== '') {
          e.preventDefault(); // Prevent form submission
          // clear the textfield
          document.getElementById('textbox').style.display = 'block';
          document.getElementById('textbox').focus();
      }
    } catch (e) {
        console.log("error in naming", e.message)
    }
  });
  
  

  // copy button event listener code

  
// onload function
window.addEventListener("load", function () {
       // get the list
    var storedNames = JSON.parse(localStorage.getItem("naming"));
       //console.log(storedNames);
    
  if (storedNames) {
      codeNames = storedNames;
       // render list when page loads
       storedNames.forEach(function(element) {
       console.log("forEach running")
       var divUnit = document.createElement('div');
       divUnit.className = "divUnit";
       var copybutton = document.createElement('button');
       var previewDivUnit = document.createElement('div');
       var previewCopyButton = document.createElement('button');
       var name = document.createElement('div');
       var code = document.createElement('div');
       code.className = "code";
       name.className = "name";

       copybutton.className = "copybutton";
       copybutton.textContent = "Copy Snippet";
       divUnit.className = "divUnit"

       name.textContent = element.name;
       code.textContent = element.code;
       previewDivUnit.className = "previewDivUnit";
       previewDivUnit.textContent = element.code;
       previewDivUnit.style.display = "none";


      previewCopyButton.innerHTML = "<img src='copyicon.png' alt='copy' width='22' height='22'>";
      previewCopyButton.className = "previewCopyButton";
      previewDivUnit.appendChild(previewCopyButton);
      previewCopyButton.className = "previewCopyButton";

       divUnit.appendChild(name);
       divUnit.appendChild(code);
       divUnit.appendChild(previewDivUnit);
       divUnit.appendChild(copybutton);
       listElementList.appendChild(divUnit);
     // copybutton for copying preview text;

     copybutton.addEventListener('click', function() {
            var copyingTextcontent = code.textContent;
            navigator.clipboard.writeText(copyingTextcontent);
            console.log("copied",copyingTextcontent);
     });


     // remove item

       divUnit.addEventListener('dblclick', function () {
        divUnit.parentNode.removeChild(divUnit);
        // this returns the name textcontents of the specific div the mousecliks on no need to index the full dom
        let searchableIndexTextArray = name.textContent;

         // let index = codeNames.findIndex(i => i.name === searchableIndexTextArray);
        var storedNames = JSON.parse(localStorage.getItem("naming"));
        console.log(storedNames);
        let indexAnother = storedNames.findIndex(i => i.name === searchableIndexTextArray)
        console.log("new index of array",indexAnother);

        // removes the element of which index is taken using findIndex above
        storedNames.splice(indexAnother,1);
        // console.log(storedNames);
        codeNames = storedNames;
        localStorage.setItem("naming", JSON.stringify(codeNames));
         // overwrites array and replaces it

        // localStorage.removeItem('naming',JSON.stringify(codeNames[indexAnother]));
    });



      // copy function do not touch this !!
      previewCopyButton.addEventListener('click', function() {
            var copyingTextcontent = code.textContent;
            navigator.clipboard.writeText(copyingTextcontent);
            console.log("copied",copyingTextcontent);
      });

    // code eventhandler function reacting on click
     code.addEventListener("click", function () {
        try {
       if (previewDivUnit.style.display === "none" ) {
         previewDivUnit.style.display = "block";
            previewDivUnit.style.transition = "0.3s";
       } else {
          previewDivUnit.style.display = "none";
       }
        } catch (e) {
            console.log(e.message)
        }
       });

        // hides and shows preview based on if its clicked
       previewDivUnit.addEventListener("click", function () {
        try {
       if (previewDivUnit.style.display === "none" ) {
         previewDivUnit.style.display = "block";
            previewDivUnit.style.transition = "0.3s";
       } else {
          previewDivUnit.style.display = "none";
       }
        } catch (e) {
            console.log(e.message)
        }
       });


       });
    }

});

