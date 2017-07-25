var secret = Math.floor(Math.random()*100) + 1;
var attempts =1;
document.getElementById("reset").onclick = function(){
   var secret = Math.floor(Math.random()*100) + 1;
};


    
document.getElementById("button").onclick = function(){    

        var guess = parseInt(document.getElementById("input").value);  
          
        console.log(secret); console.log(guess);  
          
        if (guess > secret) { 
            document.getElementById("demo").innerHTML = "Too big!";    
            document.getElementById("attempts").innerHTML = "Attempts: "+ attempts;
            attempts ++;
        }
          
        else if (guess < secret) {
            document.getElementById("demo").innerHTML = "Too small!";
            document.getElementById("attempts").innerHTML = "Attempts: "+ attempts;    
            attempts ++;
        }
          
        else if(guess === secret){
            document.getElementById("demo").innerHTML = "Correct, it is " + secret;
            document.getElementById("attempts").innerHTML = "Attempts: "+ attempts;    
            attempts ++;    
        }
          event.preventDefault();
};