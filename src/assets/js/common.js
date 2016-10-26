$(function() {
    var height = $(window).height(),
        width = $(window).width() / 2;

    function getWrapperHeight() {
        var windowHeight = $(window).height(),
            headerHeight = $('.header').height(),
            footerHeight = $('.footer').height();

        if ($(window).height() < height) return false;
        if ($(window).height() < 650) $('.wrapper__main, .main__menu').height(650);

        $('.wrapper__main, .main__menu').height(windowHeight - headerHeight);
        $('.wrapper__winners').height(1250);
        $('.wrapper__prizes').height(830);
        $('.wrapper__cabinet').height(windowHeight - headerHeight - 67);
    }

    $( "#accordion" ).on('click', 'span', function() {
        $(this)
            .toggleClass('accordion__title-active')
            .next('p').toggleClass('accordion__description-active');
    });

    $('a[data-scroll]').on('click', function(e) {
        var target$ = $(this),
            data = target$.data('scroll');

        switch (data) {
            case 'checks':
                scrollScreen($($('[data-header]')[0]).position().top);
                break;
            case 'prizes':
                scrollScreen($($('[data-header]')[1]).position().top);
                break;
            case 'winners':
                scrollScreen($($('[data-header]')[2]).position().top);
                break;
            default:
                break;
        }

        return false;

        function scrollScreen(value) {
            $('html, body').animate({
                scrollTop: value
            }, 300);
        }
    });

    $('.menu__list').on('mouseenter mouseleave', '.menu__item', function(e) {
        if ( e.type == 'mouseenter' ) {
            $(this).children('.menu__circle-default').addClass('menu__circle-default-hover');
        } else {
            $(this).children('.menu__circle-default').removeClass('menu__circle-default-hover');
        }

        return false;
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
                $('.ui-dialog').css('margin', '0 auto');
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
                $('.ui-dialog').css('margin', '0 auto');
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
                $('.ui-dialog').css('margin', '0 auto');
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
                $('.ui-dialog').css('margin', '0 auto');
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
                $('.ui-dialog').css('margin', '0 auto');
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
                $('.ui-dialog').css('margin', '0 auto');
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

    var path = document.querySelector('path');
    if ( path ) {
        var length = path.getTotalLength();
        // Clear any previous transition
        path.style.transition = path.style.WebkitTransition =
            'none';
        // Set up the starting positions
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path.getBoundingClientRect();
        // Define our transition
        path.style.transition = path.style.WebkitTransition =
            'stroke-dashoffset 2s ease-in-out';
        // Go!
        path.style.strokeDashoffset = '0';
    }

    setTimeout(
        function() {
            $('.block__layout-prizes')
                .animate({
                    opacity: 1,
                    top: 0
                }, 1000, function () {
                    $('.block__layout-saves').animate({
                        opacity: 1
                    }, 500);
                });
        }, 2000);

    $('.wrapper__main').css('margin-bottom', 0);
    getWrapperHeight();
    $(window).resize(getWrapperHeight);

    if ($(window).height() < 650) $('.wrapper__main, .main__menu').height(650);
    $('.wrapper__winners').height(1250);
    $('.wrapper__prizes').height(830);
});