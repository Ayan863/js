// 1) for ile quracaginiz task
// *
// **
// ***
// ****
// *****
// let a=""
// for(let i=0;i<6;i++){
//     for(let j=0;j<i;j++){
//         a+="*"
//     }
//     a+="\n";

// }
// console.log(a);

// 2) for ile quracaginiz task
// *****
// ****
// ***
// **
// *
// let a=""
// for(let i=5;i>0;i--){
//     for(let j=0;j<i;j++){
//         a+="*"
//     }
//     a+="\n";

// }
// console.log(a);

//3) toplayan bolen vuran  cixan parametrli  js funksiyalarin yaradin
let a=Number(prompt())
let b=Number(prompt())
function add(){
    return a+b
}
function sub(){
    return a-b
}
function mul(){
    return a*b
}
function div(){
    return a/b
}
console.log("a =",a+"\nb =",b)
console.log("a+b =",add())
console.log("a-b =",sub())
console.log("a*b =",mul())
console.log("a/b =",div())

//4) Ədədin faktorialını hesablayan funksiyanı yazın. 
// Funksiya n ədədini götürməli və n deməlidir! Qaytarmalıdır (n faktorial)
//  For və ya while loopundan istifadə edin.
// let n=prompt()
// let f=1
// // for(let i=1;i<=n;i++){
// //     f*=i;
// // }

// while(n!=0){
//     f*=n;
//     n--;
// }
// console.log(f)


//5) Massivdə ən böyük dəyəri tapan funksiyanı yazın. 
// Funksiya ədədlər massivi götürməli və massivdəki ən böyük ədədi qaytarmalıdır.
//  Bunu for və ya while loopundan istifadə edərək həll edin.
// let newArray= [10,1,2,3,8,9,99,77,44,5];
// function find(){
//     maks=newArray[0]
//     for(let i=0;i<newArray.length;i++){
//         if(maks<newArray[i]){
//             maks=newArray[i]
//         }
//     }
//     return maks
// }

// console.log(find());