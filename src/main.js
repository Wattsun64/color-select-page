(function() {
    var http = new XMLHttpRequest(),
        sel = document.querySelector('select');


    http.onreadystatechange = readyStateChange;

    http.open('GET', 'wattsun64.github.io/color-select-page/colors.json', true);
    http.send();

    function readyStateChange() {
        if (http.readyState === 4 && http.status === 200) {
            var data = JSON.parse(http.responseText);
            console.log(data);

            clrArr(data);

            appOpt(data);

        }
    }

    function clrArr(data) {
        var clrArr = [];

        data.forEach(function(e) {
            if (clrArr.indexOf(e.group) === -1) {
                clrArr.push(e.group)
            } else if (clrArr.indexOf(e.group) > -1) {
                console.log(e.group + ' already exists!')
            }
        })

        clrArr.forEach(function(e) {
            var sel = document.querySelector('select'),
                optgroup = document.createElement('optgroup');

            optgroup.label = e;
            sel.appendChild(optgroup);
        })

    }

    function appOpt(data) {
        data.forEach(function(e) {
            var optgroup = document.querySelectorAll('optgroup'),
                opt = document.createElement('option'),
                i;

            opt.label = e.name;
            opt.value = e.value;

            for (i = 0; i < optgroup.length; i++) {
                if (e.group === optgroup[i].label) {
                    optgroup[i].appendChild(opt);
                }
            }
        })
    }


}());