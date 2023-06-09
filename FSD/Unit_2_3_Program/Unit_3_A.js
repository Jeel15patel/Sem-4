import ch from "chalk"

import v from "validator"

console.log(ch.green("ABC"))

console.log(ch.bgWhite(ch.green("J")+ch.red("E")+ch.gray("E")+ch.yellow("L")))

console.log(ch.bgWhite(ch.green("P")+ch.red("A")+ch.gray("T")+ch.yellow("E")+ch.green("L")))

console.log(ch.bold("Bold"))

console.log(ch.underline("Underline"))

console.log(ch.underline("JE")+ch.bold("EL"))

console.log(v.isEmail("abc@gmail.com"))

console.log(v.isLowercase("acb"))

console.log(v.isCurrency("5000"))

console.log(v.isDecimal("50.10"))

console.log(v.isJSON(`{"Name":"Jeel","Age":22}`))