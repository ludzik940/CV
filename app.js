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
        document.getElementById('wlcScreen').style.display = "none";

      }
  });

  document.getElementById('menuArrow').addEventListener('click', function(){
      document.querySelector('.menuContainer').style.display = "block";
      document.getElementById('menuArrow').style.display = "none";
  });
