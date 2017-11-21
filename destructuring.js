function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}

const { name: firstName, state: Orlando } = generateObj();

console.log(firstName, Orlando);