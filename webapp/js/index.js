//const btn = document.getElementById('btn1');

//btn.addEventListener('click', () => {
    //const form = document.getElementById('form1');

    //if(form.style.display == 'none') {
        //this shows the form
        //form.style.display = 'block';
    //} else {
        //this hides the form
        //form.style.display = 'none';
    //}
<script>
$(document).ready(function(){
    $('btn1').click(function(){
        $('form1').toggle(500);
    })
});
</script>