/*

The programme requests a user to input name
User is asked to chek all multiple choice questions given, in form of input buttons
Each button checked, the value is stored
All answers are then passed through an agorithm, which then determines a suitable vacation destination

*/

$(document).ready(function() {
  $(".form-survey").on("submit", function(event) {
    event.preventDefault();

  //prevents the form from being submitted and moves on to the next code

    var array = [];
    var count_one = [];
    var count_two = [];
    //Array to store input values aftere checking multiple choice questions


    var age = Number($(this).find("input:radio[name='age']:checked").val());
    if (age===1){
      count_one.push(age);

    }
    else {
      count_two.push(age);

    }
    // stores the value of the input of the age bracket

    var gender = Number($(this).find("[name='gender']:checked").val());
    if (gender===1){count_one.push(gender);}
    else  {count_two.push(gender);}
    // store the value of the input of sex



    var contactChannel= Number($(this).find("[name='contact_channel']:checked").val());
    if (contactChannel===1){count_one.push(contactChannel);}
    else { count_two.push(contactChannel);}
    // stores value of the input of contact channel


    var travelTimes = Number($(this).find("[name='travelTimes']:checked").val());
    if (travelTimes===1){count_one.push(travelTimes);}
    else { count_two.push(travelTimes);}
    // store value of the input of the number of travel times



    var incomeLevel = Number($(this).find("[name='incomeLevel']:checked").val());
    if (incomeLevel===1){count_one.push(incomeLevel);}
    else  {count_two.push(incomeLevel);}
    // store the value of the input of income level



    var activity = Number($(this).find("[name='activity']:checked").val());
    if (activity===1){count_one.push(activity);}
    else  {count_two.push(activity);}

    //All questions are checked, now on to the deciding mode.


    if ((count_one.length) > (count_two.length)) {
      window.location.href = "seychelles.html";
      //If input buttons from occurances in value 1 are greater than those in value 2, re-direct user to destination
    }
     else if ((count_one.length) < (count_two.length)) {
      window.location.href = "uganda.html";
    }
    else if((count_two.length) === (count_one.length)) {
      window.location.href = "barbados.html";
    }
  })

  });
