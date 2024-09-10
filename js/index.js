// offsetX and offsetY is the key
$(function(){
    $(".ripple").on("click",function(e){
      var offsetX = e.offsetX;
      var offsetY = e.offsetY;
      $(this).find(".ripple__circle").css({
                                            top: offsetY,
                                            left: offsetX
                                          });
      $(this).addClass('ripple--active');
  //The key is animationend in this event
      $(this).on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('ripple--active');
      });
    });
  });

  $(function() {
    $(".lading-page__register-btn").on("click", function() {
      window.location.href = 'login.html'; // Redirige a login.html
    });
  });