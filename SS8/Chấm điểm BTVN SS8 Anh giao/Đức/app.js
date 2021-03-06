//Bai 1
function bai1(){
    let user = {};
    user.name = "David";
    user.surname = "Xuan";
    user.name = "Cafedev";
    delete user.name; 
}
bai1();

//Bai 2
function bai2(){
    let schedule ={};
    let txt = ""
    function isEmpty(object){
      for(let x in object){
        txt = txt + object[x];
      }
      if(txt === ""){
        return true;
      }
      else{
        return false;
      }

    }
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false

}
bai2();

//Bai 3
function bai3(){
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }  
  var total = 0;
   function sum(object){
     for(let x in object){
       total = total + object[x];
     }
     return total;
   }
   alert(sum(salaries));
}
bai3();

//Bai 4:
function bai4(){
  let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
  };
  function multiplyNumeric(obj){
    for(let x in obj){
      if(typeof(obj[x]) === "number"){
        obj[x] = obj[x] * 2;
      }
    }
    return JSON.stringify(obj);
  }
  alert(multiplyNumeric(menu));
}
bai4();

//Bai 5: ? returns nothing
function bai5(){
  function makeUser() {
    return {
      name: "David",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?
}
bai5();

//Bai 6: number-input only
function bai6(){
  var a = prompt("num1:");
  var b = prompt("num2:");
  var num = {};
  var comp = {
    read: function(){
      num = {
        num1 : a,
        num2 : b
      }
    },
    sum : function(){
      var sum = 0;
      for(let x in num){
          sum = sum + Number(num[x]);
      }
      alert (sum);
    },
    mul : function(){
      var mul = 1;
      for(let x in num){
        mul = mul * num[x];
      }
      alert (mul);

    }
  }
  comp.read();
  comp.sum();
  comp.mul();

}
bai6();

//Bai 7:    (method chaining)
function bai7(){
  let ladder = {
    step: 0,
    up : function() {
      this.step++;
      return this
    },
    down : function() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
    
  };
   ladder.up().down().up().showStep();
   
}
bai7();

//Bai 8 
function bai8(){
 function A(language){
    this.language = language;
    return this.language;
  }  
  function B(language){
    this.language = language;
    return this.language;
  }
  
  let a = new A("english");
  let b = new B("english");
  alert(a == b); //false
  alert(new A() == new B()); 
  // ==> Hai h??m A v?? B d?? c?? c??ng lo???i, c??ng argument v?? c??ng c?? definition gi???ng nhau c??ng kh??ng th??? b???ng nhau, c??? constructor function c??ng nh?? v???y
  // C??c objects t???o t??? 2 h??m(constructor function) ho??n to??n gi???ng t??? c??? definition, argument.. n???u 2 objs c?? c??? properties v?? values nh?? nhau th?? c??ng ko b???ng nhau
  // Tuy nhi??n, n???u convert c??? 2 h??m ra string(in ra definition) ho???c x??t k???t qu??? tr??? v??? c???a ch??ng (n???u c??) th?? c?? th??? === nhau ?
}
bai8();

//Bai 9 (Hnhu gi???ng b??i 6 )
//Bai 10
function bai10(){
  function Accumulator(startingValue){
    this.firstNum= Number(startingValue);
    this.value = 0;
    this.total = 0
    this.read = function(add){
      this.total = this.total + Number(add);
      this.value =   this.firstNum + this.total;
    };
  }
  let num = Number(prompt("??i???n startingValue: "));
  let times = Number(prompt("??i???n s??? l???n mu???n th??m b???t: "));
  let accumulator = new Accumulator(num);
  let total = 0;
  for(let i = 0 ; i < times ; i++){
    accumulator.read(prompt("Th??m b???t bao nhi??u?"));
  }
  alert(accumulator.value);
}
bai10();