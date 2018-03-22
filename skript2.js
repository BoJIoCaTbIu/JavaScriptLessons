1)
var a = 1, b = 1, c, d;
// префиксная форма сначала увеличивает a до 2, а потом возвращает
c = ++a; alert(c); // 2
// постфиксная форма увеличивает, но возвращает старое значение
d = b++; alert(d); // 1
// сначала увеличили a до 3, потом использовали в арифметике
c = (2+ ++a); alert(c); // 5
// увеличили b до 3, но в этом выражении оставили старое значение
d = (2+ b++); alert(d); // 4
// каждую переменную увеличили по 2 раза
alert(a); // 3
alert(b); // 3

2)
x = 5.
Оператор присваивания возвращает значение, которое будет записано в переменную, например:
var a = 2;
alert( a *= 2 ); // 4
x = 1 + 4 = 5.

3)
var a = +prompt( 'Введите число a' ),
    b = +prompt( 'Введите число b' ),
if ( isNaN(a) || isNaN(b) ) {
    alert( 'Необходимо ввести числа!' );
}
else if ( a >= 0 && b >= 0 ) {
    alert( a - b );
}
else if ( a < 0 && b < 0) {
    alert( a * b );
}
else {
    alert( a + b );
}
alert( result );

4)
var a,
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function input_a () {
    a = prompt('Введите число от 1 до 15');
    if (a !== null && (a < 1 || a > 15 || isNaN(a))) {
        input_a();
    }
}
input_a();
switch(a) {
    case 1:
        alert(arr);
        break;
    case 15:
        alert(a);
        break;
    null:
        break;
    default:
        alert(arr.slice(a-1));
}

5)
function plus ( a, b ) { //Сложение 
    return a + b;
}
function minus ( a, b ) { //Вычитание
    return a - b;
}
function delenie ( a, b ) { //Деление
    return a / b;
}
function umnogenie ( a, b ) { //Умножение
    return a * b;
}

6)
function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return plus ( arg1, arg2 ); 
            break; 
        case '-': 
            return minus ( arg1, arg2 ); 
            break; 
        case '/': 
            return delenie ( arg1, arg2 ); 
            break; 
        case '*': 
            return umnogenie ( arg1, arg2 ); 
            break; 
    } 
} 

7)

/*
null — это литерал и ключевое слово языка, которое представляет собой отсутствие какого-либо объекта. Другими словами, null указывает «в никуда». 
 Абсолютно неизменен, не имеет свойств и методов и не способен их иметь. Фактически, попытка обратиться к какому-нибудь свойству, или присвоить его, приведёт к ошибке TypeError. 
Это самое отсутствие значения приводит к тому, что он считается ложным, в том смысле, что они приводится к false если используется в качестве условия, например, в конструкции if.
А если сравнить null другими ложными значениями при помощи оператора нестрогого сравнения (==), то окажется, что он не равен ничему, кроме самого себя.
*/

8)
function power( val, pow ) { 
    if ( pow === 0 ) { 
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}