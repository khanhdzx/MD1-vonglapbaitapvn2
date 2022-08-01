
// bài tập về nhà b1
// gọi id bên thẻ HTML
// let vip1 = 1;
// let vip2 = 100;
// function vip (){
//     if (vip1<vip2){
//      document.getElementById('vip2').innerText = vip1;
//         vip1++;
//         setTimeout(vip,100);
//     }else {
//         alert('Đã hoàn thành');
//     }
// }
// vip();

// bài tập vn 2
// let v1 = 1;
// let v2 = 2;
// document.writeln(v1);
// document.writeln(v2);
// let v3;
// for (let i = 0; i < 18; i++) {
//     v3 = v2 + v1;
//     document.writeln(v3);
//     v1 = v2;
//     v2 = v3;
// }


// // bài tập vn 3
// // let v1 = 1;
// // let v2 = 1;
// // while (true){
// //     v3=v1+v2;
// //     v1=v2;
// //     v2=v3;
// //     if (v3%5 == 0){
// //         document.write('Số đầu tiên trong dãy fibonacci chia hết cho 5 là : ',v3);
// //         break;
// //     }
// // }
//
// // bài tập vn 4
// // let a = 1;
// // let b = 1;
// // let c;
// // let s = a+b;
// // for (let i = 0;i<18;i++){
// //     c =b+a;
// //     a=b;
// //     b=c;
// //     s=+c;
// //     console.log(s)
// // }
// // document.write("Tồng 20 số đầu tiên trong dãy fibonacci là : ",s )
//
// // bài tập vn5
// // let vip = 0;
// // let a= 1;
// // let s =0;
// // while (vip<30){
// //     if(a%7==0){
// //         vip++;
// //         console.log(vip);
// //         s=+a;
// //     }
// //     a++;
// //     console.log('====',vip);
// // }
// // document.write(s);
//
// // bài tập vn6
// // for (let i = 0;i<100;i++){
// //     if (i%3 ==0 && i%5==0){
// //         document.write('FizzBuzz'+'<br>');
// //     }else if(i%3==0){
// //         document.writeln('Fizz'+'<br>');
// //     }else if (i %5==0){
// //         document.write('Buzz'+'<br>');
// //     }
// // }
//
// // bài tập vn 7
// let a = Number(prompt("Tính gai thừ số nguyên dương"));
// let b = 1;
// if ( a<0){
//     alert("không tính được số âm")
// }else {
//     for (let i = 1; i <=a;i++){
//         b  *=i;
//     }
//     alert("giai thừa số nguyên dương là "+ b);
// }






// bài tập trên lớp
// bài tập 1
// let a = Number(prompt("Nhập số bất kỳ"));
// let b= 0;
// for (let i= 1;i<= a ; i++){
//     b= b+i;
// }
// alert("A =" + b)


// bài tập 2

// let a = Number(prompt("Nhập số bất kỳ"));
//  let b= 1;
//  for (let i= 1;i<= a ; i++){
//      b= b*i;
//  }
//  alert("B =" + b)


// bài tập 3
// let a = Number(prompt("Nhập số bất kỳ"));
//  let b= 0;
//   for (let i= 1;i< a ; i++){
//     b= b+1/i;
//   }
//   alert("C =" + b)


// bài tập 4
// let n = Number(prompt(`Nhập vào 1 số n`));
// if (n%1===0) {
//     alert(`${n}: là số nguyên`)
// }
// else{
//     alert(`${n}: là không phải số nguyên `)
// }

// let a = 1;
// for(let i=2; i<=n; i++){
//     a = a+(1/(i-1)*(1/i))
// }
// console.log(`N = ${a}`);

// bài tập 5
//         let yeuTrang =''
//         for (let i=1; i<=10 ;i++) {
//         yeuTrang += ''
//             for (let x = 2; x <= 10; x++) {
//         yeuTrang += '<br>' + x + 'x' + i + '=' + x * i + '<br>'
//     }
//         yeuTrang += '<br>'
//     }
//         document.write(yeuTrang)
//         for (let i=1; i<=10 ;i++){
//             for (let x=2 ;x<=10 ; x++){
//     }
//     }

