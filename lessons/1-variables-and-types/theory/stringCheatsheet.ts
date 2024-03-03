/* Declare a string */      const name: string = "Adam";
/* Concatenate string */    "My name is " + "Adam";
/* Template string */       `My name is ${name}`;
/* Select character */      name[0] // first character 'A'
/* Get character at */      name.at(-1) // last character 'm'
/* String length */         name.length // returns 4
/* Slice string */          name.slice(1, 3) // returns 'da'
/* Trim the whitespace */   "  Alice   ".trim() // returns "Alice"
/* To lower case */         "ALL CAPS".toLowerCase() // returns "all caps"
/* To upper case */         "string".toUpperCase() // returns "STRING"
/* Includes substring */    "My name is Bob".includes("Bob") // returns true
/* Index of substring */    "My name is Bob".indexOf("Bob") // returns 11


export default [name]
