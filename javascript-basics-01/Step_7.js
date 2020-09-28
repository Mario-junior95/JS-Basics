var shoe = prompt("What is your shoe size :");
var birth_year = prompt("What is your birth year");
function result (shoe , birth_year){
    shoe *=2;
    shoe+=5;
    shoe*=50;
    shoe-=birth_year;
    shoe +=1766;
    return shoe;
}

alert(result(shoe , birth_year));