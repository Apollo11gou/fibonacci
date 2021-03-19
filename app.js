"use strict";
const memo = new Map();
// 0 番目と 1 番目の答えは予め定義されているため記述
memo.set(0, 0);
memo.set(1, 1);
// もし Map が n をキーとした答えを持っていればその値をそのまま関数の値として返します。 そうでない場合は再帰関数を計算して値を求め、それを Map に格納した後、返す
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
