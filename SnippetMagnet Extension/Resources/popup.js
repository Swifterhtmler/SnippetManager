
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

   var name = document.createElement('div');
   var code = document.createElement('div');
   var divUnit = document.createElement('div');
   var copyButton = document.createElement('button');


   copyButton.type = "button";

    divUnit.className = "divUnit";
    code.className = "code";
    name.className = "name";

    copyButton.className = "copybutton";
    copyButton.textContent = "copy text";


    name.textContent = newSnippet.name;
    code.textContent = newSnippet.code;

    divUnit.appendChild(name);
    divUnit.appendChild(code);
    divUnit.appendChild(copyButton);
    listElementList.appendChild(divUnit);

  

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
    if (e.key === 'Enter' && naming.value !== '') {
        e.preventDefault(); // Prevent form submission
        // clear the textfield
        document.getElementById('textbox').style.display = 'block';
        document.getElementById('textbox').focus();

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
     var copyButton = document.createElement('button');
     var name = document.createElement('div');
     var code = document.createElement('div');
     code.className = "code";
     name.className = "name";

      copyButton.className = "copybutton";
      copyButton.textContent = "copy text";

     name.textContent = element.name;
     code.textContent = element.code;

     divUnit.appendChild(name);
     divUnit.appendChild(code);
     divUnit.appendChild(copyButton);
     listElementList.appendChild(divUnit);
     });
  }


});
