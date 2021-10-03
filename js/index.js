$(document).ready(function(){


    /* sec_03 */
    var $box =[
        ["if_vector_65_02_473778.svg", "What’s “InvestPlan”?", "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."],
        ["if_vector_65_07_473788.svg", "Breaking down “InvestPlan”", "These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."],
        ["if_vector_65_14_473802.svg", "Incredible Strategy & Analisys", "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."],
    ];

    var $bag = `
        <div class="box">
        <img  src="./img/cont_01.png" alt="">
        <h2></h2>
        <p></p>
        </div>
    `;

    for(i=0; i<$box.length; i++){
        $("#sec_02 .wrap").append($bag);
    };

    $("#sec_02 .box").each(function(i){
        //$(this).find("img").css("background-image", "url(./img/"+$box[i][0]+")");
        $(this).find("img").attr("src", "./img/"+$box[i][0]);
        $(this).find("h2").text($box[i][1]);
        $(this).find("p").text($box[i][2]);
    });


    /* sec_04 */
    var $cont_04 = [
        {img : "invest-01.jpg",
         title : "Newyork in USA", 
         explain : "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security.",
         arrow : "arrow_right.svg"}, 

        {img : "invest-02.jpg",
         title : "Tokyo in Japan", 
         explain : "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for...",
         arrow : "arrow_right.svg"}, 

        {img : "invest-03.jpg",
         title : "Sydney in Australia", 
         explain : "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ...",
         arrow : "arrow_right.svg"}, 

        {img : "invest-04.jpg",
         title : "Istanbul in Turkey", 
         explain : "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be.",
         arrow : "arrow_right.svg"}, 
        
    ]; 

    for(i=0; i<$cont_04.length; i++){
        $("#sec_04 .wrap").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/${$cont_04[i].img})"></div>
            <div class="txt_part">
                <h2>${$cont_04[i].title}</h2>
                <p>${$cont_04[i].explain}</p>
            </div>
            <a href="">
            <div class="img" style="background-image:url(./img/${$cont_04[i].arrow})"></div>
            </a> 
        </div>
        `);
    };

    /* sec_05 */
    var $cont_05 = [
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

    for(i=0; i<$cont_05.length; i++){
        $("#sec_05 .blue_bg .managers").append(`
            <img src="./img/managers/${$cont_05[i].img}"></>
        `);
    };





});