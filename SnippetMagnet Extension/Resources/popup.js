
// long press event

/*!
 * long-press-event - v2.5.2
 * Pure JavaScript long-press-event
 * https://github.com/john-doherty/long-press-event
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function(e,t){"use strict";var n=null,a="PointerEvent"in e||e.navigator&&"msPointerEnabled"in e.navigator,i="ontouchstart"in e||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,o=a?"pointerdown":i?"touchstart":"mousedown",r=a?"pointerup":i?"touchend":"mouseup",u=a?"pointermove":i?"touchmove":"mousemove",m=a?"pointerleave":i?"touchleave":"mouseleave",s=0,c=0,l=10,v=10;function f(e){p(),e=function(e){if(void 0!==e.changedTouches)return e.changedTouches[0];return e}(e),this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY},clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}))||t.addEventListener("click",function e(n){t.removeEventListener("click",e,!0),function(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}(n)},!0)}function d(a){p(a);var i=a.target,o=parseInt(function(e,n,a){for(;e&&e!==t.documentElement;){var i=e.getAttribute(n);if(i)return i;e=e.parentNode}return a}(i,"data-long-press-delay","1500"),10);n=function(t,n){if(!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame&&e.mozCancelRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame))return e.setTimeout(t,n);var a=(new Date).getTime(),i={},o=function(){(new Date).getTime()-a>=n?t.call():i.value=requestAnimFrame(o)};return i.value=requestAnimFrame(o),i}(f.bind(i,a),o)}function p(t){var a;(a=n)&&(e.cancelAnimationFrame?e.cancelAnimationFrame(a.value):e.webkitCancelAnimationFrame?e.webkitCancelAnimationFrame(a.value):e.webkitCancelRequestAnimationFrame?e.webkitCancelRequestAnimationFrame(a.value):e.mozCancelRequestAnimationFrame?e.mozCancelRequestAnimationFrame(a.value):e.oCancelRequestAnimationFrame?e.oCancelRequestAnimationFrame(a.value):e.msCancelRequestAnimationFrame?e.msCancelRequestAnimationFrame(a.value):clearTimeout(a)),n=null}"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=t.createEvent("CustomEvent");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a},e.CustomEvent.prototype=e.Event.prototype),e.requestAnimFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},t.addEventListener(r,p,!0),t.addEventListener(m,p,!0),t.addEventListener(u,function(e){var t=Math.abs(s-e.clientX),n=Math.abs(c-e.clientY);(t>=l||n>=v)&&p()},!0),t.addEventListener("wheel",p,!0),t.addEventListener("scroll",p,!0),t.addEventListener("contextmenu",function(e){i?e.preventDefault():p()},!0),t.addEventListener(o,function(e){s=e.clientX,c=e.clientY,d(e)},!0)}(window,document);









// define the snippet structure object
function Snippet(name,code) {
 this.name = name;
 this.code = code;
}
// array containing the array of objects (snippets constucted using the object constructor above)
let codeNames = [];

// array containing the group identifiers
let groups = [];

// get the dom elements
let naming = document.getElementById('codebox');
let textboxtext = document.getElementById('textbox');
let listActivationButton = document.getElementById('listactivation');
let listElementList = document.getElementById('listelements');
let copyButton = document.getElementById("copybutton");
let popupboxpopup = document.getElementById("popupbox");


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
   // copyButton.alt = "copybutton";
   copybutton.textContent =  "Copy Snippet";
 
   name.textContent = newSnippet.name;
   code.textContent = newSnippet.code;

   // initialize preview windows
   previewDivUnit.className = "previewDivUnit";
   previewDivUnit.textContent = code.textContent;
   previewDivUnit.style.display = "none";

   // add logo/icon to button and its properties to list
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

  divUnit.addEventListener('long-press', async function (e) {
      
      e.preventDefault();
      
     divUnit.parentNode.removeChild(divUnit);
     // this returns the name textcontents of the specific div the mousecliks on no need to index the full dom
      let searchableIndexTextArray = name.textContent;

      // let index = codeNames.findIndex(i => i.name === searchableIndexTextArray);
     var deletingResult = await browser.storage.local.get("naming");
     var storedNames = deletingResult.naming || [];

     console.log(storedNames);
     let indexAnother = storedNames.findIndex(i => i.name === searchableIndexTextArray)
     console.log("new index of array",indexAnother);

     // removes the element of which index is taken using findIndex above
     storedNames.splice(indexAnother,1);
     // console.log(storedNames);
     codeNames = storedNames;
      browser.storage.local.set({"naming":codeNames});
      // overwrites array and replaces it
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
       browser.storage.local.set({"naming": codeNames});
       naming.value = '';
       textboxtext.value = '';
       document.getElementById('codebox').focus();

   }

})

naming.addEventListener('keypress', (e) => {
 try {
   if (e.key === 'Enter' && naming.value !== '') {
       e.preventDefault(); // Prevent form submission


   // get the group name for organizing later on in the groups array
   if (naming.value.includes("#")) {
      let nameValue = naming.value;
      console.log("name value is:", nameValue);
      let group = nameValue.substring(nameValue.indexOf('#') + 1);


     function getGroup(nameValue) {
            let words = nameValue.split(' ');
             console.log("tag found")
               for (let i = 0; i < words.length; i++) {
                 console.log("running loop");
                   let element = words[i];
                   if (element.includes('#')) {
                     console.log("running the function")
                     console.log(element);
                     groups.push(element);
                     console.log(groups);

                   }
             }
      }

      getGroup(group);

      // add new hastag and group logic here
      // let group = subgroup.substring(0, subgroup.indexOf(' '));

     // console.log("group is:", group);
   //   groups.push(group);
    // console.log(groups)
       browser.storage.local.set({"groups": groups}, (result) => {
          console.log("saved", result.groups);
       });
   }

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
window.addEventListener("load", async function () {
    // get the list
    var result = await browser.storage.local.get("naming");
    var storedNames = result.naming || [];
    //console.log(storedNames);
    // groups array from localstorage
 var groupsNames = browser.storage.local.get("groups", (callback) => {
     console.log(callback.naming);
 });

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

    let timer;
    divUnit.addEventListener('long-press', async function (e) {
    e.preventDefault()
               // Perform action her
     divUnit.parentNode.removeChild(divUnit);
     // this returns the name textcontents of the specific div the mousecliks on no need to index the full dom
     let searchableIndexTextArray = name.textContent;

      // let index = codeNames.findIndex(i => i.name === searchableIndexTextArray);
     var deletingRes = await browser.storage.local.get("naming");
     let storedNames = deletingRes.naming || [];
     console.log(storedNames);
     let indexAnother = storedNames.findIndex(i => i.name === searchableIndexTextArray)
     console.log("new index of array",indexAnother);
     // removes the element of which index is taken using findIndex above
     storedNames.splice(indexAnother,1);
     // console.log(storedNames);
     codeNames = storedNames;
        browser.storage.local.set({"naming": codeNames});
      // overwrites array and replaces it
    
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


 if (groupsNames) {
     // get the old array and update it;
     groups = groupsNames
 }
});


