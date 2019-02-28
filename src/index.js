module.exports = function getZerosCount(number, base) {

  let num = number;
  let div;
  let pow = 0;
  let min = 0;
  let count;
  
  while(base > 1){

    div = max_div(base);
    pow = get_pow_of_div(div, base);
    count = count_in_fact(div, num);
    base/= parseInt(div ** pow);
  
    if(count/pow < min || min == 0){
      min = parseInt(count/pow);
    }

  }
  return min;
}

/* returns count of occurence of 'n' in 'num!' factorization */
function count_in_fact(n, num){
  let count = 0;
  while(num >= n){
      count += parseInt(num/n);
      num /= n;
 }
 return  count;
}

/* returns maximum divider of 'number' */
function max_div(number){
  if(number == 1){
    return 1;
  }
  if(is_simple(number)){
    return number;
  }
  let i;
  for(let i = 2; i < number / 2 + 1; i++){
      if(number % i == 0 && is_simple(i)){
          max = i;
      }
  }
  return max;
}

/* checks if 'number' is simple */
function is_simple(number){
  for(let i = 2; i < number / 2 + 1; i++){
    if(number % i == 0){
      return false;
    }
}
return true;
}

/* returns power of divider 'd' in factorization of 'number' */
function get_pow_of_div(d, number){
  let p;
  number = number/d;
  for(p = 1; number%d == 0; number/=d, p++);
  if(p == 1){
    return p;
  }
  return p;
}