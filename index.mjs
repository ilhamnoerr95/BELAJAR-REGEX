import chalk from 'chalk';

// REGULAR EXPRESSION WITH .TEST() hanya akan mengembalikan true/false
let a = "Hello World"
let regexA = /hello/i
let result = console.log(regexA.test(a))

// ALTERNATION ATAU OR
// PENCARIAN HURUF DENGAN LEBIH DARI 1 PATTERN 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let results = petRegex.test(petString);

// EXTRACT MATCHES
// EKSTRAKSI DAN MENEMUKAN KECOCOKAN STRING DENGAN MENGGUNAKAN MATCHES() METHODS
let stringM = "cocok gak?"
let stringR = /cocok/
let hasil = stringM.match(stringR)
console.log(hasil)

// FLAG "G" UNTUK MENEMUKAN VALUE LEBIH DARI 1 
// MENCARI POLA LEBIH DARI 1 
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
console.log(testStr.match(ourRegex));

// PENGGUNAAN WILDCARD PERIOD 
// PENGGUNAAN . AKAN MENCARI SEMUA KATA SISA DARI STRING 
let hugString = "HUG aku"
let hutString = "HUT Hot hui"
console.log(/hu./i.test(hugString))
console.log(/hu./i.test(hutString))
console.log(chalk.blue(hutString.match(/hu./gi)))

// Match Single Character with Multiple Possibilities
// method menemukan karakter CLASSES tertentu dengan menaruh string di dalam square bracket []
let kalimat = "ada Bug yang sangat big tapi kenapa bisa bego bog"
console.log(kalimat.match(/b[aiu]g/gi))


// Match Letters of the Alphabet
// PENGGUNAAN HYPE "-" dimana kita bisa menentukan range letters untuk membuat karakter set dalam menemukan kata yg sesuai
// penggunaan hype juga bisa digunakan untuk menentukan range angka
let hypeString = " saya menemukan cat dengan wajah dat mat"
console.log(chalk.green(hypeString.match(/[a-g]at/g)))
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
console.log(jennyStr.match(myRegex));

// MATCH SINGLE CHARACTER NOT SPECIFIED
// MENCARI KARAKTER/VALUE DILUAR DARI YG DISETKAN. penggunaan menggunakan negasi alias negatif diluar karater tersebut
//  FORM YG DIGUNAKAN APABILA TIDAK INGIN MATCH DENGAN APA YG ADA DI DALAMA GROUP OF TEXT HARUS DI DALAM SQUARE BRACKET DAN BISA MENGGUNAKAN CARET (^)
let quoteSample = "3 blind mice.";
console.log("caret",quoteSample.match(/[^aiueo^0-3]/gi)); // Change this line

// Match Characters that Occur One or More Times
// MENCARI KARAKTER ATAU GRUP KARAKTER DALAM BERTURUT MENGGUNAKAN "+"
// PENGGUNAAN OPERATOR + MENCARI POLA DENGAN KARAKTER yg sama BERTURUT-TURUT
let difficultSpelling = "Mississippi";
console.log("operator +",difficultSpelling.match(/ss+/g))

// MATCH CHARACTERS THAT OCCUR ZERO OR MORE TIME
// OPTIONAL MENGGUNAKAN ARSETERIK ATAU (*) UNTUK MENCAR POLA KALIMAT DARI 0 ATAU LEBIH
let soccerWord = "goooooooogoal!";
console.log("arsterik =>", soccerWord.match(/go*/g))
console.log(/o*/g.test(soccerWord))

// FIND CHARACTERS WITH LAZY MATCHING
let texte = "titanic"
// mencari value denga sub-string yg sangat luas
// hasil yg akan keluar adalah titani, karena mencari 
// awalan t dengan pertengah group of character ditambh dengan match zero or more times
// diakhiri dengan i 
console.log(texte.match(/t[a-z]*i/g))
// menggunakan lazy match untuk mencari value dengan sesuai
// mencari di mana awalan t dengan akhiran i dengan adanya group of character ditengah
console.log(texte.match(/t[a-z]*?i/g))

// MENCARI AWALAN POLA STRING
//the caret (^) is used to search for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
console.log("finding string in the begining",calRegex.test(rickyAndCal))

// MATCH ENDING STRING PATTERN 
// PENGUNAAN PENCARIAN POLA DI AKHIR KALIMAT STRING MENGGUNAKAN SIGN DOLLARS ($)
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log("dollars sign ",storyRegex.test(theEnding));


// ---------------------------------- PERBEDAAN PENGGUNAAN \w & \D
// \w => dituju shortcut mencari letters & number + _ (space, dan simbol tidak termasuk)
// \D => mencari diluar number, yg di match yaitu string, space & simbol

// MATCH ALL LETTERS AND NUMBER 
// SHORTCUT DARI CHARACTER CLASS [A-Za-z0-9_] menjadi \w   
let stringShort = "short cut 123"
let shortHand = /\w/g;
console.log("w" ,stringShort.match(shortHand))

// Match Everything But Letters and Numbers
// SHORTCUT KEBALIKAN DARI MATCH ALL NUMBER AND LETTES menggunakan \W kapital
let shortHandS = /\W/g;
let numbers = "42%";
console.log("W =>",numbers.match(shortHandS));

// MATCH ALL NUMBER USIN \d
// SHORTCUT [0-9] = \d
let short = /\d+/g;
let strgNum = "42% 12";
console.log("d =>",strgNum.match(short));

// MATCH ALL NON NUMBER WITH \D uppercase
// SHORTCUT MENCARI NON NUMBER 
let shortD = /\D+/g;
let strD = "42% shorti";
console.log("D", strD.match(shortD))


// CHECK USERNAME THIS CASE AS FOLLOWING:
// 1. Usernames can only use alpha-numeric characters.
// 2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 3. Username letters can be lowercase and uppercase.
// 4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Your regex should match the string Oceans11
// our regex should match the string Z97
// JACK
let checkId = "Gembel140"
let regexId = /^[\D][\D]+\d*$|^[\D]\d\d*$/i;
console.log(regexId.test(checkId))
console.log(checkId.match(regexId))

console.log("+ =>" , "z915".match(/^[\D]\d+/))

// MATCH WHITESPACE
// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, 
// but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));

// MATCH NON-WHITESPACE
//  similar to the character class [^\r\t\f\n\v].
let nonSpaceRegex = /\S+/g;
console.log(whiteSpace.match(nonSpaceRegex))

// SPECIFY UPPER AND LOWER NUMBER OF MATCHES
// PENGGUNAAN DARI QUANTITY SPECIFIER MENGGUNAKAN CURLY BRACKET {}
// DIMANA PENGGUNAANNYA MENENTUKAN JARAK POLA TERTENTU SEBAGAI CONTOH:
// kita menentukan karakter h itu berulang sebanyak antara 3 - 6 jika lebih atau kurang akan false
let ohStr = "Ohhhhhh no";
let ohRegex = /^Oh{3,6}\s\D+/; // Change this line
let resultS = ohRegex.test(ohStr);
let regexRes = ohStr.match(ohRegex)
console.log("curly bracket",resultS)
console.log(regexRes)

// SPECIFY ONLY THE LOWER NUMBER OF MATCHES
// masih menggunakan curly bracket untuk menentukan pola tertentu
// akan tetapi the first number just follwed by a comma
// TO SPECIFY LOWER NUMBER OF PATTERN WITH NO UPPER LIMIT

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let lower = haRegex.test(haStr);
console.log("specify lower", lower)

// SPESIFIK NOMOR YG PERSIS OF MATHES
// masih menggunakan curly bracket untuk menentuka pola berdasarkan specific number of matches
// hanya menempatn 1 nomor diantara curly bracket
// as example:
let A4 = "haaaah"; // FALSE
let A3 = "haaah"; // TRUE
let A100 = "h" + "a".repeat(100) + "h"; // FALSE
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

// In order, the three test calls would return false, true, and false.


// CHECK FOR ALL OR NONE
// menggunakan question mark sebagai cek value apa pola tersebut ada atau tidak ada.
// membuat cek value menggunakan qustion mark yg dimana value sebelumnya bisa di jadika sebagai optional 
// as example: 
let favWord = "favorite";
let favWord1 = "favourite";
let favRegex = /favou?rite/; // Change this line

console.log(favWord.match(favRegex))

// POSITIVE AND NEGATIVE LOOKAHEAD
// mencari multiple pola over the same string

// Pandangan ke depan yang positif akan terlihat untuk memastikan
//  elemen dalam pola pencarian ada di sana, tetapi tidak akan benar-benar
//   cocok dengannya. Sebuah lookahead positif digunakan sebagai (?=...) 
//   di mana ... adalah bagian yang diperlukan yang tidak cocok.

// Di sisi lain, lookahead negatif akan terlihat untuk memastikan elemen
//  dalam pola pencarian tidak ada. Sebuah lookahead negatif digunakan 
//  sebagai (?!...) di mana ... adalah pola yang Anda tidak ingin berada di
//   sana. Sisa pola dikembalikan jika bagian lookahead negatif tidak ada.

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


// Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex1 = /(Franklin D. |Eleanor )Roosevelt/; // Change this line
let result1 = myRegex1.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works


// Use Capture Groups to Search and Replace
// earching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));

// You can also access capture groups in the replacement string with dollar signs ($)

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'))

let spasi = "    Hello Ilham    "
let regexSpasi = /[^\s]\D+[^\s]/;
console.log(spasi.match(regexSpasi, " ").join())