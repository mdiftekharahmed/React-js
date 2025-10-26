function nice(name) {
  console.log("Nice to meet you, " + name + "!");
  console.log(`Nice to meet you, ${name}!`);
  console.log("Nice to meet you, ".concat(name, "!"));
}

nice("Alice");
