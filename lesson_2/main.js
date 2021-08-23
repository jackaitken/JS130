class DivideByZero extends Error {}

function div(first, second) {
  if (second === 0) {
    throw new DivideByZero('Zero division');
  }
  return first / second;
}

function divideOneBy(divisor) {
  try {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DivideByZero) {
      console.log(`${error.message} ignored`);
    } else {
      throw error.message;
    }
  }
}

divideOneBy(1); // 1
divideOneBy(0); // Zero division ignored
