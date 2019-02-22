const rander = () => {
    $('.app-head-search').on('touchstart', () => {
        $('#search-page').show();
        $('html').css('overflow','hidden')
        // $('#search-page').bind("touchmove", function (e) {
        //     e.preventDefault();
        // });
    })
    $('.cancle-btn').click(() => {
        $('#search-page').hide();
        $('html').css('overflow','auto')
    })
}

module.exports = {
    rander
};