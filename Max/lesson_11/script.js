$(document).ready(function(){
    $(".blk-1 .fa-search-plus").click(function(){
        $(".blk-1").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-1").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-1 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-1").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-1").css("border","none");    
        });
    });
    $(".blk-2 .fa-search-plus").click(function(){
        $(".blk-2").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-2").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-2 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-2").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-2").css("border","none");    
        });
    });
    $(".blk-3 .fa-search-plus").click(function(){
        $(".blk-3").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-3").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-3 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-3").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-3").css("border","none");    
        });
    });
    $(".blk-4 .fa-search-plus").click(function(){
        $(".blk-4").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-4").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-4 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-4").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-4").css("border","none");    
        });
    });
    $(".blk-5 .fa-search-plus").click(function(){
        $(".blk-5").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-5").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-5 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-5").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-5").css("border","none");    
        });
    });
    $(".blk-6 .fa-search-plus").click(function(){
        $(".blk-6").toggleClass("zoom");
        $(".blocks:hover p").css("display","none");
        $(".blk-6").css("border","1px solid grey");
        $("body").addClass("overlay");
        $(".blk-6 p").after("<div class='close-block'></div>");
        $(".close-block").on("click", function() {
             $(".blk-6").toggleClass("zoom");
             $(".blocks:hover p").css("display","block");
             $(".close-block").css("display","none");
             $(".blk-6").css("border","none");    
        });
    });
});