const btn = document.getElementById('btn1');

window.onload= function(){
    btn.addEventListener('click', () => {
        const form = document.getElementById('form1').style.display="none";
    });
}
    function form1(a) {
        if (a ==1) {
            document.getElementById("form1").style.display="block";
        } else {
            document.getElementById("form1").style.display="none";
        }
    }

//window.onload= function(){
   // $(document).ready(function(){
      //  $('btn1').click(function(){
      //   $('form1').toggle(500);
      //  })
   // })
//};
