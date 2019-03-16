document.getElementById('tabList').addEventListener('click', function(e){
    const tabList = ['about','projects','welcome','technology','contact'];
    const ti = tabList.indexOf(e.target.id);

    if(ti !== false){
        for(let i = 0; i < tabList.length; i += 1) {
          if(ti !== i){
            document.getElementById(tabList[i]+'Txt').style.display = 'none';
          }
        }
        document.getElementById(tabList[ti]+'Txt').style.display = 'block';
        document.getElementById('doZmiany').style.display = "none";
      }
  });



$(document).ready(function(){

  $('.mailContact').on('mouseenter', function(){
      $('#mailP').css('visibility', 'visible');
      $('#mailP').slideDown();
  }).on('mouseleave', function(){
    $('#mailP').css('visibility', 'hidden');
      $('#mailP').slideUp();
      
  });

  $('.phoneContact').on('mouseenter', function(){
    $('#phoneP').css('visibility', 'visible');
    $('#phoneP').slideDown();
}).on('mouseleave', function(){
  $('#phoneP').css('visibility', 'hidden');
    $('#phoneP').slideUp();
});

$('.facebookContact').on('mouseenter', function(){
  $('#facebookP').css('visibility', 'visible');
  $('#facebookP').slideDown();;
}).on('mouseleave', function(){
  $('#facebookP').slideUp();
  $('#facebookP').css('visibility', 'hidden');
});


});