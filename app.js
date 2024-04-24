//Ques 1,2:-

var arr1=['0'+'1'+'2'+'3'+'<br>']
document.write(arr1)
var arr2=['1'+'0'+'1'+'2'+'<br>']
document.write(arr2)
var arr3=['2'+'1'+'0'+'1'+'<br>']
document.write(arr3+'<br>')

//Ques 3:-
for (var i=1;i<=10;i++){
    document.write(i+'<br>')
}

//Ques 5:-

// document.write('<h2>Multiplication Table  user</h2>')
// var tableNumber=prompt('enter your Table Number')
// var startNumber=prompt('enter your Start Number')
// var endNumber=prompt('enter your Ending Number')

// for(var i=startNumber;i<=endNumber;i++){
//     document.write(tableNumber+' x'+i+' ='+tableNumber*i+'<br>')
// }
//Ques 4:-
document.write('<h2>Fruits Program</h2>')

var Fruits=['apple','mango','banana','watemelon','mango']
for(var i=0;i<Fruits.length;i++){
    document.write(Fruits[i]+'<br>')
}
for(var i=0;i<Fruits.length;i++){
    document.write('Element at index '+i+' is '+Fruits[i]+'<br>')
}

//Ques 6:-
// document.write('<h2>Series</h2>'+'<br>')
document.write('<h3>Counting:</h3>')
for(var i=1;i<=15;i++){
    document.write(i+',')
}   
document.write('<h3>Reverse Counting:</h3>')
for(var i=10;i>=1;i--){
    document.write(i+',')
}
document.write('<h3>Even:</h3>')

for(var i=0;i<=20;i=i+2){
    document.write(i+',')
}
document.write('<h3>Odd:</h3>')

for(var i=1;i<20;i=i+2){
    document.write(i+',')
}
document.write('<h3>Series:</h3>')

for(var i=2;i<=20;i=i+2){
    document.write(i+'k'+',')
}
// document.write('<h2>Bakery:-</h2>')
// var Bakery = ['cake, apple pie, cookie, chips, patties']
// var items=prompt('Welcome to ABC Bakery.What do you want to order sir/mam?')
// for(var i=0;i<=4;i++){
//     if(Bakery[i] === items){
//         document.write(items+' is available at '+' index '+i+'in our Bakery')
//         break
//     }
//     else{
//         document.write('We are sorry.')
//         break

//     }
// }

//Ques 9:-
document.write('<h2>Largest Number</h2>')
var largestNum = [24, 53, 78, 91, 12];
document.write(largestNum+'<br>')
var max = Math.max(...largestNum);
document.write("The largest number in the array is: " + max);
//Ques 10:-
document.write('<h2>Smallest Number</h2>')
var SmallestNum = [24, 53, 78, 91, 12];
document.write(SmallestNum+'<br>')
var max = Math.min(...SmallestNum);
document.write("The Smallest number in the array is: " + max);



