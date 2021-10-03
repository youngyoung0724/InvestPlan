$(document).ready(function(){

    var $txt =[
        {$ask : "HOW CAN I BECOME AN INVESTOR OF THE INVESTPLAN LTD?",
        $questions : '"Firstly, you must register. Fill out the registration form. We recommend you to specify only true data. Create a login, a password and specify your email. After confirming your registration, you can log in your profile and use all services of the website: to specify payment details, credit the account, choose the investment plan, make a deposit, etc "Registration"'
        },
    ];

    for(i=0; i<$txt.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt[i].$ask}</h1>
        <p>${$txt[i].$questions}</p>
        </div>
        `);
    };

    var $txt2 =[
        { $ask : "What electronic payment systems can I use for financial operations?",
        $questions_01 : "We work with the following electronic payment systems: Perfect Money, Payeer, Bitcoin, Ethereum, Litecoin, Dash and Dogecoin. If you do not have a wallet in these systems, you can create it by using the following links",
        $questions_02 : "Perfect Money: perfectmoney.is.",
        $Qquestions_03 : "Payeer: payeer.com",
        $questionsS_04 : "Visa or Mastercard: visa.com & mastercard.com",
        $questions_05 : "Bitcoin: bitcoin.com",
        $questions_06 : "Ethereum: www.ethereum.org",
        $questions_07 : "Litecoin: litecoin.com",
        $questions_08 : "Dash: dash.org",
        $questions_09 : "Dogecoin: dogecoin.com",
        },
    ];

    for(i=0; i<$txt2.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt2[i].$ask}</h1>
        <p>${$txt2[i].$questions_01}</p>
        <p>${$txt2[i].$questions_02}</p>
        <p>${$txt2[i].$questions_03}</p>
        <p>${$txt2[i].$questions_04}</p>
        <p>${$txt2[i].$questions_05}</p>
        <p>${$txt2[i].$questions_06}</p>
        <p>${$txt2[i].$Qquestions_07}</p>
        <p>${$txt2[i].$questions_08}</p>
        <p>${$txt2[i].$questions_09}</p>
        </div>
        `);
    }

    var $txt3 =[
        { $ask : "CAN I CHANGE MY PASSWORD, PAYMENT DETAILS AND EMAIL?",
        $questions : "You can change your password yourself in your profile. You can also change payment wallet you use to make payments only through the project administrator by making a request via one of the contacts specified on the website. However, you can not change your email.",
        },
    ];

    for(i=0; i<$txt3.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt3[i].$ask}</h1>
        <p>${$txt3[i].$questions}</p>
        </div>
        `);
    }

    var $txt4 =[
        { $ask : "HOW CAN I WITHDRAW MY PROFIT?",
        $questions : 'Depending on the investment plan you chose, the profit is formed from the accrual percent and deposit. As soon as funds are credited to your personal account, you can request to withdraw them or create a new deposit by using your personal account. The money will be immediately sent to your wallet of the electronic payment system you used to make a deposit. The funds accrued according to the affiliate program are available for immediate withdrawal "Withdraw Funds".',
        },
    ];

    for(i=0; i<$txt4.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt4[i].$ask}</h1>
        <p>${$txt4[i].$questions}</p>
        </div>
        `);
    }

    var $txt5 =[
        { $ask : "HOW MUCH TIME DOES IT TAKE TO CREDIT THE ACCOUNT?",
        $questions : "Accounts are credited immediately and you can use the funds to start your investment activity at once.",
        },
    ];

    for(i=0; i<$txt5.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt5[i].$ask}</h1>
        <p>${$txt5[i].$questions}</p>
        </div>
        `);
    }

    var $txt6 =[
        { $ask : "DO YOU CHARGE ANY HIDDEN FEES FROM DEPOSIT?",
        $questions : "No, we don't charge any hidden fees.",
        },
    ];

    for(i=0; i<$txt6.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt6[i].$ask}</h1>
        <p>${$txt6[i].$questions}</p>
        </div>
        `);
    }

    var $txt7 =[
        {$ask : "WHAT ARE THE MINIMUM AND MAXIMUM DEPOSIT AMOUNT?",
        $questions : "The minimum deposit amount is $50. Maximum - $100,000.",
        },
    ];

    for(i=0; i<$txt7.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt7[i].$ask}</h1>
        <p>${$txt7[i].$questions}</p>
        </div>
        `);
    }

    var $txt8 =[
        { $ask : "DO YOU CHARGE ANY HIDDEN FEES FROM WITHDRAWALS?",
        $questions_01 : "Some payment processors charge some fees:",
        $questions_02 : "- PerfectMoney: 0.5%",
        $questions_03 : "- Payeer: 0.95%",
        $questions_04 : "- Cryptocurrencies: 0.9%",
        },
    ];

    for(i=0; i<$txt8.length; i++){ //i = 0 -> 1 -> 2
        $("#faq .box").append(`
        <div class="txt_part">
        <h1>${$txt8[i].$ask}</h1>
        <p>${$txt8[i].$questions_01}</p>
        <p>${$txt8[i].$questions_02}</p>
        <p>${$txt8[i].$questions_03}</p>
        <p>${$txt8[i].$questions_04}</p>
        </div>
        `);
    }


});