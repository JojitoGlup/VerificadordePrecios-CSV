$('document').ready(function (){
    $('#temaToggle').change(function (){
        if($(this).is(':checked')){
            $('body').css({'background-color':'#222'});
            $('.date-time').css({ 'color':'#fff'});
            $('h2').css({'color':'#fff'});
            $('h5').css({'color':'#fff'});
        }else{
            $('body').css({'background-color':'#fff'});
            $('.date-time').css({ 'color':'#000'});
            $('h2').css({'color':'#000'});
            $('h5').css({'color':'#000'});
        }
    });
});