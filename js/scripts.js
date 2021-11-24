//$("#document").ready(function(){//
//form validation

$("#form").submit(function(event){
  event.preventDefault();
  let name= $("#name").val();
  let email= $("#email").val();
  let message= $("#message").val();

if($("#name").val() && $("#email").val() && $("#message").val()){
  alert("Hello "+ name +". Thanks for your feedback. We'll get back to you soon.")
}else{
  alert("Please enter your correct name and email!");
}
$("#form").each(function(){
  this.reset();
});
});

//show and hide
$(".image_design").click(function(){
  $(this).hide(function(){
    $(".image-overlay1").show(function(){
      $(".image-title1").css("font-weight","bold")
      $(this).click(function(){
        $(this).hide(function(){
          $(".image_design").show();
        });
      });
    });
  });
});

$(".image_development").click(function(){
    $(this).hide(function(){
      $(".image-overlay2").show(function(){
        $(".image-title2").css("font-weight","bold")
        $(this).click(function(){
          $(this).hide(function(){
            $(".image_development").show();
          });
        });
      });
    });
});

$(".image_project").click(function(){
  $(this).hide(function(){
    $(".image-overlay3").show(function(){
      $(".image-title3").css("font-weight","bold")
      $(this).click(function(){
        $(this).hide(function(){
          $(".image_project").show();
        });
      });
    });
  });
});


//portfolio
$("#img1").mouseenter(function(){
    $("#pop-up1").show(function(){
      $(this).mouseleave(function(){
        $(this).hide();
      });
    });
});
$("#img2").mouseenter(function(){
  $("#pop-up2").show(function(){
    $(this).mouseleave(function(){
      $(this).hide();
    });
  });
});
$("#img3").mouseenter(function(){
$("#pop-up3").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});
$("#img4").mouseenter(function(){
$("#pop-up4").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});$("#img5").mouseenter(function(){
$("#pop-up5").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});$("#img6").mouseenter(function(){
$("#pop-up6").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});$("#img7").mouseenter(function(){
$("#pop-up7").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});
$("#img8").mouseenter(function(){
$("#pop-up8").show(function(){
  $(this).mouseleave(function(){
    $(this).hide();
  });
});
});