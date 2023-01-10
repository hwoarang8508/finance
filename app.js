//дэлгэцтэй ажиллах контроллер
var uiController= (function(){

})();

//санхүүтэй ажиллах контроллер

var financeController = (function(){

})();

//программын холбогч контроллер

var appController= (function(uiController,financeController){

    var ctrlAddItem = function(){
    console.log('clicked...')
    }
 document.querySelector('.add__btn').addEventListener('click',function(){
   ctrlAddItem();
 })
document.addEventListener("keypress",function(event) {
    if(event.keyCode === 13|| event.which ===13) {ctrlAddItem()};
});


})(uiController,financeController);
