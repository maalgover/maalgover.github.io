$("path").hover(function(){
  $("path").css("fill","#f0eae1");
        $(this).css("fill","#FFAC30");
        let name = $(this).attr("name");
        $(".selection").html(name);
});

