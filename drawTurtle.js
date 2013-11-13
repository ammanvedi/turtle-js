
       
        var dxincrement =     5;
        var dyincrement =     2;
        var rot_increment =   5;
        var dr =              0;

        var visited_x = [];
        var visited = [];

        var turt = new Image();
            turt.src = 'turtle.png';

        var turtle = {
            init_x:        100,
            init_y:        100,
            bound_width:   50,
            bound_height:  60,
            ctr_x:         125,
            ctr_y:         130,
            x:             100,
            y:             100
        };

        var off_x = (turtle['bound_width'] / 2);
        var off_y = (turtle['bound_height'] / 2);

        visited.push([turtle['ctr_x'], turtle['ctr_y']]);
        visited_x.push(turtle['init_x']);

        var keys = {
            up:     false,
            down:   false, 
            left:   false, 
            right:  false
        };

        //delegate events to JS functions
        document.onkeydown = checkKey;
        document.onkeyup = removeKey;
 
        //function to keep track of the centre of the turtle
        function updateTurtleCentre()
        {
            turtle['ctr_x'] = turtle['x'] + (turtle['bound_width'] / 2);
            turtle['ctr_y'] = turtle['y'] + (turtle['bound_height'] / 2);
        };

        function reset(){
            turtle['ctr_x'] = 125;
            turtle['ctr_y'] = 130;
            turtle['x'] = 100;
            turtle['y'] = 100;
            visited = [];
            draw();
        }        

        //draw function
        function draw()
        {
            // console.log(visited_x + ' and y ' + visited_y);
            //clear the canvas
            jc.clear('canvas_1');
            //update the postion of the turtle
            updateTurtle();
            jc.start('canvas_1');
            jc.line(visited);
            
            jc.image(turt,turtle['x'],turtle['y'],turtle['bound_width'],turtle['bound_height']).rotate(dr,'center');
            jc.rect(turtle['x'],turtle['y'],turtle['bound_width'],turtle['bound_height'],false).rotate(dr,'center');
            jc.start('canvas_1');
        };


        //on a key press event record the key that was pressed into the
        //"keys" object
        function checkKey(e) 
        {
                e = e || window.event;

                if(e.keyCode == 39) {   keys['right'] = true;   };
                if(e.keyCode == 37) {   keys['left'] = true;    };
                if(e.keyCode == 38) {   keys['up'] = true;      };
                if(e.keyCode == 40) {   keys['down'] = true;    };

                draw();
        };

        //indicate that a key is no longer being pressed by falsifying
        //its value in the "keys" object
        function removeKey(e)
        {
                e = e || window.event;

                if(e.keyCode == 39) {   keys['right'] = false;  };
                if(e.keyCode == 37) {   keys['left'] = false;   };
                if(e.keyCode == 38) {   keys['up'] = false;     };
                if(e.keyCode == 40) {   keys['down'] = false;   };

                draw();
        };

        function updateTurtle(){
        
                //if the left or right keys clicked then rotate the turtle
                if(keys['right'] == true)   {   dr+=rot_increment;  };
                if(keys['left'] == true)    {   dr-=rot_increment;  };

                //move forwards relative to the facing direction
                if(keys['up'] == true) {
                    turtle['x'] += Math.sin(dr * Math.PI / 180)*5;
                    turtle['y'] -= Math.cos(dr * Math.PI / 180)*5;
                    updateTurtleCentre();

                    visited.push([turtle['ctr_x'], turtle['ctr_y']]);
                    

                };

                //move backwards
                if(keys['down'] == true) {
                    turtle['x'] -= Math.sin(dr * Math.PI / 180)*5;
                    turtle['y'] += Math.cos(dr * Math.PI / 180)*5;
                    updateTurtleCentre();

                    visited.push([turtle['ctr_x'], turtle['ctr_y']]);
                    
                };
        };
