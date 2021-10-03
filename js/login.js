$(document).ready(function(){

    $("#login .submit_form").submit(function(){ // 클릭아님
        var $id = $("#login .input_box_01").val();
        var $pw = $("#login .input_box_02").val();
    

        if($id.trim() != ""){ //아이디값이 존재할때 (공란이 아님)
            console.log("아이디 값은 있어요");
            if($pw.trim() != ""){ // 패스워드 값이 존재할 떄 
            }else{ // 패스워드 값이 존재하지 않을 때 
                console.log("패스워드값이 없어요")
                $("#login .input_text_01").html("").hide();
                $("#login .input_text_02").html("Please enter your Password").show();
                $("#login .input_box_02").focus();
                return false;
            }
        }else{ // 아이디값이 존재하지 않을때 
            console.log("아이디 값은 없어요");
            $("#login .input_text_01").html("Please enter your ID").show();
            $("#login .input_box_01").focus(); 
            return false;
        }
    });




});