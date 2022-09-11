const { randomInt } = await import("node:crypto");

const id = randomInt(100);
console.log(`Your random ID is: ${id}`);
