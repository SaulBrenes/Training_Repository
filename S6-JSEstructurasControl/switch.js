let v = ".",
  print = "";

switch (v) {
  case "a":
  case "A":
  case "e":
  case "E":
  case "i":
  case "I":
  case "o":
  case "O":
  case "u":
  case "U":
    print = `${v} es vocal`;
    break;

  default:
    print = `${v} no es vocal`;
    break;
}

console.log(print);
