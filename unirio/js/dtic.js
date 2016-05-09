/**
 * Created by diogomartins on 11/7/14.
 */
$(window).bind('scroll', function() {

            if ($(this).scrollTop() > 50) {

                $('#unirio_main_header').css({
                    position: 'fixed',
                    top: '0px',
                    width: '100%',
                    opacity: '.9'
                });


            } else {

                $('#unirio_main_header').css({
                    position: 'relative',
                    top: '0px',
                    width: 'auto',
                    opacity: '1'
                });

            }
        });


function consertaFileUpload(){

    $(document).on('change',"input[type=file]",function(e) {
        $(this).css({
            'width': 'auto',
            'color': 'black'
        });

        if ($(this).next().hasClass('nome_antigo')) {
            $(this).next().remove();
        }

    });
}

function fileDownload(a,b){
    download(a,b);
}

function ativa_bootstrap_datepicker() {

    var seletorBootstrapWidget = 'input.date_bootstrap';

    $(seletorBootstrapWidget).each(function () {
        $(this).datepicker({
            format: "dd/mm/yyyy",
            language: "pt-BR",
            autoclose:true
        });
    });
    $(seletorBootstrapWidget).mask("00/00/0000",{placeholder:"dd/mm/aaaa"})
}

function desabilitarEnterTypeAhead(typeAheadSelector) {
        $(typeAheadSelector).focus(function () {
            $(this).keypress(function (e) {
                var keycode = (e.keyCode ? e.keyCode : e.which); //Checa se a tecla é 'Enter'.
	            if(keycode == '13'){
                    e.preventDefault();
                }
            });
        });
    }


function checkbox_toggler(ativador, ativado,default_show) {

        default_show = (typeof default_show === 'undefined') ? true : default_show;

        if ($(ativador).prop('checked')) {
            if (default_show) {
                $(ativado).each(function (i, e) {
                    $(e).show();
                });
            } else {
                $(ativado).each(function (i, e) {
                    $(e).hide();
                });
            }
        }
        else{
            if (default_show) {
                $(ativado).each(function (i, e) {
                   $(e).hide();
                });
            }else{
                $(ativado).each(function (i, e) {
                    $(e).show();
                });
            }
        }

        if (default_show) {
            jQuery(ativador).change(function () {
                if (jQuery(ativador).prop('checked'))
                    $(ativado).each(function (i, e) {
                        $(e).show();
                    });
                else $(ativado).each(function (i, e) {
                    $(e).hide();
                });
            });
        }else{
            jQuery(ativador).change(function () {
                if (jQuery(ativador).prop('checked'))
                    $(ativado).each(function (i, e) {
                        $(e).hide();
                    });
                else $(ativado).each(function (i, e) {
                    $(e).show();
                });
            });
        }
    }

var modalPleaseWait;
    modalPleaseWait = modalPleaseWait || (function () {
        var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h3>Carregando...</h3></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
        return {
            showPleaseWait: function() {
                $(".modal").css({"opacity":0.2});
                pleaseWaitDiv.modal();
            },
            hidePleaseWait: function () {
                pleaseWaitDiv.modal('hide');
                $(".modal").css({"opacity":1});
            }
        };
    })();