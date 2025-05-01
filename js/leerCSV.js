var array_prods;
$(document).ready(function(){
    $.ajax({
        url: 'csv/productos.txt',
        dataType: 'text',
    }).done(function (data){
        var lines = data.trim().split('\n');
        array_prods = lines.map(line => line.split(',').map(value => value.trim()));
    });
}); 