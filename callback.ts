// Callback

function parentFun(funs:()=> void){
    console.log("Parent Function");
    funs();
};

function childFun(){
    console.log("Child Function");
};

parentFun(childFun);

// ConCurrancy Using Callback

function washing(callback: () => void) {
  console.log("Washing started.....");
  setTimeout(() => {
    console.log("Washing End.....");
    callback();
  }, 5000);
}

function soaking(callback: () => void) {
  console.log("Soaking started.....");
  setTimeout(() => {
    console.log("Soaking End.....");
    callback();
  }, 3000);
}

function daying() {
  console.log("Daying started.....");
  setTimeout(() => {
    console.log("Daying End.....");
  }, 2000);
}

washing(() => {
  soaking(() => {
    daying();
  });
});



