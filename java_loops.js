//conditional flow statement
    //1.control flow
    //2.looping
    //3.jump

//var age = 56;
//if(17<age && age<54){
    //console.log("Thank You");
    //}else if(age>54 && age<61){
    //console.log("Thank you for your valid time!")
    //}else{
    //console.log("You are not eligible");
    //}

//nested if
//var age = 5;
//if(18<=age && age<=60){
    //if(age>=55){
        //console.log("Thank you for your valid time!");
    //} else{
        //console.log("Thank you!");
    //}
//}else{
    //console.log("you are not eligible");
//}

//switch (2) {
    //case 1:
        //console.log("case1")
        //break;
    //case 2:
        //console.log("case2")
        //break;
    //case 3:
        //console.log("case3")
        //break;

    //default:
       // break;
//}
//let mark=50;
//switch (true) {
    //case mark<50:
        //console.log("Fail");
        //break;
    //case mark>=50:
        //console.log("Pass");
       // break;
    //default:
        //console.log("Invallid");
        //break;
//}

//looping

//for (var i=0;i<3;i++){
    //console.log(i);  
//}
//console.log(i);

//for(var i=10;i<100;i+=10){
    //console.log(i);
    //}

    //for (var i=0;i<6;i++) {
        //console.log(i);
     //}
     //console.log(i);

   //for(var i=2;i<10;i++){
    //if(i%2==0)
    //console.log(i);
   //}  

   //nested for loop-(pattern creating)

   //let star= "";
   //for ( var row=0;row<5;row++){
    //for (let col = 0; col < 5; col++){
        //star+="*"
    //}
    //console.log(star);
    //star ="";     
   //}

   //while loop
   //var on = true; 
   //while(on){
    //console.log("executed")
   //}
   //to execute false condition
   //var on =true;
   //while(on){
        //console.log("executed");
        //on = false;
    //}
    // to increase no of executions
    //var on =true;
    //let count = 1;
   //while(on){
        //console.log("executed"); 
        //if(count == 3){
            //on=false; or break; --use on false or break abnyone in the code to execute 3 times
        //}
        //console.log(count++);
    //}
    //jump-continue statement
    //var on = true;
    //let count = 1;
    //while(on){
        //console.log("executed");
        //console.log(count);
        //if(count == 3){
            //continue;
        //}
        //count++;
    //}
    //jump-break statement
    var on = true;
    let count = 1;
    while(on){
        console.log("executed");
        console.log(count);
        if(count == 3){
            break;
        }
        count++;
    }

    //do-while loop
    //var on = true;
    //let count  
    //do {
        //console.log("execute")
    //} while(on)
