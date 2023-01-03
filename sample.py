
maxNum = int(input("Max num: "));

fizzNum = int(input("Fizz num: "));
buzzNum = int(input("Buzz num: "));

for (i = 0; i < maxNum; i++) {
  
  if (i % fizzNum == 0 && i % buzzNum == 0) {
    print("Fizzbuzz");
  } else if (i % fizzNum == 0) {
    print("Fizz");
  } else if (i % buzzNum == 0) {
    print("Buzz");
  } else {
    print(i);
  }
  
}
