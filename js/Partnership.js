$(document).ready(function(){

    //Partnership  
    var $arr_01= 
        ["With our affiliate program, you can make money by referring clients to InvestPlan LTD investment platform. Promote our website by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.",

        "Our partner affiliate program applies to all of our members from the moment they sign up for an account with us simply share your referral link with friends, and you’ll earn 9% commission at level first from their active deposit. Any additional investment made by your branch will create 3% commission at level second and 1% commission at level third. Commission is credited to your account balance instantly, without any delays.",

        "Regional Representatives provides you with the opportunity to earn up to 19% commission. Support and advertise our project in your region, become our partner, and you will be financially awarded. An active deposit is needed for you to earn an affiliate commission."];

    console.log($arr_01);

    $("#Partnership .wrap .txt_part p").each(function(index){
        $(this).text($arr_01[index]);
        $(this).text($arr_01[index]);
        $(this).text($arr_01[index]);
    });

    //Program
    var $arr_02 =[
        {$percent:"13%",
        $title : " Commission for Partners",
        $ex : "As an standard user, you are able to earn an incentive amount of 9% - 3% - 1% commission per invesment of your referrals. Standard members are not required to have any active investment, or account balance in order to be able to earn from their referrals.",
        $btn : "Get Started Now",
        $img : "partner.svg"},

        {$percent:"19%",
        $title : " Commission for Representatives",
        $ex : "You are able to become a global representative from all over the world and take advantages of 12% - 4% - 2% - 1% referral commission. In particular, you do not need an active deposit to register for a regional representative. Please fill out the form below..",
        $btn : "Representative Form",
        $img : "representative.svg"},

    ];

    for(i=0; i<$arr_02.length; i++){ //i = 0 -> 1 -> 2
        $("#Program .wrap").append(`
        <div class="box">
        <h2><span>${$arr_02[i].$percent}</span>${$arr_02[i].$title}</h2>
        <p>${$arr_02[i].$ex}</p>
        <a class="btn">${$arr_02[i].$btn}</a>
        <img src="./img/sub/${$arr_02[i].$img}" alt="">
        `);
    }
    
    var $arr_03 = [
        {img: "m_01.jpg"},
        {img: "m_02.jpg"},
        {img: "m_03.jpg"},
        {img: "m_04.jpg"},
        {img: "m_05.jpg"},
        {img: "m_06.jpg"},
        {img: "m_07.jpg"},
        {img: "m_08.jpg"},
        {img: "m_09.jpg"},
        {img: "m_10.jpg"},

    ];

    for(i=0; i<$arr_03.length; i++){
        $("#Representative .wrap").append(`
           <img src="./img/managers/${$arr_03[i].img}" alt="">
        `);
    };


});