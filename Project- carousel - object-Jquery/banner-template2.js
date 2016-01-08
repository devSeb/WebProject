//jQuery(document).ready(function(){
(function() {

    var BannerTemplate;

    BannerTemplate = (function(){

        /* COnstructor */
        function BannerTemplate(_template_banner){


            this.$_carousel_div    =  $('#'+_template_banner);
            this.$_carousel_ul_li  =  $('#'+_template_banner+' ul li');
            this.$_carousel_img    =  $('#'+_template_banner+' img');
            this.$_carousel_canvas =  $('#'+_template_banner+' canvas');

            this.i = 0;
            this.i_max = 0;
            this.set_timeout=null;

            //call method
            this.css_init_banner();
        }

        /* Init CSS */
        BannerTemplate.prototype.css_init_banner = function(){

            if(window.matchMedia("(min-width:800px)").matches) {

                this.$_carousel_div.css({
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

            /*Responsive for small screen */
            if(window.matchMedia("(max-width:500px)").matches) {
                this.$_carousel_div.css({
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

            this.$_carousel_ul_li.css({
                "position" : "absolute",
                "top" : "0",
                "left" : "0",
                "list-style-type":"none",
                "border":"0px solid red"
            });
            this.$_carousel_img.css({
                "height" : "200px",
                "width" : "0px",
            });
            this.$_carousel_canvas.css({
                "outline": "none",
                "border": "0 none !important"
            });

            //call method
            this.button_Banner_Prec();
        };



        BannerTemplate.prototype.button_Banner_Prec = function(){
            //var $_div_carrousel_button = $('#carrousel')
            var $_div_button_prec_in_image =
                '<div '+
                'style="margin-top:50px; margin-left:-110px; position:absolute">' +
                '<canvas id="button_carrousel_prec" height="100" width="150"' +
                '</canvas>' +
                '</div>' ;

            this.$_carousel_div.append($_div_button_prec_in_image);


            // Draw a circle
            var ctx = $('#button_carrousel_prec')[0].getContext('2d');
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

            $('#button_carrousel_prec').on('click', function() {
                hide_element_med(this.i, this.i_max);
                show_element_prec_med(this.i,this.i_max);
            });

            //call method
            this.button_Banner_Next();
        };



        BannerTemplate.prototype.button_Banner_Next = function(){
            var $_div_button_next_in_image =
                '<div style="margin-top:50px; margin-left:710px; position:absolute">' +
                '<canvas id="button_carrousel_next" height="100" width="150"' +
                '</canvas>' +
                '</div>' ;

            // $_div_carrousel_button.after($_div_button_next_in_image);
            this.$_carousel_div.append($_div_button_next_in_image);

            var ctx = $('#button_carrousel_next')[0].getContext('2d');
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

            $('#button_carrousel_next').on('click', function() {
                hide_element_med(this.i, this.i_max);
                show_element_next_med(this.i, this.i_max);
            });

            //call method
            this.number_img_banner();
        };


        BannerTemplate.prototype.number_img_banner = function(){
            console.log("==  number_img_banner == ");
            var count = 0;
            this.$_carousel_img.each(function(){
                if (  $('img').eq(count).attr('src') != null  )
                {
                    if(window.matchMedia("(max-width:500px)").matches) {
                        $('img').eq(count).width(400);
                    }
                    $('img').eq(count).hide();                // Hide element
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
            $('img').eq(this.i).hide().animate({
                width : '0px',
                height: '200px'
            }, 0);
            console.log ( " je cache cet element = "+ this.i);
        };

        BannerTemplate.prototype.show_element_next = function() {

            this.i = (this.i == this.i_max) ? 0 : this.i = this.i + 1;
            this.$_carousel_img.eq(this.i).show().animate({
                width: '700px',
                height: '200px'
            }, 1500);

            console.log(" j'affiche  cet element = " +  this.i);
            clearTimeout(this.set_timeout);
            this.change_image();

        };

        BannerTemplate.prototype.show_element_precedent = function()
        {
            this.i = (this.i == 0) ? this.i_max : this.i =  this.i - 1;
            $('img').eq(this.i).css({
                "height" : "200px",
                "left" : "0"
            });

            $('img').eq( this.i).show().animate({
                width : '700px',
                height: '200px'
            }, 1500);

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