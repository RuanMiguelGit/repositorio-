let n = 5; 
for (let col = 1; col <= 5; col += 1){ 
    let str = ""    
    let spaces =" "  
    for ( space =1; space <= (n - col) ; space += 1 )  {
       
     spaces += " ";
    }          
        for  (let lin = 1 ;  lin <= col; lin += 1 )  {
             str += "*";
         }
     console.log(spaces + str);
    }
  
  