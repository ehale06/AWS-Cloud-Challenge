const btn = document.getElementById('btn1');

windown.onload=function(){

    btn.addEventListener('click', () => {
        const form = document.getElementById('form1').style.display="none";
})

    if(form.style.display == 'none') {
        //this shows the form
        //form.style.display = 'block';
    } else {
        //this hides the form
        //form.style.display = 'none';
    }
};

//window.onload= function(){
   // $(document).ready(function(){
      //  $('btn1').click(function(){
      //   $('form1').toggle(500);
      //  })
   // })
//};
