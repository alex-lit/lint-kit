const arr = [1, 2, 3];

arr.forEach((item) => item);

/**
 *
 */
bar();

/**
 *
 */
function foo() {
  bar();

  return 2;
}

foo();

/**
 *
 */
function bar() {
  return 2;
}
