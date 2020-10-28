
  let n = 5; 
  for (let col = 1; col <= 3; col += 1){ 
      let str = ""    
      let spaces =" "  
      let pir  = ""
      for ( space =1; space <= (n - col) ; space += 1 )  {
         
       spaces += " ";
      }          
          for  (let lin = 1;  lin <= col; lin += 1 )  {
               str += "*";
          
               for (let col = 1; col <= 1; col += 1){ 
                
                    for  (let lin = 1 ;  lin <= col; lin += 1 )  {
                         pir += "*";
                     }
                 
                }
              
              
           }
       console.log(spaces + str + pir);
      }
    
    
