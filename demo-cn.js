/*
题目描述
我给予你一串数字, a_1, a_2, ...., a_n
请你输出第p个数字以及原来的第l个到第r个数字组成的一串新的数字

Input
第一行是四个数字 n, p(1 <= p <= n), l, r(1 <= l <= r <= n);
第二行是n个数字 a_1, a_2, a_3, ..., a_n;

Output
第一行输出第p个数字
第二行输出第l个到第r个数字组成的一串新的数字

Sampl Input
6 2 3 5
4 7 3 6 9 10

Sampl Output
7
3 6 9
*/
var line;
//读入数据第一行 "6 2 3 5",使用 'while' 忽略空格或是空文件
while(line = readline()){
  var arr = line.split(' '); //分割字符串"6 2 3 5"
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
  print(arr[p - 1]); // 输出第p个数字, print输出末尾自带换行
  for(var i = l - 1; i < r; i++){
    if(i == l - 1){
      write(arr[i]); // write末尾不带换行
    }else{
      write(' ' + arr[i]);
    }
  }
  write('\n');
}
