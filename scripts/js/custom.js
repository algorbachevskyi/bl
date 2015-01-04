$(function() {

    $('.up-button').hide();

    $('#mainpage').fullpage({
        //Navigation
//        menu: true,
//        anchors:['1', '2','3'],
//        navigation: true,
//        navigationPosition: 'right',
        resize: false,

        afterLoad : function(anchorLink, index){
            switch (index) {
                case 3 :
                    $('.down-button').fadeOut();
                    break;
                case 1 :
                    $('.up-button').fadeOut();
                    break;
                default:
                    $('.up-button').show();
                    $('.down-button').show();
            }
        }
    });

    $('.up-button').on('click', function(){
        $.fn.fullpage.moveSectionUp();
    });

    $('.down-button').on('click', function(){
        $.fn.fullpage.moveSectionDown();
    })
});