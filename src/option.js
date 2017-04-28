(function() {
    var http = new XMLHttpRequest(),
        sel = document.querySelector('select');


    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            var file = JSON.parse(http.responseText);
            console.log(file);

            file.colors.forEach(function(e) {
                var opt = document.createElement('option'),
                    txt = document.createTextNode(e.name);

                opt.appendChild(txt);
                opt.value = e.value;
                sel.appendChild(opt);
            })
        }
    }
    http.open('GET', './../colors.json', true);
    http.send();

}())