(function() {
    var res = document.querySelector('button'),
        sel = document.querySelector('select');

    res.addEventListener('click', bgReset);

    function bgReset() {
        var container = document.getElementById('container');

        document.body.style.backgroundColor = '';
        sel.value = 'white';

        container.classList.add('clrChange');
        container.addEventListener('animationend', function() { this.classList.remove('clrChange') });

    }

}());