$(document).ready(function (){
    changeLanguage('lang/es.txt');
    $('#idiomaToggle').change(function (){
        if($(this).is(':checked')){
            changeLanguage('lang/en.txt');
        }else{
            changeLanguage('lang/es.txt');
        }
    });
});

function changeLanguage(file){
    $.get(file, function(data){
        const lines = data.split('\n');
        const traductions = {};

        lines.forEach(element => {
            const parts = element.trim().split('=');
            if(parts.length === 2){
                const key = parts[0].trim();
                const value = parts[1].trim();
                traductions[key] = value;
            }
        });
        $('#idTema').text(traductions['cambiarTema']);
        $('#idIdioma').text(traductions['cambiarIdioma']);
    });
}
