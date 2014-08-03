F.speed = 100;

QUnit.test("tab selecting functionality", function(){
  wizard.setup("omg");
  F("#last").click(function(){
    equal(wizard.nowTab(), "Settings", "Is it on the last tab?");
  });
  
  F("#first").click(function(){
    equal(wizard.nowTab(), "Home", "Is it on the first tab?");
  });  
  
  F("#first").click(function(){
    equal(wizard.step(), 0, "Is the Wizard's index at first?");
  });    
  
  F("#last").click(function(){
    equal(wizard.step(), 3, "Is the Wizard's index at last?");
  });      
  
  F("#first").click();
  F("#next").click(function(){
    equal(wizard.step(), 1, "Went to the next tab?");
  });    
  
  F("#back").click(function(){
    equal(wizard.step(), 0, "Went to the next tab?");
  });     
  
  F("#second").click(function(){
    ok(!F("#back").hasClass("disabled"), "Is button active?");
  });       
  
});
