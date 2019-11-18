$(function () {
 
    var $rateYo = $(".rateYo").rateYo({"rating": 0.7});
   
    /* set the option `onChange` */
    $rateYo.rateYo("option", "onChange", function () {
        $(this).next().text(rating);
    });
   
    /* set the option `multiColor` to show Multi Color Rating */
    $rateYo.rateYo("option", "multiColor", true);
  });