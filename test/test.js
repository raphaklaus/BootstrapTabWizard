F.speed = 200;

QUnit.test("tab selecting functionality", function(){
  wizard.setup("omg");
  F("#last").click(function(){
    equal(wizard.nowTab(), "Settings", "Is it on the last tab?");
  });
  
  F("#first").click(function(){
    equal(wizard.nowTab(), "Home", "Is it on the first tab?");
  });  
  
});
