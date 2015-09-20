/*
Description
I will give you a sequence, a_1, a_2, ...., a_n
You should get the p-th number and an new sequence from l to r;

Input
The first line is n, p(1 <= p <= n), l, r(1 <= l <= r <= n);
The second line is a_1, a_2, a_3, ..., a_n;

Output
The p-th number
a_l, a_l+1, ..., a_r

Sampl Input
6 2 3 5
4 7 3 6 9 10

Sampl Output
7
3 6 9
*/
var line;
//read the first line "2 3",add 'while' to ignore empty line
while(line = readline()){
  var arr = line.split(' '); //spilt the line
  var n = parseInt(arr[0]); // n = 6;
  var p = parseInt(arr[1]); // p = 2;
  var l = parseInt(arr[2]); // l = 3;
  var r = parseInt(arr[3]); // r = 5;
 
  line = readline();
  arr = line.split(' ');
  /*
  for(var i = 0; i < arr.length; i++){
  	arr[i] = parseInt(arr[i]);
  }
  */
  for(var i = 0; i < n; i++){
  	arr[i] = parseInt(arr[i]);
  }
  print(arr[p - 1]); // output the n-th number and the end of output will add a return
  for(var i = l - 1; i < r; i++){
    if(i == l - 1){
      write(arr[i]); // the end of output don't have a return
    }else{
      write(' ' + arr[i]);
    }
  }
  write('\n');
}
