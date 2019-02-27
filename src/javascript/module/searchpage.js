const rander = () => {
    $('.app-head-search').on('touchstart', () => {
        $('#search-page').show();
        $('#app-main').hide();
    })
    // $('.cancle-btn').on('touchstart', () => {
    //     $('#search-page').hide();
    //     $('#app-main').show();
    // })
    $('.cancle-btn').click(() => {
        $('#search-page').hide();
        $('#app-main').show();
    })
}

module.exports = {
    rander
};