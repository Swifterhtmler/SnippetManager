let naming = document.getElementById('codebox');
      let codeNames = [];
       //  let textbox = document.getElementsByClassName('textbox');
      let textboxtext = document.getElementById('textbox');

      textboxtext.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              textboxtext.value = '';
              textboxtext.style.display = 'none'
             // naming.focus();
          //    document.getElementById('codebox').focus();
        
          }
      })
       


      naming.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              e.preventDefault(); // Prevent form submission
              codeNames.push(naming.value)
              // clear the textfield
              naming.value = '';
              document.getElementById('textbox').style.display = 'block';
              document.getElementById('textbox').focus()
              console.log(codeNames)
      
          }
      });
