const tellogin=require('../control/tel-login');
const regtel=require('../control/reg-tel');
const idlogin=require('../control/id-login');

const router={
    'id-login':idlogin.rander,
    'tel-login':tellogin.rander,
    'reg-tel':regtel.rander
}


module.exports=router;