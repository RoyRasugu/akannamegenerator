var CC, YY, MM, DD, d, dayAttribute;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate(){
    var genders = document.getElementsByName("gender");
    if( document.zeForm.date.value == "" || isNaN( document.zeForm.date.value) ||
    document.zeForm.date.value.length != 2 || document.zeForm.date.value > 31 || document.zeForm.date.value <=0) {
       alert( "Please put a correct date!" );
       document.zeForm.date.focus() ;
       return false; 
    }
    else if( document.zeForm.month.value == "" || isNaN( document.zeForm.month.value) || 
    document.zeForm.month.value.length !=2 || document.zeForm.month.value > 12 || document.zeForm.month.value <=0) {
        alert( "Please put a correct month!" );
        document.zeForm.month.focus() ;
        return false;
    }
    else if( document.zeForm.year.value == "" || document.zeForm.year.value.length !=4 || document.zeForm.year.value > 2100 || document.zeForm.year.value <=1900) {
        alert( "Please put a correct year!");
        document.zeForm.year.focus() ;
        return false;
    }
    else if( genders[0].checked==false && genders[1].checked==false ) {
        alert("You must choose male or female");
        return false;
    }
    else{
        return true;
    }
}

function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) + ((26*(MM+1)/10) ) + DD)%7);
    console.log(d);
    return (Math.floor(d));
}

function getGender(){
    var genders = document.getElementByName("gender");
    if(genders[0].checked == true){
        var gender = "male";
    }
    else if(genders[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }
    switch(gender){
        case "male":
            if (dayValue == 0){
                alert("You were born on " +dayNames[0] + " and your akan name is " +maleNames[0]+".");
            }
            else if(dayValue == 1){
                alert("You were born on " +dayNames[1] + " and your akan name is " +maleNames[1]+".");
            }
            else if(dayValue == 2){
                alert("You were born on " +dayNames[2] + " and your akan name is " +maleNames[2]+".");

            }else if(dayValue == 3){
                alert("You were born on " +dayNames[3] + " and your akan name is " +maleNames[3]+".");
            }
            else if(dayValue == 4){
                alert("You were born on " +dayNames[4] + " and your akan name is " +maleNames[4]+".");
            }
            else if(dayValue == 5){
                alert("You were born on " +dayNames[5] + " and your akan name is " +maleNames[5]+".");
            }
            else if(dayValue == 6){
                alert("You were born on " +dayNames[6] + " and your akan name is " +maleNames[6]+".");
            }
            break;
            case "female":
                if (dayValue == 0){
                    alert("You were born on " +dayNames[0] + " and your akan name is " +femaleNames[0]+".");
                }
                else if(dayValue == 1){
                    alert("You were born on " +dayNames[1] + " and your akan name is " +femaleNames[1]+".");
                }
                else if(dayValue == 2){
                    alert("You were born on " +dayNames[2] + " and your akan name is " +femaleNames[2]+".");
                }
                else if(dayValue == 3){
                    alert("You were born on " +dayNames[3] + " and your akan name is " +femaleNames[3]+".");
                }
                else if(dayValue == 4){
                    alert("You were born on " +dayNames[4] + " and your akan name is " +femaleNames[4]+".");
                }
                else if(dayValue == 5){
                    alert("You were born on " +dayNames[5] + " and your akan name is " +femaleNames[5]+".");
                }
                else if(dayValue == 6){
                    alert("You were born on " +dayNames[6] + " and your akan name is " +femaleNames[6]+".");
                }
                break;
                default:
    }
}
function findName(){
    dayValue = calculateDayValue();
    getGender();
}
