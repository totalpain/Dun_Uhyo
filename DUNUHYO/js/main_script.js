


function get_options_from_json() {
    


    $.getJSON( "./js/custom_opt.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        data_raw = data;
      })
      .done(function() { alert('loading complete!');});
}

function set_custom_options_list_each() {

    custom_option_all = data_raw;

    var custom_type_seleceted = $('#Custom_Type_id').find(":selected").val();
    var custom_where_selected = $('#Custom_where_id').find(":selected").val();
    var custom_where_selected_group = "bad";

    if (custom_where_selected === "upper" || custom_where_selected === "pants" || custom_where_selected === "shoulder" || custom_where_selected === "belt" || custom_where_selected === "shoes") {
        custom_where_selected_group = "armour";
    }
    else if (custom_where_selected === "arm" || custom_where_selected === "neck" || custom_where_selected === "ring") {
        custom_where_selected_group = "acc";
    }
    else if (custom_where_selected === "sub" || custom_where_selected === "stone" || custom_where_selected === "ear") {
        custom_where_selected_group = "spec";
    }
    else
    {
        alert("값을 입력해주세요.");
    }

    console.log(custom_where_selected_group)

    $("#Custom_Option1").empty();
    $("#Custom_Option2").empty();
    $("#Custom_Option3").empty();
    $("#Custom_Option4").empty();

    $("#Custom_Option1").append($("<option value='bad'>옵션을 골라주세요</option>"));
    $("#Custom_Option2").append($("<option value='bad'>옵션을 골라주세요</option>"));
    $("#Custom_Option3").append($("<option value='bad'>옵션을 골라주세요</option>"));
    $("#Custom_Option4").append($("<option value='bad'>옵션을 골라주세요</option>"));

    for(var i = 0; i < custom_option_all["length"]; i++)
    {
        if((custom_option_all.custom_where[i] === custom_where_selected && custom_option_all.custom_type[i] === custom_type_seleceted)
         || (custom_option_all.custom_where[i] === custom_where_selected && custom_option_all.custom_type[i] === "all")
         || (custom_option_all.custom_where[i] === custom_where_selected_group && custom_option_all.custom_type[i] === "all"))
         {
            $("#Custom_Option1").append($('<option>', {
                value: custom_option_all.custom_value[i],
                text: custom_option_all.custom_opt[i].toString()
            }, '</option>'));    

            $("#Custom_Option2").append($('<option>', {
                value: custom_option_all.custom_value[i],
                text: custom_option_all.custom_opt[i].toString()
            }, '</option>'));    
 
            $("#Custom_Option3").append($('<option>', {
                value: custom_option_all.custom_value[i],
                text: custom_option_all.custom_opt[i].toString()
            }, '</option>'));    

            $("#Custom_Option4").append($('<option>', {
                value: custom_option_all.custom_value[i],
                text: custom_option_all.custom_opt[i].toString()
            }, '</option>'));    
        }
    }

    return("success");
}


function event_check_customisgood() {
    var custom_value1 = $('#Custom_Option1').find(":selected").val();
    var custom_value2 = $('#Custom_Option2').find(":selected").val();
    var custom_value3 = $('#Custom_Option3').find(":selected").val();
    var custom_value4 = $('#Custom_Option4').find(":selected").val();
    
    var checksole = [custom_value1, custom_value2, custom_value3, custom_value4];
    var checkelemental= [custom_value1, custom_value2, custom_value3, custom_value4];
    var checksole_good = [custom_value1, custom_value2, custom_value3, custom_value4];
    var issoledupe = false;
    var iselementdupe = false;
    var issolegooddupe = false;

    for (var i = 0; i < checksole.length; i++) {
        if (checksole[i] == "sole")
        {
            for (var j = i; j < checksole.length; j++)
            {
                if (checksole[j] == "sole")
                {
                    issoledupe = true;
                }
            }
        }
        if (checkelemental[i] == "elemental")
        {
            for (var j = i; j < checkelemental.length; j++)
            {
                if (checkelemental[j] == "elemental")
                {
                    iselementdupe = true;
                }
            }
        }
        if (checksole_good[i] == "sole_good")
        {
            for (var j = i; j < checksole_good.length; j++)
            {
                if (checksole_good[j] == "sole_good")
                {
                    issolegooddupe = true;
                }
            }
        }
    }

    var total_point = 0;

    if (custom_value1 == "good") {
        total_point += 1;
    }
    else if (custom_value1 == "decent") {
        total_point += 0.5;
    }
    else if (custom_value1 == "sole") {
        total_point += 0.5;
    }
    else if (custom_value1 == "elemental") {
        total_point += 0.5;
    }
    else if (custom_value1 == "sole_good") {
        total_point += 1;
    }

    if (custom_value2 == "good") {
        total_point += 1;
    }
    else if (custom_value2 == "decent") {
        total_point += 0.5;
    }
    else if (custom_value2 == "sole") {
        total_point += 0.5;
    }
    else if (custom_value2 == "elemental") {
        total_point += 0.5;
    }
    else if (custom_value2 == "sole_good") {
        total_point += 1;
    }

    if (custom_value3 == "good") {
        total_point += 1;
    }
    else if (custom_value3 == "decent") {
        total_point += 0.5;
    }
    else if (custom_value3 == "sole") {
        total_point += 0.5;
    }
    else if (custom_value3 == "elemental") {
        total_point += 0.5;
    }
    else if (custom_value3 == "sole_good") {
        total_point += 1;
    }

    if (custom_value4 == "good") {
        total_point += 1;
    }
    else if (custom_value4 == "decent") {
        total_point += 0.5;
    }
    else if (custom_value4 == "sole") {
        total_point += 0.5;
    }
    else if (custom_value4 == "elemental") {
        total_point += 0.5;
    }
    else if (custom_value4 == "sole_good") {
        total_point += 1;
    }
    

    if (issoledupe == true) {
        for (var i = 0; i < checksole.length; i++) {
            if (checksole[i] == "sole") {
                total_point -= 0.5;
            }
        }   
        total_point += 0.5;
    }

    if (iselementdupe == true) {
        for (var i = 0; i < checksole.length; i++) {
            if (checkelemental[i] == "elemental") {
                total_point -= 0.5;
            }
        }   
        total_point += 0.5;
    }

    if (issolegooddupe == true) {
        for (var i = 0; i < checksole.length; i++) {
            if (checksole_good[i] == "sole_good") {
                total_point -= 1;
            }
        }   
        total_point += 1;
    }

    

    return total_point;
}