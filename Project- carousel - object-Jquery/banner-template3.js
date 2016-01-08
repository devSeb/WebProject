//jQuery(document).ready(function(){
(function() {

    var BannerTemplate;

    BannerTemplate = (function(){

        /* COnstructor */
        function BannerTemplate(_template_banner){


            this.carousel_div    =  document.getElementById(_template_banner);
            this.carousel_ul    =   this.carousel_div.getElementsByTagName('ul');
            this.carousel_ul_li  =  this.carousel_div.getElementsByTagName('li');
            this.carousel_img    =  this.carousel_div.getElementsByTagName('img');
            this.carousel_canvas =  this.carousel_div.getElementsByTagName('canvas');

            this.i = 0;
            this.i_max = 0;
            this.set_timeout=null;

            //call method
            this.css_init_banner();
        }

        /* Init CSS */
        BannerTemplate.prototype.css_init_banner = function(){

            /*
            if(window.matchMedia("(min-width:800px)").matches) {

                this.carousel_div.css({
                    "position": "relative",
                    "height": "200px",
                    "width": "700px",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "border": "0px solid red",
                    "outline": "none",
                    "border": "0px solid red",
                    "-webkit-user-select": "none",
                    "-html-user-select": "none",
                    "-moz-user-select": "none",
                    "-o-user-select": "none",
                    "user-select": "none"
                });
            }


            if(window.matchMedia("(max-width:500px)").matches) {
                this.carousel_div.css({
                    "position": "relative",
                    "height": "200px",
                    "width": "400px",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "border": "0px solid blue",
                    "outline": "none",
                    "border": "0 none !important",
                    "-webkit-user-select": "none",
                    "-html-user-select": "none",
                    "-moz-user-select": "none",
                    "-o-user-select": "none",
                    "user-select": "none"
                });
            }

            this.carousel_ul_li.css({
                "position" : "absolute",
                "top" : "0",
                "left" : "0",
                "list-style-type":"none",
                "border":"0px solid red"
            });
            this.carousel_img.css({
                "height" : "200px",
                "width" : "0px",
            });
            this.carousel_canvas.css({
                "outline": "none",
                "border": "0 none !important"
            });

            //call method
            */

            var sheet = document.createElement('style')
            sheet.innerHTML = "#template-banner { position:relative; height:200px; width :700px; margin-left:auto; margin-right:auto" +
                                                 " outline:none; -webkit-user-select:none; -html-user-select:none; -moz-user-select:none" +
                                                 " -o-user-select:none; user-select:none ;}" +
                              "#template-banner ul li {position:relative; top:0; left :0; list-style-type:none;}" +
                              "#template-banner img {height:200px; width:0px;}" +
                              "#template-banner canvas {outline:none;border: 0 none !important}";
            document.body.appendChild(sheet);


            this.button_Banner_Prec();
        };



        BannerTemplate.prototype.button_Banner_Prec = function(){

            var div_button_prec_in_image = document.createElement('div')
            div_button_prec_in_image.innerHTML = '<canvas id="button_carrousel_prec" height="100" width="150" </canvas>';

            /*
            var div_button_prec_in_image =
                '<div '+
                'style="margin-top:50px; margin-left:-110px; position:absolute">' +
                '<canvas id="button_carrousel_prec" height="100" width="150"' +
                '</canvas>' +
                '</div>' ;
              */

            //alert(document.getElementById("template-banner"));
            document.getElementById("template-banner").appendChild(div_button_prec_in_image);

            // Draw a circle
            var ctx = document.getElementById('button_carrousel_prec')[0].getContext('2d');
            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.fillStyle = "rgba(0,0,255,0.3)";
            ctx.fill();
            var that = this;
            var hide_element_med = function() {
                that.hide_element();
            }
            var show_element_prec_med = function() {
                that.show_element_precedent();
            }

            document.getElementById('button_carrousel_prec').addEventListener('click', function() {
                hide_element_med(this.i, this.i_max);
                show_element_prec_med(this.i,this.i_max);
            });

            //call method
            this.button_Banner_Next();
        };



        BannerTemplate.prototype.button_Banner_Next = function(){
            var div_button_next_in_image =
                '<div style="margin-top:50px; margin-left:710px; position:absolute">' +
                '<canvas id="button_carrousel_next" height="100" width="150"' +
                '</canvas>' +
                '</div>' ;

            // $_div_carrousel_button.after($_div_button_next_in_image);
            this.carousel_div.appendChild(div_button_next_in_image);

            var ctx = document.getElementById('button_carrousel_next')[0].getContext('2d');
            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(-0,75);
            ctx.lineTo(-0,25);
            ctx.fillStyle = "rgba(0,0,255,0.3)";
            ctx.fill();

            var that = this;
            var hide_element_med = function() {
                that.hide_element();
            }
            var show_element_next_med = function() {
                that.show_element_next();
            }

            document.getElementById('button_carrousel_next').addEventListener('click', function() {
                hide_element_med(this.i, this.i_max);
                show_element_next_med(this.i, this.i_max);
            });

            //call method
            this.number_img_banner();
        };


        BannerTemplate.prototype.number_img_banner = function(){
            console.log("==  number_img_banner == ");
            var count = 0;
            this.carousel_img.each(function(){
                if ( this.carousel_img[count].getAttribute('src') != null  )
                {
                    /*
                    if(window.matchMedia("(max-width:500px)").matches) {
                        $('img').eq(count).width(400);
                    }
                    */
                    this.carousel_img[count].hide();                // Hide element
                    count++;                                  // count element on the DOM
                }
            });
            this.i_max = count - 1;
            this.i = 0;
            console.log("max = "+this.i_max);
            console.log("i = "+this.i);

            //call method
            this.init_banner();

        };

        BannerTemplate.prototype.init_banner = function(){
            this.hide_element();
            this.show_element_next( );
            this.change_image( );
        };


        BannerTemplate.prototype.hide_element = function(){

            this.i = (this.i == -1) ? this.i = this.i_max : this.i = this.i;
            this.carousel_img[this.i].hide().animate({
                width : '0px',
                height: '200px'
            }, 0);
            console.log ( " je cache cet element = "+ this.i);
        };

        BannerTemplate.prototype.show_element_next = function() {

            this.i = (this.i == this.i_max) ? 0 : this.i = this.i + 1;
            /*
            this.carousel_img[this.i].show().animate({
                width: '700px',
                height: '200px'
            }, 1500);
            */
            console.log(" j'affiche  cet element = " +  this.i);
            clearTimeout(this.set_timeout);
            this.change_image();

        };

        BannerTemplate.prototype.show_element_precedent = function()
        {
            this.i = (this.i == 0) ? this.i_max : this.i =  this.i - 1;
            this.carousel_img[this.i].style.height ='200px';
            this.carousel_img[this.i].style.left ='0';
            /*
            $('img').eq( this.i).show().animate({
                width : '700px',
                height: '200px'
            }, 1500);
            */
            console.log ( " j'afficge  cet element = "+  this.i);
            clearTimeout(this.set_timeout);
            this.change_image();
        };


        BannerTemplate.prototype.change_image = function()
        {
            var that = this;

            var hide_element_med = function() {
                that.hide_element();
            }
            var show_element_next_med = function() {
                that.show_element_next();
            }
            var change_image_med = function() {
                that.change_image();
            }
            this.set_timeout =  setTimeout(function(){
                console.log("---");
                hide_element_med();
                show_element_next_med();
                change_image_med();

            }, 5000);
        };


        return BannerTemplate;
    })();

    window.BannerTemplate = BannerTemplate;

}).call(this);