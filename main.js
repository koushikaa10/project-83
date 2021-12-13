
var last_position_of_X, last_position_of_Y;

    canvas = document.getElementById('my_canvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width=screen.width;
    new_width=screen.width - 70 ;
    new_height = screen.height - 300;
    if  (width < 992)
    {
        document.getElementById("my_canvas").width=new_width;
        document.getElementById("my_canvas").height=new_height;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchStart);
    
    function my_touchStart(e)
    {
        console.log("my_touchStart");
        last_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_Y=e.touches[0].clientY-canvas.offsetTop;
    }

  
    canvas.addEventListener("touchmove", my_touchMove);
    function my_touchMove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_X + "y = " + last_position_of_Y);
        ctx.moveTo(last_position_of_X, last_position_of_Y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_X = current_position_of_touch_x; 
        last_position_of_Y = current_position_of_touch_y;
    }

