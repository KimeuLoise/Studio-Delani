$("header").css('background-image', 'url(assets/backgrounds/h_img.jpg)');
$(".services").css('background-image', 'url(assets/backgrounds/s_image.jpg)');
$(".contacts").css('background-image', 'url(assets/backgrounds/c_image.jpg)');

$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").hide();
      $("#design").show(10);
    });
    $("#design").click(function(){
      $("#design").hide(250);
      $("#design-image").show(10);
    });
});

$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").hide();
      $("#development").show(10);
    });
    $("#development").click(function(){
      $("#development").hide(250);
      $("#development-image").show(10);
    });
});

$(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").hide();
      $("#product").show(10);
    });
    $("#product").click(function(){
      $("#product").hide(250);
      $("#product-image").show(10);
    });
});

$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
});

$(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
});

 $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
});
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
});
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
});
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });
  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
});
  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
});

$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#comment").val();
    if ($("#name").val() && $("#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your Name and a valid Email or Subscribe if you are not suscribed!!");
    } 
  });
});