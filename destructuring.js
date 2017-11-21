function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}

const { name, state } = generateObj();

console.log(name, state);