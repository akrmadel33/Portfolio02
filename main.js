/*jslint stupid: true*/

$(document).ready(function(){
    
    //---------------------------------------------------------------------------------------------------------
    //HEADER-TEXT typing animation-----------------------------------------------------------------------------
    var textType = $('#Header .col-lg-7:nth-child(1) div:nth-child(3) div'),
        delay = 2,
        tl_textType = new TimelineMax({repeat:-1});
    
    function repeatHandler () {
        tl_textType.timeScale(4);
    };
    
    function completeHandler () {
        tl_textType.timeScale(1);
    }
    
    tl_textType
        .to(textType, delay, {text:"FREELANCER", ease:Linear.easeNone, repeat:1, repeatDelay:2, onRepeat:repeatHandler, yoyo:true, onComplete:completeHandler})
        .to(textType, delay, {text:"WEB DEVELOPER", ease:Linear.easeNone, repeat:1, repeatDelay:2, onRepeat:repeatHandler, yoyo:true, onComplete:completeHandler})
        .to(textType, delay, {text:"CREATIVE", ease:Linear.easeNone, repeat:1, repeatDelay:2, onRepeat:repeatHandler, yoyo:true, onComplete:completeHandler})
        .to(textType, delay, {text:"PROFESSIONAL", ease:Linear.easeNone, repeat:1, repeatDelay:2, onRepeat:repeatHandler, yoyo:true, onComplete:completeHandler});
    
    //---------------------------------------------------------------------------------------------------------
    //CONTACTS-HOVER animation---------------------------------------------------------------------------------
    var contacts = $('#About #Contacts');
    
    $('#About .col-md-6:nth-child(1)').hover(function(){
        TweenLite.to(contacts, 0.5, {left:0});
    },function(){
        TweenLite.to(contacts, 0.5, {left:'-100%'});
    });
    
    //---------------------------------------------------------------------------------------------------------
    //SKILLS-WAYPOINT animation--------------------------------------------------------------------------------
    var skills = new Waypoint({
        element: $('#About .col-md-6:nth-child(2)'),
        handler: function(direction) {
            if (direction == 'down') {
                var inBox = $('#About .skills .box div');
                TweenLite.from(inBox, 2, {width:0});
            }
        },
        offset: 250
    });
    //tooltip initiation
    $('[data-toggle="tooltip"]').tooltip();
    
    //---------------------------------------------------------------------------------------------------------
    //PROJECTS-HOVER animation---------------------------------------------------------------------------------
    $('#Projects .img').hover(function(){
        TweenLite.to($(this).find('.content'), 0.5, {left:0});
    },function(){
        TweenLite.to($(this).find('.content'), 0.5, {left:'-100%'});
    });
    
    //---------------------------------------------------------------------------------------------------------
    //NAVBAR-TEXT-WAYPOINT-------------------------------------------------------------------------------------
    var text = $('#Navigation .navbar-text');
    
    var navText_about = new Waypoint({
        element: $('#About'),
        handler: function(direction) {
            if (direction == 'down') {
                TweenLite.to(text, 0.5, {text:'ABOUT', ease:Linear.easeNone});
            } else if (direction == 'up') {
                TweenLite.to(text, 0.5, {text:'HOME', ease:Linear.easeNone});
            }
        },
        offset: 110
    });
    
    var navText_projects = new Waypoint({
        element: $('#Projects'),
        handler: function(direction) {
            if (direction == 'down') {
                TweenLite.to(text, 0.5, {text:'PROJECTS', ease:Linear.easeNone});
            } else if (direction == 'up') {
                TweenLite.to(text, 0.5, {text:'ABOUT', ease:Linear.easeNone});
            }
        },
        offset: 110
    });
    
    var navText_components = new Waypoint({
        element: $('#Components'),
        handler: function(direction) {
            if (direction == 'down') {
                TweenLite.to(text, 0.5, {text:'COMPONENTS', ease:Linear.easeNone});
            } else if (direction == 'up') {
                TweenLite.to(text, 0.5, {text:'PROJECTS', ease:Linear.easeNone});
            }
        },
        offset: 110
    });
    
    //---------------------------------------------------------------------------------------------------------
    //SMOOTH-SCROLLING-----------------------------------------------------------------------------------------
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
    //---------------------------------------------------------------------------------------------------------
    //PARTICLES.JS-CONFIG--------------------------------------------------------------------------------------
    particlesJS.load('particles-js', 'particles.json', function(){
        console.log('particles.json is loaded and we are good to go.....');
    });
    
});