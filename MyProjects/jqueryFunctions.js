$(document).ready(function(){
  $("button").click(function(){
    $("#head").hide();
  });
});
$(document).ready(function(){
  $("#head").on ({
    mouseenter : function(){
      $(this).css("backgroundColor", "yellow");
    },
    mouseleave : function(){
      $(this).css("backgroundColor", "pink");
    },
    click : function(){
      $(this).css("backgroundColor", "cyan");
    }
  });
});

$(document).ready(function(){
  $("#visible").click(function(){
    $("#head").show();
  });
});

$(document).ready(function(){
  $("#toggle").click(function(){
    $("#line").toggle(1000);
  });
});

$(document).ready(function(){
  $("#fade").click(function(){
    $("#first").fadeToggle(3000);
    $("#second").fadeToggle(1000);
    $("#third").fadeToggle();
  });
});

$(document).ready(function(){
  $(function(){
    $("#first").draggable();
    $("#second").draggable();
    $("#third").draggable();
  });
});