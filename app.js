//дэлгэцтэй ажиллах контроллер
var uiController= (function(){
                                var DOMstrings = {
                                    inputType: ".add__type",
                                    inputDescription:  ".add__description",
                                    inputValue: ".add__value",
                                    addBtn: ".add__btn"
                                };
                                return {
                                        getInput: function()
                                                {
                                                    return{
                                                        type: document.querySelector(DOMstrings.inputType).value,
                                                        description: document.querySelector(DOMstrings.inputDescription).value,
                                                        value: document.querySelector(DOMstrings.inputValue).value
                                                    };
                                                },
                                                getDOMstrings: function()
                                                {
                                                    return DOMstrings;
                                                }
                                        };
                            })();

//санхүүтэй ажиллах контроллер

var financeController = (function(){

var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};

var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};

var data = {
    Items: {
        inc: [],
        exp: []
    },
     totals: {
        inc:200,
        exp:500
     }
};
return{
    addItem:  function (type, desc,val) {
       var Item, id;
        if (data.Items[type].length === 0) id= 1;
        else {
           id =  data.Items[type][data.Items[type].length - 1].id + 1;
        }
      
       
       if( type=== "inc" ){
        Item= new Income(id,desc,val);
       } else {
        Item= new Income(id,desc,val);
       }

data.Items[type].push(Item);

    },
    seedata: function(){
        return data;
    }
}


})();

//программын холбогч контроллер

var appController= (function(uiController,financeController){
    var ctrlAddItem = function(){
        var input = uiController.getInput();
        financeController.addItem( input.type, input.description, input.value);
    };

    var setupEventListeners = function(){
        var DOM = uiController.getDOMstrings();
        document.querySelector(DOM.addBtn).addEventListener('click',function(){ctrlAddItem()
        });
        document.addEventListener("keypress",function(event) {
                if(event.keyCode === 13|| event.which ===13) {
                    ctrlAddItem();
                }
            });
        };
        return {
            init: function(){
                console.log("programm started");
                setupEventListeners();
            }
        }
    })(uiController,financeController);
    appController.init();
