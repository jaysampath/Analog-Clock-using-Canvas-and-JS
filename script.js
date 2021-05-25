 setInterval(settime,1000);     
function settime(){
        
        var canvas = document.getElementById("canvas1");
        
        var context = canvas.getContext("2d");
        
        var clockraduis = canvas.width/2;
  
        context.beginPath();
              
          context.fillStyle = "black";
          context.arc(clockraduis, clockraduis, clockraduis, 0, 2*Math.PI);
          context.fill();
          
          context.fillStyle = "white";
          
          context.beginPath();
          context.arc(clockraduis, clockraduis, 10, 0, 2*Math.PI);
          context.fill();
      
        
        
        
        context.font = clockraduis / 10 + "px arial";    
         
        context.textAlign = "center";
        context.textBaseline = "middle";
        
        for(var i = 1; i<=12 ; i++){
             context.fillText(i,clockraduis + clockraduis*0.9*Math.sin(i*2*Math.PI/12),clockraduis-(clockraduis*0.9*Math.cos(i*2*Math.PI/12)));
        }
        
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        
        console.log(new Date().getTime);
        
        var fullhours = hours%12 + minutes / 60 + seconds / 3600 ;
        
        var hourAngle = fullhours*2*Math.PI/12;
        
        var minuteAngle = minutes*2*Math.PI/60;
        
        var secondsAngle = seconds*2*Math.PI/60;
        
        context.strokeStyle = "white";
        context.moveTo(clockraduis,clockraduis);
        context.lineTo(clockraduis+clockraduis*0.4*Math.sin(hourAngle),clockraduis-(clockraduis*0.4*Math.cos(hourAngle)));
        context.lineWidth =5;
        context.stroke();
        
        context.moveTo(clockraduis,clockraduis);
        context.lineTo(clockraduis+clockraduis*0.6*Math.sin(minuteAngle),clockraduis-(clockraduis*0.6*Math.cos(minuteAngle)))
        context.lineWidth =2.5;
        context.stroke();
        
        context.moveTo(clockraduis,clockraduis);
        context.lineTo(clockraduis+clockraduis*0.8*Math.sin(secondsAngle),clockraduis-(clockraduis*0.8*Math.cos(secondsAngle)))
        context.lineWidth =1;
        context.stroke();
        
        }
    
       