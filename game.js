"use strict";
        console.log('okok');
var cell= document.querySelector('.cell[data-i="1"]');
cell.onclick= function(){
    console.log("okkkkk:) ");
};
cell.onmouseenter= function(){
    this.innerHTML= "X ";
};
cell.onmouseleave= function(){
    this.innerHTML= "";
};
//jQuery
//$('.cell[data-i="2"]')
   // click(function(){
   //     console.log("okkkkk:) ");
   // })
   // .mouseenter(function(){
   //     $(this).HTML= "O";
   // })
   // .mouseleave(function(){
   //     $(this).HTML="";
   // })
   var cell= document.querySelector('.cell[data-i="2"]');
cell.onclick= function(){
    console.log("okkkkk:) ");
};
cell.onmouseenter= function(){
    this.innerHTML= "O ";
};
cell.onmouseleave= function(){
    this.innerHTML= "";
};
