const main = () => {
  // Generate an array of 10 random numbers between 1 and 1000
  const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 1000) + 1
  );

  // Calculate the sum of all numbers in the array
  const sum = randomNumbers.reduce((acc, num) => acc + num, 0);

  // Display each number in the array
  console.log(`Random numbers: [${randomNumbers.join(", ")}]`);
  // Display the sum of all numbers in the array
  console.log(`Sum: ${sum}`);
};

main();
