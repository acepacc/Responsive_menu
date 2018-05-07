//$(document).ready(function(){
//    
//    $('.mobileMenu .li').click(function(){
//        
//        //alert('hello You pressed me');
//        $('.mobileMenu').toggleClass('active');
//    })
//    
//    
//})









//MOBILE SETTING


$(document).ready(function(){
    
    $('.mobileMenuIcon').click(function(){
        
        //alert('hello You pressed me');
        //$('.line').hide();
        $('.mobileMenuIcon').toggleClass('active');
        
    });
    
    
});



$(document).ready(function(){
    
    $('.mobileMenuIcon').click(function(){
        
        //alert('hello You pressed me');
        //$('.line').hide();
      
        $('ul').toggleClass('menuShow');
        
    });
    
    
});




$(window).scroll(function(){
    
   var $scrollPosition = $(this).scrollTop();
   //$('.p1').text('Margin Postion: '+ $scrollPosition);
      
    if($scrollPosition >= 20){
        
        $('.menu').addClass('fixedMenu');
        
    }else{
        
        $('.menu').removeClass('fixedMenu');
    }
    
    
    
    
});




$(window).scroll(function(){
    
   var $scrollPosition = $(this).scrollTop();
   //$('.p1').text('Margin Postion: '+ $scrollPosition);
      
    if($scrollPosition >= 1){
        
        $('.mobileMenu').addClass('fixedMenu');
        $('.mobileMenu').css('background-color','rgba(0,0,0,.7)');
        $('nav, ul, li, a').css('background-color','rgba(0,0,0,.4)');
       
        
        
    }else{
        
        $('.mobileMenu').removeClass('fixedMenu');
        $('.mobileMenu').css('background-color','black');
        $('nav, ul, li, a').css('background-color','rgba(0,0,0,1)');
    }
    
    
    
    
});






//$(window).scroll(function(){
//    
//   var $scrollPosition = $(this).scrollTop();
//    //alert($scrollPosition);
//    
//    if($scrollPosition >= 300){
//        
//        $('.menu').addClass('fixedMenu');
//        
//    }else{
//        
//        $('.menu').removeClass('fixedMenu');
//    }
//    
//    
//    
//    
//});






//
//$(window).scroll(function(){
//    
//   var $scrollPosition = $(this).scrollTop();
//    //alert($scrollPosition);
//    
//    if($scrollPosition >= 300){
//        
//        $('.menu').addClass('mobileFixedMenu');
//        
//    }else{
//        
//        $('.menu').removeClass('mobileFixedMenu');
//    }
//    
//    
//    
//    
//});
















