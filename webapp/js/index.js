const btn = document.getElementById('btn1');

btn.addEventListener('click', () => {
    const form = document.getElementById('form1');

    if(form.style.display == 'block') {
        //this shows the form
        form.style.display = 'none';
    } else {
        //this hides the form
        form.style.display = 'block';
    }
});