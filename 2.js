var array = [12,34,45,23,6,78,54,90];
    // problem 2

    function res (){
        var result = array.filter((n) => n % 2 == 0)
        document.write(result);
    }
    res();