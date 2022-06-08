const spy = chai.spy()

function receivesAFunction(spy){
spy();
}

function returnsANamedFunction(){
  const fn = function(){}
    return fn;
  }

  function returnsAnAnonymousFunction(){
    return function(){}
  }