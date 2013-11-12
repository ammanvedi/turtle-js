
        /*

            key down --> save in array
            key up --> remove from array
            draw function runs through keys down and calculates
            overall dy/dx

            every x draws, save the position of the turtle, and 
            draw its path line from these points

            turtle object
            canvas object

            externalsise code 

            forward and back move the turtle
            left and right rotate the turtle and move it up or down

        */

        var dy = 0;
        var dx = 0;
        var dr = 0;
        
        var dxincrement = 5;
        var dyincrement = 2;
       
        var rot_increment = 2;
        var gradient = 1;


        var tomousey = 0;
        var tomousex = 0;

        var turtle = {
            init_x: 100,
            init_y: 100,
            bound_width: 50,
            bound_height: 60,
            ctr_x: 125,
            ctr_y: 130,
            x: 100,
            y: 100
        };

        var keys = {
            up: false,
            down: false, 
            left: false, 
            right: false
        };

        

        document.onkeydown = checkKey;
        document.onkeyup = removeKey;
 


        function updateTurtleCentre(){
            //new centre is the current xypos
            turtle['ctr_x'] = turtle['init_x'] + dx + (turtle['bound_width'] / 2);
            turtle['ctr_y'] = turtle['init_y'] + dy + (turtle['bound_height'] / 2);;
        }


        function draw()
        {
            console.log(keys);
            animateTurtle();
            jc.start('canvas_1');
            jc.rect(turtle['x'],turtle['y'],turtle['bound_width'],turtle['bound_height'],1).rotate(dr,'center');
            jc.rect(150,40,50,60,1).rotate(30,'center');
            jc.start('canvas_1');
        }

        function checkKey(e) 
        {
                e = e || window.event;
                if(e.keyCode == 39) {
                    keys['right'] = true;
                    console.log('sdads');
                };
                if(e.keyCode == 37) {
                    keys['left'] = true;
                };
                if(e.keyCode == 38) {
                    keys['up'] = true;
                };
                if(e.keyCode == 40) {
                    keys['down'] = true;
                };
                jc.clear('canvas_1');
                
                draw();
        }

        function removeKey(e)
        {
                e = e || window.event;
                if(e.keyCode == 39) {
                    keys['right'] = false;
                };
                if(e.keyCode == 37) {
                    keys['left'] = false;
                };
                if(e.keyCode == 38) {
                    keys['up'] = false;
                };
                if(e.keyCode == 40) {
                    keys['down'] = false;
                };
                draw();
        }

  

        function animateTurtle(){
        
                if(keys['right'] == true) {
                    dr+=5
                };
                if(keys['left'] == true) {
                    dr-=5;
                };
                if(keys['up'] == true) {
                   
                    turtle['x'] += Math.sin(dr * Math.PI / 180)*5;
                    turtle['y'] -= Math.cos(dr * Math.PI / 180)*5;
                };
                if(keys['down'] == true) {
                   
                    turtle['x'] -= Math.sin(dr * Math.PI / 180)*5;
                    turtle['y'] += Math.cos(dr * Math.PI / 180)*5;
                };
        };


            