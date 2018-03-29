function getObjFromNum( num ) {
    var obj = {};
    if ( num < 1 || num > 999 || isNaN( num )) {
        console.log( 'Ошибка. Введите число от 1 до 999' );
        return obj;
    }
    else {
        obj[ 'едининцы' ] = num % 10;
        obj[ 'десятки' ] = ( num - obj[ 'едининцы' ]) % 100 / 10;
        obj[ 'сотни' ] = ( num - obj[ 'едининцы' ] - obj[ 'десятки' ] * 10 ) % 1000 / 100;
        return obj;
    }
}
console.log( getObjFromNum( 42 ));