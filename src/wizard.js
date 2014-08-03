(function(){
  var wizard = {
    wizardId: "",
    totalSteps: 0,
    
    setup: function(elementId){
      wizardId = elementId;
      this.totalSteps = $("#" + wizardId).children().length;
    },
    
    nowTab: function(){
      return $("#" + wizardId + " > li.active").text()
    },    
    
    firstTab: function(){
      return $("#" + wizardId + " > li").first().text()
    },
    
    step: function(){
      var counter = 0;
      var tabList = $("#" + wizardId + " > li");
      
      for (var i=0; i < tabList.length; i++){
        if (!$(tabList[i]).hasClass("active"))
          counter++;
        else
          break;
      }
      
      return counter;
    },
  
    nextTab: function(){
      return $("#" + wizardId + " > li.active").next().text()
    },   
    
    priorTab: function(){
      return $("#" + wizardId + " > li.active").prev().text()
    },        
    
    lastTab: function(){
      return $("#" + wizardId + " > li").last().text();
    }
    
  };
  
  $("#next").on("click",function(){
    $("#" + wizardId + " > li.active").next().children().click();
    $("#back").removeClass("disabled");
    
    if (wizard.nextTab() == "")
      $(this).addClass("disabled");
  });  
  
  $("#back").on("click",function(){
    $("#" + wizardId + " > li.active").prev().children().click();
    $("#next").removeClass("disabled");
    if (wizard.priorTab() == "")
      $(this).addClass("disabled");
  });    
  
 window.wizard = wizard;
})();