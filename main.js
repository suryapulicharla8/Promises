// function myFirst(){
//     myDisplay('good morning')
// }
// function mysecond(){
//     myDisplay('good evening')
// }
// myFirst()
// mySecond()


// q1
function task1(){
    console.log('hello surya')
}
function task2(){
    console.log('bye surya')
}
task1();
task2();

// q2
function one(){
    console.log('1')
}
setTimeout(one,1000)

function two(){
    console.log('2')
}
setTimeout(two,1000)

function three(){
    console.log('3')
}
setTimeout(three,1000)

function four(){
    console.log('3')
}
setTimeout(four,1000)
function five(){
    console.log('3')
}
setTimeout(five,1000)

// Q3

function myfun1(){
    console.log(1)
}
setTimeout(myfun1,1000);
function myfun2(){
    console.log(2)
}setTimeout(myfun2,2000);

function myfun3(){
    console.log(3)
}setTimeout(myfun3,3000);

function myfun4(){
    console.log(4)
}setTimeout(myfun4,4000)

function myfun5(){
    console.log(5)
}setTimeout(myfun5,5000)

function myfun6(){
    console.log(6)
}setTimeout(myfun6,6000)

function myfun7(){
    console.log(7)
}setTimeout(myfun7,7000)







// Q 7
let myPromise=new Promise((resolve,reject){
    let x=10;
    if(x==10){
        resolve("it is equal to 10")
    }else{
        reject("not equal to 10")
    }
    
});
myPromise.then(resolve);
myPromise.catch(reject)


 




