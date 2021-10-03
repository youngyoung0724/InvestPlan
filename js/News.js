$(document).ready(function(){


var $news = [
    {$img : "news_01.jpg",
    $title : "Uranium market not yet ready for Cameco restarts, says CEO",
    $center : "Although uranium market challenges are easing, Cameco CEO Tim Gitzel says there is still far to go before the Canadian uranium company restarts operations at McArthur River/Key Lake. Gitzel made the comment during the presentation of its second quarter results yesterday...",
    $date : "Jul-29-2019 03:32:55 PM"},

    {$img : "news_02.jpg",
    $title : "Nuclear remains UK’s main low-carbon energy source, despite outages",
    $center : "The UK obtained 19% of its primary energy from low-carbon sources last year, with 39% of this from nuclear power, but this was 7% lower than in 2017 due to outages at Dungeness B and Hunterston B towards the end of 2018, official statistics published today show. Nuclear capacity was broadly the same as in 2017, at 9.3 GW..",
    $date : "Jul-26-2019 06:54:26 PM"},

    {$img : "news_03.jpg",
    $title : "Ohio clean energy bill becomes law",
    $center : "Ohio's House of Representatives passed House Bill 6 yesterday at a session held earlier than the 1 August date that had been expected, and it was signed into law by Governor Mike DeWine. The law will provide clean energy credits to zero-emission power producers, including nuclear power plants...",
    $date : "Jul-26-2019 06:54:26 PM"},

    {$img : "news_04.jpg",
    $title : "Olkiluoto faces further delay to July 2020",
    $center : "Commissioning of the EPR at Olkiluoto in Finland has been delayed again, this time by six months to July 2020, utility Teollisuuden Voima Oyj (TVO) said yesterday. The new date was given in an updated schedule for the OL3 EPR plant unit from the plant supplier Areva-Siemens Consortium...",
    $date : "Jul-22-2019 11:29:24 AM"},

    {$img : "news_05.jpg",
    $title : "Welcome to InvestPlan LTD!",
    $center : "Dear clients, We are glad to welcome you to our investment service. We started our company with a great idea for long cooperation. Energy Invest Corporation LTD investment service totally prepared for a long-term and mutually beneficial service for our clients...",
    $date : "Jul-16-2019 05:55:40 AM"},
]



for(i=0; i<$news.length; i++){ //i = 0 -> 1 -> 2
    $("#center .wrap .news").append(`
    <div class="box">
        <div class="img">
        <img src="./img/sub/${$news[i].$img}" alt="">
        </div>
        <div class="txt_part">
        <h2>${$news[i].$title}</h2>
        <p>${$news[i].$center}</p>
        <h1>${$news[i].$date}</h1>
        </div>
    </div>
    `);
}

});