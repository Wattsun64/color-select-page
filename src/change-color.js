(function() {
    var sel = document.querySelector('select'),
        container = document.getElementById('container');

    container.addEventListener('animationend', function() { this.classList.remove('mvInFromTop') });

    sel.addEventListener('change', bgColorChange);

    function bgColorChange() {
        document.body.style.backgroundColor = this.value;
        container.classList.add('clrChange');

        container.addEventListener('animationend', function() { this.classList.remove('clrChange') })
    }

}())