$(document).ready(function(){

    var $box= [
        {$a1 : '"InvestPlan LTD" Company was registered in March 9th, 2017 in Great Britain (registration number #10660714) and works according to the legislation of this jurisdiction.',

        $a2 : "InvestPlan LTD fulfills energy saving functions and works in compliance with the normative, legislative and legal enactments. Our goal is to develop new areas, increase the share of the company participation in international projects in energy saving and ecology.",

        $a3 : "Why have we chosen a traditional nuclear power industry for investing rather than alternative (natural) energy?",

        $a4 : "The nuclear sector provides 17% of all power consumed by mankind. In industrially developed countries (France, Lithuania, Germany, and Sweden) where there is a deficit of natural power resources (oil, natural gas, coal), the production of electrical power is from 50 to 76%.",

        $a5 : "According to experts, in the nearest future the development of nuclear energy is forecasted in countries of the Asia-Pacific region (China, India), some countries of the Eastern Europe (the Czech Republic, Slovakia), and countries of the former CIS (Kazakhstan, Russia).",

        $a6 : "InvestPlan LTD Company has established a number of branches in the countries where the nuclear power industry is the main one for producing electric power. Besides, we actively participate in projects on energy saving on the regional level, take part in ecological programs and invest in scientific developments of technologies for nuclear energy.",

        $img1 : "plant.png"},



    ]

    for(i=0; i<$box.length; i++){ //i = 0 -> 1 -> 2
        $("#about .wrap").append(`
        <div class="box">
            <h2>${$box[i].$a1}</h2>
            <h2>${$box[i].$a2}</h2>
            <h2>${$box[i].$a3}</h2>
            <h2>${$box[i].$a4}</h2>
            <h2>${$box[i].$a5}</h2>
            <h2>${$box[i].$a6}</h2>
        </div>
        <div class="box">
            <img src="./img/sub/${$box[i].$img1}" alt="">
        </div> 
    `);
    }

    var $box2 =[
        {$img2 : "certificate.png",

        $a7 : 'Professional circuit installers, planning engineers, technologists, marketing experts and specialists on power saving work for our company.',

        $a8 : "We specialize in supplying equipment for nuclear energy and modernizing stations. In particular, in the Russian Federation we participated in modernizing three nuclear reactors. As a result, the total amount of power production was increased by 19%.",

        $a9 : "Modern nuclear energy is being actively developed thanks to essentially new technologies on ecology and safety, as well as from implementing new perspective innovational solutions.",

        $a10 : "We conclude agreements with ecological organizations and receive funds financed by the companies implementing innovational technologies to minimize the waste of nuclear reactors.",

        $a11 : "As of 2017, our investment portfolio has orders for more than twenty projects on reducing power consumption. Some projects are being already implemented, and some of them are planned. The total amount of the orders is about one million US dollars. Our partners are satisfied with our relatively inexpensive and safe technological solutions.",

        $a12 : "You can feel safe about your investments because the InvestPlan LTD Company works on the state and international level which guarantees stable work and profits."},
    ]
    for(i=0; i<$box2.length; i++){ //i = 0 -> 1 -> 2
        $("#about .wrap").append(`
        <div class="box">
         <img src="./img/sub/${$box2[i].$img2}" alt="">
        </div> 
         <div class="box">
            <h2>${$box2[i].$a7}</h2>
            <h2>${$box2[i].$a8}</h2>
            <h2>${$box2[i].$a9}</h2>
            <h2>${$box2[i].$a10}</h2>
            <h2>${$box2[i].$a11}</h2>
            <h2>${$box2[i].$a12}</h2>
        </div>
    `);
    }  
    

});

