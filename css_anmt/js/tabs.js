$(document).ready(function(){
  $(".item_menu").click(function(){
    $(".tab").addClass('hidden');
  });

  $(".item_menu.item_a").click(function(){
  	$(".tab_a").removeClass('hidden');
  });

  $(".item_menu.item_b").click(function(){
  	$(".tab_b").removeClass('hidden');
  });

  $(".item_menu.item_c").click(function(){
  	$(".tab_c").removeClass('hidden');
  });

  $(".item_menu.item_d").click(function(){
  	$(".tab_d").removeClass('hidden');
  });
});

$(document).ready(function(){
  $(".item_menu").click(function(){
    $(".tab h3").removeClass('slideDown');
  });

  $(".item_menu.item_a").click(function(){
  	$(".tab_a h3").addClass('slideDown');
  });

  $(".item_menu.item_b").click(function(){
  	$(".tab_b h3").addClass('slideDown');
  });

  $(".item_menu.item_c").click(function(){
  	$(".tab_c h3").addClass('slideDown');
  });

  $(".item_menu.item_d").click(function(){
  	$(".tab_d h3").addClass('slideDown');
  });
});