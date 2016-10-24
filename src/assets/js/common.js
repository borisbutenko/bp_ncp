$(function() {
    var height = $(window).height(),
        width = $(window).width() / 2;

    $( "#accordion" ).on('click', 'span', function() {
        $(this)
            .toggleClass('accordion__title-active')
            .next('p').toggleClass('accordion__description-active');
    });

    getWrapperHeight();
    $(window).resize(getWrapperHeight);

    $('.menu__list').on('mouseenter mouseleave click', '.menu__item', function(e) {
        if ( e.type == 'click' ) {
            $('.menu__circle-active, .menu__circle-active-second').removeClass('menu__circle-active menu__circle-active-second');
            $(this).children('.menu__circle-default').addClass(function() {
                if ( $(this).next().hasClass('link__cabinet') ) return 'menu__circle-active menu__circle-active-second';
                return 'menu__circle-active';
            });
        }
        else if ( e.type == 'mouseenter' ) {
            $(this).children('.menu__circle-default').addClass('menu__circle-default-hover');
        } else {
            $(this).children('.menu__circle-default').removeClass('menu__circle-default-hover');
        }
    });

    $('[data-target]').on('click', function() {
        var target$ = $(this),
            data = target$.data('target'),
            buttons$ = $('.button__purple-bg'),
            elements$ = $('.input__default, .select__default, .input__radio'),
            cabinet$ = $('.block__cabinet'),
            check$ = $('.block__check');

        switch (data) {
            case 'questionnaire':
                cabinet$.show(500);
                check$.slideUp(500);
                buttons$.removeClass('button__purple-bg');
                target$.addClass('button__purple-bg');
                break;
            case 'check':
                cabinet$.hide(500);
                check$.slideDown(500);
                buttons$.removeClass('button__purple-bg');
                target$.addClass('button__purple-bg');
                break;
            case 'edit':
                elements$.each(function() {
                    var self$ = $(this),
                        text = self$.attr('placeholder');

                    if ( text ) self$.val(text);
                    if ( self$.is('.input__radio') )
                        self$.next('label').addClass('label__radio-active');

                    self$
                        .css('color', '#000')
                        .removeAttr('disabled');
                });
                $('.block__layout-sex, .block__layout-date')
                    .find('span').css('color', '#000');
                break;
            case 'registration':
                hideModals();
                $("#modal__login").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'registration-check':
                hideModals();
                $("#modal__check").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'registration-check-second':
                hideModals();
                $("#modal__check-second").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'registration-check-third':
                hideModals();
                $("#modal__check-third").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'registration-check-forth':
                hideModals();
                $("#modal__check-forth").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'registration-check-fifth':
                hideModals();
                $("#modal__check-fifth").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: 880,
                    height: 482
                });
                break;
            case 'faq':
                hideModals();
                $("#modal__faq").dialog({
                    resizable: false,
                    modal: true,
                    closeText: "",
                    minWidth: width,
                    height: height
                });
                $('.ui-dialog').css('margin', 0);
                break;
            default:
                break;
        }

        return false;

        function hideModals() {
            $('.ui-button').click();
        }
    });

    function getWrapperHeight() {
        var windowHeight = $(window).height(),
            headerHeight = $('.header').height(),
            footerHeight = $('.footer').height();

        if ( $(window).height() < height) return false;

        $('.wrapper__main, .main__menu').height(windowHeight - headerHeight);
    }
});