


        var dxincrement = 5;
        var dyincrement = 2;
        var rot_increment = 5;


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

        
        //delegate events to JS functions
        document.onkeydown = checkKey;
        document.onkeyup = removeKey;
 

        //function to keep track of the centre of the turtle
        function updateTurtleCentre()
        {
            turtle['ctr_x'] = turtle['init_x'] + dx + (turtle['bound_width'] / 2);
            turtle['ctr_y'] = turtle['init_y'] + dy + (turtle['bound_height'] / 2);;
        }

        //draw function
        function draw()
        {
            //update the postion of the turtle
            updateTurtle();
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

        function updateTurtle(){
        
                if(keys['right'] == true) {
                    dr+=rot_increment;
                };
                if(keys['left'] == true) {
                    dr-=rot_increment;
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


            