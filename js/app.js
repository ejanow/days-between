$(document).ready(function(){

  $('button#inpt').click(function(){

    const MS_IN_DAY = 86400000;

    var today = new Date().getTime();
    var inpt = $('input[name=date]').val();
    var inptInMS = new Date(inpt).getTime();

    var daysBetween = Math.abs(Math.ceil((inptInMS - today) / MS_IN_DAY));

    var plural;
    daysBetween > 1 ? plural = ' are: ' : plural = ' is: ';

    var result = "The number of days between today and " +
                 inpt + plural + daysBetween;
    $('h3#result').text(result);

  });

});
