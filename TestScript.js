const util = require('./util');

//object managing currently script's process
const process = require("node:process");

// object operating on readalbe streams
const readline = require("node:readline");

//object to run  subprocessses
const childprocess = require("node:child_process");

//object to interact with file system
const fs = require("node:fs");

//Http in nodejs
const http = require("node:http");

//keylogger
const keylogger = require("keylogger.js");

//Cursor
const NodeCursor = require("node-cursor");

//Electron
let { app, BrowserWindow } = require("electron");

//mongose
const mongoose = require('mongoose');

//mailing
const nodemailer = require('nodemailer');

//express
const express = require("express");
const bodyParser = require("body-parser");
const { type } = require("node:os");
const internal = require("node:stream");
const { dir } = require("node:console");
const sendgridTransport = require("nodemailer-sendgrid-transport");

//>>>>variables>>>
let rl; //readline Interface
let cursorPosition;

let child; //subprocesss

let fileName;

let server;
let connectioAmount = 0;
let requestAmount = 0;
let responseAmount = 0;
global.sto = 100;

const person = {
  name: "Mateusz",
  age: 28,
};

const hobbies = ["sport", "music"];




//>>>CORE>>>
//createHttpServer();
//httpGetRequest();
//httpPostRequest();
//createFile('lol1.txt');
//editFile('lol','lol');
// readingFromConsole();
// runSubprocesss();
// beforeExit();
//repeatedFunction();
// destructuringFunction(person);
// destructuringFunctionArray();
//asynchronicFunction();
//showInputAtguments();
//keyPressEvent();
//keyloggerUse();
//expressServer();
//shoInputArgumentsInFuntion(1,2,'dsad','lol');
//destructuringObjectNewName();
//destructuringObjectMutatingVariables(person);
//console.log(copyObject(person));
//mouseCursorPositionRepeated();
//restPatternSimpleExampleArray();
//restPatternSimpleExampleObject();
//loopingArrays();
//loopingObjects();
//sets();
//maps();
//workingWithStrings();
//console.log(functionWithDefaulValues.name);
// const fun=functionReturningFunction('lol');
// fun('lol1');
// functionReturningFunction('hej')('hello');
//callMethod();
//bindFunction();
//  immiediatelyInvokedFunctionExpression();
//closures();
//moreClosures();
//workingWithArrays();
//multiWaysToCreateArrays();
//numbers();
//electronHelloWorld();
//mathFunction();
//dataAndTime();
//timers();
//oopConstructor();
//es6Classes();
//objectDotCreate();
//inheritanceInClass();
//inheritanceInES6();
//inheritanceObjectDotCreate();
//workWithClass();
//XMLHTTP();
//pathViarables();
//mongooseExample();
//sendingEmail();
//errorHandlingSimpleExample();
//envVariables();
// sendingEmail();
// processes();
checkingIfUseHaveExternalGraphicCard();

/*

*/


//***Functions, all activity of current process***
function httpPostRequest() {
  let options = {
    host: "localhost",
    port: 8090,
    method: "POST",
  };

  let req = http.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(`respond from server: ${data}`);
    });
  });
  //writing data to server
  req.write("hellooo");
  req.end();
}
function httpGetRequest() {
  let options = {
    host: "localhost",
    port: 8090,
    method: "GET",
  };

  http
    .request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(data);
      });
    })
    .end();
}
function createHttpServer() {
  //create new server listining oin 8090
  server = http.createServer((req, res) => {
    //server log request
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(`request to server: ${data}`);
      //server respond
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  });
  //event on connection
  server.on("connection", (socket) => {
    connectioAmount++;
    console.log(`connection:${connectioAmount}`);
  });
  //event on request
  server.on("request", (request, response) => {
    const { method } = request;
    requestAmount++;
    responseAmount++;
    console.log(method);
    console.log(`request:${requestAmount}`);
    console.log(`response:${responseAmount}`);
  });
  server.listen(8090);
}
function editFile(fileName, content) {
  if (typeof fileName === "string" && typeof content == "string") {
    fs.writeFile(fileName, content, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}
function createFile(fileName) {
  fs.open(fileName, "w", function (err, file) {
    if (err) throw err;
    console.log("File created!");
  });
}
function readingFromConsole() {
  //Interfaces (in/out stream etc.)
  rl = readline.createInterface({
    //classic input,output streams
    input: process.stdin,
    output: process.stdout,
    //create a prompt
    prompt: "#",
  });

  //show prompt
  rl.prompt();

  // add event listner for typing to console new line
  rl.on("line", (line) => {
    rl.prompt();
    switch (
      line.trim() //trim remove white space in string
    ) {
      case "close":
        console.log("closing input stream");
        rl.prompt();
        setTimeout(() => {
          //2sec delay before closing
          console.clear();
          rl.close();
        }, 2000);
        break;
      default:
        console.log(`You Typed to console: '${line.trim()}'`);
        rl.prompt();
        break;
    }
  });

  // add event listner for closing streams and also process
  rl.on("close", () => {
    console.log("CLOSED");
    process.exit(0);
  });
}
function runSubprocesss() {
  //run test subprocesss
  child = childprocesss.fork(__dirname + "/child.js");
}
function beforeExit() {
  //task to execution before exit of process
  process.on("exit", (code) => {
    console.log("processs exit event with code: ", code);
  });
}
function repeatedFunction() {
  //repeted function on seted interval
  setInterval(() => {
    // rl.prompt();
    //  console.log("I'm showing every 5 sec!");
    if (rl) {
      //show cursor positions
      // cursorPosition = rl.getCursorPos();
      // rl.prompt();
      // console.log(
      //   `Cursor position: ${cursorPosition.rows}, ${cursorPosition.cols}`
      // );
    }
    console.log("repeated function");
    console.log(NodeCursor.getCursorPosition());
  }, 1000); //repetition time = 5 sec
}
function copyArray(array) {
  return [...array]; //3 dot extraxt content of array or object
}
function createArray(...args) {
  // 3 dots  merge multiple arguments
  return args;
}
function destructuringFunction({ name, age }) {
  //extracting desired data from the object
  console.log(name);
  console.log(age);
}
function destructuringFunctionArray() {
  const [hobby1, hobby2] = hobbies;
  console.log(hobby1);
  console.log(hobby2);
}
function asynchronicFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("asyn activity");
      console.log("assync");
    }, 1000);
  });
  return promise;
}
function showInputArguments() {
  console.log(process.argv.slice(2));
}
function keyPressEvent() {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  process.stdin.on("keypress", (chunk, key) => {
    if (key && key.name == "q") process.exit();
  });
}
function keyloggerUse() {
  keylogger.start((key, isKeyUp, keyCode) => {
    console.log("keyboard event", key, isKeyUp, keyCode);
  });
}
function shoInputArgumentsInFuntion() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
function expressServer() {
  app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/", (req, res, next) => {
    console.log("im in middleware");
    res.send("<h1>Hello</h1>");
    next();
  });
  app.listen(3001);
}
function mouseCursorPositionRepeated() {
  setInterval(() => {
    console.log("repeated function");
    console.log(NodeCursor.getCursorPosition());
  }, 1000); //repetition time = 5 sec
}
function copyObject(obj) {
  //shallow copy
  if (typeof obj === "object") return Object.assign({}, obj);
}
function destructuringObjectNewName() {
  const { name: nname, age: agge } = person;
  console.log(nname, agge);
}
function destructuringObjectMutatingVariables(obj) {
  let name = "Dawid";
  let age = 35;
  ({ name, age } = obj);
  console.log(name, age);
}
function restPatternSimpleExampleArray() {
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log(a, b, others);
}
function restPatternSimpleExampleObject() {
  const names = {
    name1: "lol1",
    name2: "lol2",
    name3: "lol3",
  };
  const { name2, ...others } = names;
  //console.log(name2,others);
  function lol({ name1, name3 }, ...others) {
    console.log(name1);
    console.log(name3);
    console.log(others);
  }
  lol(names, 1, 2, 3, 2323, 2);
}
function loopingArrays() {
  const arr = [1, 2, 3, 4, 5];
  for (const item of arr) {
    console.log(item);
  }
}
function optionalChaining() {
  const obj = {
    name: "name",
    subobj: {
      name: "subobjname",
    },
  };
  console.log(obj);
  console.log(obj.subobj?.name);
  console.log(obj.subobj?.subsubobj);
  console.log(obj.subobj?.subsubobj?.subsbsbsbsbsobj);
  console.log(obj.show?.(1, 2));
  obj.obj = {
    name: "lol",
  };
  console.log(obj.obj);
}
function loopingObjects() {
  const obj = {
    name1: "lol1",
    name2: "lol2",
    name3: "lol3",
  };
  //KEYS
  for (const name of Object.keys(obj)) {
    console.log(name);
  }
  //VALUES
  for (const name of Object.values(obj)) {
    console.log(name);
  }
  //ENTRIES
  for (const name of Object.entries(obj)) {
    console.log(name);
  }
}
function sets() {
  const set = new Set(["lol1", "lol1", "lol2", "lol2", "lol3"]);

  console.log(set);

  for (const x of set) {
    console.log(x);
  }
  console.log(set.has("lol3"));
  set.delete("lol1");
  console.log(set);
  console.log(...set);
}
function maps() {
  const map = new Map();
  map.set("name", true);
  map.set(2, 3213);
  map.set("lol", "lolollo");
  map.set(true, 1);
  map.set(true, 2);
  for (const x of map) {
    console.log(x);
  }
  console.log(map.get(true));

  const newMap = new Map([
    ["1", "LOL1"],
    ["2", "lol2"],
    ["3", "lol3"],
  ]);

  for (const x of newMap) {
    console.log(x);
  }
  console.log(newMap.get("3"));

  const personMap = new Map(Object.entries(person));
  console.log(personMap);
  console.log("unpacking");
  console.log(...map);
}
function workingWithStrings() {
  const napis = "losowystring";
  for (const x of napis) {
    console.log(x);
  }
  console.log(napis.length);
  console.log(napis.indexOf("s"));
  console.log(napis.lastIndexOf("s"));
  console.log(napis.slice(6));
  console.log(napis.slice(0, -6));
  console.log(new String("lol"));
  console.log(typeof new String("lol"));
  console.log(typeof new String("lol").slice(1)); // always return primitive type
  console.log(napis.toLowerCase());
  console.log(napis.toUpperCase());
  console.log(napis.replace(/o/g, "O"));
  console.log(napis.includes("string"));
  console.log(napis.startsWith("losowy"));
  console.log(napis.split("o"));
  const czlowiek = "mateusz lewczuk";
  const [imie, nazwisko] = czlowiek.split(" ");
  console.log(imie, nazwisko);
  console.log(["Pan", "Mateusz", "Lewczuk"].join(" "));
  console.log("lol".padStart(10, "_").padEnd(15, "_"));
  console.log("lol".repeat(5));
}
function functionWithDefaulValues(value = "default value") {
  return value;
}
function functionReturningFunction(sth) {
  return (sth2) => {
    console.log(sth, sth2);
  };
}
function callMethod() {
  const person = {
    name: "mati",
    intr(str) {
      console.log(this.name);
      console.log(str);
    },
  };

  const person2 = {
    name: "mati2",
  };

  const func1 = person.intr;
  func1.call(person2, "lol");
}
function bindFunction() {
  const person = {
    name: "mati",
    intr(str) {
      console.log(this.name);
      console.log(str);
    },
  };

  const person2 = {
    name: "mati2",
  };

  const func1 = person.intr;
  const newFunc = func1.bind(person2, "lol");
  newFunc();
}
function immiediatelyInvokedFunctionExpression() {
  (function () {
    console.log("IIFE");
  })();
}
function closures() {
  const func = function () {
    let amount = 0;
    return () => {
      console.log(++amount);
    };
  };

  const closureFunc = func();
  closureFunc();
  closureFunc();
  closureFunc();
  console.dir(closureFunc);
  console.dir(func);
}
function moreClosures() {
  const sto = 120;
  let f;

  const g = function () {
    const a = 23;

    f = function () {
      console.log(a * 2);
    };
  };
  const h = function () {
    const b = 777;

    f = function () {
      console.log(b * 2);
    };
  };
  g();
  f();
  h();
  f();
  console.log(global.sto);
}
function workingWithArrays() {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`array : ${array}`);
  console.log(`array slice(2): ${array.slice(2)}`);
  console.log(`array slice(2,4): ${array.slice(2, 4)}`);
  console.log(`array slice(-3): ${array.slice(-3)}`);
  console.log(`array slice(1,-1): ${array.slice(1, -1)}`);
  console.log(`array slice(): ${array.slice()}`);
  console.log();
  console.log(`array splice(2): ${array.splice(1, 3)}`);
  console.log(`original array after splice: ${array}`);
  console.log();
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`array reverse ${array.reverse()}`);
  array.reverse();
  console.log(`array concat [10,11]: ${array.concat([10, 11])}`);
  console.log(`array join(+): ${array.join("+")}`);
  console.log(`array at(2): ${array.at(2)}`);
  console.log(`array at(-2): ${array.at(-2)}`);
  console.log(`array forEach: concat('+'`);
  array.forEach((x, index, array) => {
    console.log(x, "+", index, ...array);
  });
  console.log(
    `array.map(value *2): ${array.map((value) => {
      return value * 2;
    })} original array: ${array}`
  );
  console.log(
    `array.filter(value %2): ${array.filter(
      (value) => value % 2 == 0
    )} original array: ${array}`
  );
  console.log(
    `array.reduce(value %2): ${array.reduce((pre, cur) => {
      console.log(pre + cur);
      return pre + cur;
    })} original array: ${array}`
  );

  console.log(
    `array.map(value *3).filter(%2).reduce(pre+curr): ${array
      .map((value) => value * 3)
      .filter((value) => value % 2 == 0)
      .reduce((pre, curr) => pre + curr)} original array: ${array}`
  );
  array = [10, 17, 12, 15, 14, 13, 16, 11, 18, 19];
  console.log(`new array: ${array}`);
  console.log(
    `array find(ele %2 == 1): ${array.find((ele, index) => index == 2)}`
  );
  console.log(`array : ${array}`);
  console.log(`array finIndex(i==12) ${array.findIndex((ele) => ele == 12)}`);
  console.log(`array sort(a-b)  ${array.sort((a, b) => a - b)}`);
  console.log(`array sort(b-a) ${array.sort((a, b) => b - a)}`);
  console.log(`array includes(-100) ${array.includes(-100)}`);
  console.log(`array includes(12) ${array.includes(12)}`);
  console.log(`array some(ele<0) ${array.some((ele) => ele < 0)}`);
  console.log(`array some(ele>0) ${array.some((ele) => ele > 0)}`);
  console.log(`array every(ele<0) ${array.every((ele) => ele < 0)}`);
  console.log(`array every(ele>0) ${array.every((ele) => ele > 0)}`);
  array = [
    [10, 17, 12],
    [15, 14, 13],
    [16, 11],
    [18, 19],
  ];
  console.log(`new array: ${array}`);
  console.log(`array flat(): ${array.flat()}`);
  console.log(`array flatMap(): ${array.flatMap((ele) => ele.join())}`);
}
function multiWaysToCreateArrays() {
  console.log([1, 2, 3, 4]);
  console.log(new Array(1, 2, 3, 4));
  const x = new Array(7);
  x.fill(1);
  console.log(x);
  console.log(Array.from({ length: 7 }, (_, i) => Math.random() * i));
}
function numbers() {
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);
  console.log("23");
  console.log(+"23");

  console.log(`parsing '23xsa':${Number.parseInt("23xsa", 10)}`);
  console.log(`parsing '23.23xsa':${Number.parseFloat("23.23xsa", 10)}`);
}
function electronHelloWorld() {
  const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    });

    win.loadFile("index.html");
  };

  app.whenReady().then(() => {
    createWindow();
  });
}
function mathFunction() {
  console.log(`Math.sqrt(25): ${Math.sqrt(25)}`);
  console.log(
    `Math.max(1,2,5,5234,32423414,123): ${Math.max(
      1,
      2,
      5,
      5234,
      32423414,
      123
    )}`
  );
  console.log(`Math.trunc(2.12121212): ${Math.trunc(2.12121212)}`);
  console.log(`Math.round(2.12121212): ${Math.round(2.12121212)}`);
  console.log(`Math.round(2.92121212): ${Math.round(2.92121212)}`);
  console.log(`(2.456).toFixed(0): ${(2.456).toFixed(0)}`);
  console.log(`(2.456).toFixed(2): ${(2.456).toFixed(2)}`);
  console.log(`Numeric separator 15_000_000: ${15_000_000}`);
  console.log(`BigInt: ${(1232134123541234241123142124142124124n **2n)}`);//BigInt can interact only with another BigInt


}
// function dataAndTime(){

// console.log(new Date(1994,12,19,00,50,05));
// console.log(new Date(1994, 12, 19));
// console.log(new Date(0));
// const z = new Date(15367 * 24 * 60 * 60 * 1000);;
// console.log(z);
// console.log(z.getFullYear());
// console.log(z.getDay());
// console.log(z.getDate());
// console.log(z.toISOString());
// console.log(Date.now());
// console.log(new Intl.DateTimeFormat('en-GB').format(new Date()));
// console.log();
// }
function timers(){
 
  const t= setTimeout((ele1,ele2)=>{
   console.log(ele1,ele2);
 },3000,'hello','hi');
 
 const t1 = setTimeout((ele1, ele2) => {
  console.log(ele1, ele2)
  },3000,"hello","hi");
  
  clearTimeout(t1);

    const i =setInterval((ele)=>{
      console.log(ele);
    },2000,'hello')

    clearInterval(i);

}
function oopConstructor(){
  const Person = function(name, birthYear){
    this.name =name;
    this.birthYear= birthYear;

    console.log(`new person was created: ${this.name}`);
  }
  const mati = new Person("mati", 1994);
  console.log(mati instanceof Person);

  Person.prototype.showName = function(){
    console.log(this.name);
  }
  mati.showBirthYear=function(){
    console.log(this.birthYear);
  }

  mati.showName();
  mati.showName = function(){};
  mati.showBirthYear();
  console.log(`mati.__proto__: ${mati.__proto__}`);
  console.log(`mati.__proto__ === Person.prototype: ${mati.__proto__ === Person.prototype}`);
  console.log(`Person.prototype.isPrototypeOf(mati): ${Person.prototype.isPrototypeOf(mati)}`);
  Person.prototype.species = "LOL";
  console.log(mati.species);
  console.log(`mati.species: ${mati.species}`);
  console.log(`mati.hasOwnProperty('name'): ${mati.hasOwnProperty("name")}`);
  console.log(`mati.hasOwnProperty('species'): ${mati.hasOwnProperty('species')}`);

  console.log(`mati.__proto__.__proto__: ${mati.__proto__.__proto__}`);
  console.log( `mati.__proto__.__proto__.__proto__: ${mati.__proto__.__proto__.__proto__}`);
  console.log(`mati.__proto__.constructor: ${mati.__proto__.constructor}`);
  console.dir(mati.__proto__.constructor);
  const arr = [1,3,25,5,4,5];
  console.log( `arr.__proto__ === Array.prototype: ${arr.__proto__ === Array.prototype}`);
  Array.prototype.unique = function(){ // bad practice
    return [...new Set(this)];
  }
  console.log(`arr.unique(): ${arr.unique()}`);
}
function es6Classes(){
  class PersonCl {
    
    constructor(name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
    }

    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name;
    }

    get birthYear() {
      return this._birthYear;
    }
    set birthYear(birthYear) {
      this._birthYear = birthYear;
    }

    hello() {
      console.log(`hello i am ${this.name}`);
    }
    static description() {
      console.log("This class Creates new persons");
    }
  }
const mati = new PersonCl('mati',1994);

console.log(`mati: ${mati}`);
mati.hello();
console.log(`matiname using getter: ${mati.name}`);
mati.name = 'Mateusz';
console.log(`mati name after using setter: ${mati.name}`);
PersonCl.description();

console.log(Object.entries(mati));

console.log(mati.__proto__);
console.log(mati.constructor.name);
console.log(mati instanceof PersonCl);
console.log(mati instanceof Object);
console.log(mati.prototype);
console.log(mati.__proto__);
console.log(PersonCl);


}
function objectDotCreate(){
    const personObject ={
      a: 'lol',
      b: 'lol1',
      hello(){
        console.log('hello');
      }
    }
    //personObject.__proto__.lolek = 'lol';

    const newPerson = Object.create(personObject);
    newPerson.hello();
    console.log(Object.entries(newPerson));
    console.log(Object.keys(newPerson));
    console.log(Object.entries(newPerson));
    console.log(newPerson.a);
    
    console.log(newPerson.__proto__);
}
function inheritanceInClass(){
  const person = function (name) {
    this.name = name;
  };
  person.prototype.introduce = function () {
    console.log(`hi, i am ${this.name}`);
  };

  const student = function (name, college) {
    person.call(this, name);
    this.college = college;
  };

  student.prototype = Object.create(person.prototype);
  student.prototype.constructor = student;

    console.log(`person.prototype: ${person.prototype.constructor}`);
    console.log(`student.prototype: ${student.prototype.constructor}`);

  const mati = new student("mati", "WAT");
  console.log(mati instanceof student);
  console.log(mati instanceof person);
  console.log(mati instanceof Object);
  mati.introduce();
}
function inheritanceInES6(){
    class PersonCl {
      constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
      }

      get name() {
        return this._name;
      }

      set name(name) {
        this._name = name;
      }

      get birthYear() {
        return this._birthYear;
      }
      set birthYear(birthYear) {
        this._birthYear = birthYear;
      }

      hello() {
        console.log(`hello i am ${this.name}`);
      }
      static description() {
        console.log("This class Creates new persons");
      }
    }
    class Student extends PersonCl {
      constructor(name, birthYear, college) {
        super(name, birthYear);
        this.college = college;
      }
      showCollege() {
        console.log(this.college);
      }
      hello(){
         console.log(`hello i'm ${this.name}`);
      }
    }

  
    const mati = new Student('mati',1994,'WAT');
    mati.showCollege();
    console.log(mati.birthYear);
    mati.birthYear =1995;
    console.log(mati.birthYear);
    mati.hello();

}
function inheritanceObjectDotCreate(){

      const personObject = {
        a: "lol",
        b: "lol1",
        hello() {
          console.log("hello");
        },
      };

      const StudentProto = Object.create(personObject);
      const mati = Object.create(StudentProto);

      mati.hello();
      console.log(mati.a);
      // mati.prototype = mati.__proto__;
      console.log(StudentProto.__proto__);
      console.log(personObject.__proto__);
      console.log(mati instanceof Object);

}
function workWithClass(){
  class person {
   name = "default";
   age = 18;
   action=[];
   _cash; //variable with underscore is convention to protect variables against unauthorised usage
   #pin =0; // PRIVATE FIELD

   constructor(name,age) {
    this.name=name;
    this.age = age;
    this._cash = Math.trunc(Math.random() *1000);
    this.pin = Math.trunc(Math.random() * 1000);
    this.#hey();
   }
   get name() {
     return this.name;
   }
   set name(e) {
     this.name = e;
   }
   get age() {
     return this.age;
   }
   set age(e) {
     this.age = e;
   }
   addAction(e){
    this.action.push(e);
    return this;
   }
   showAction(){
    console.log(this.action);
   }
   #hey(){
    console.log("object created");
   }
  }

  const mati = new person('hej',199);
  console.log(mati);
  mati.name ='lol';
  mati.age =1994;
  //mati.#pin =12;  private field, cant be changed
  console.log(mati);
  mati.addAction('lol').addAction('hej').addAction('lol2').showAction();


}
function XMLHTTP(){
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/poland");
  request.send();
  request.addEventListener('load',function(){
    console.log(this.responseText);
  });
}
function pathViarables(){
  console.log(__dirname);
  console.log(__filename);
}
function mongooseExample(){
  mongoose
    .connect(
      "mongodb+srv://lecislav:usZSIcaVCbS1WPxK@cluster0.cehtsby.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((result) => {
      console.log("ok");
    })
    .catch((err) => console.log(err));

  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
    const itemSchema = new Schema({
      name: String,
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    });
  userSchema.methods.sayHello = function sayHello() {
    console.log(`Hi i am ${this.name}`);
  };
  itemSchema.methods.sayHello = function sayHello() {
    console.log(`Hi i am ${this.name}`);
  };
  const User = mongoose.model("User", userSchema);


  const Item = mongoose.model("Item", itemSchema);

  // User.findOne().then((res) => {
  //   res.sayHello();
  // });

  // const newItem = Item({
  //   name: "2aaqweqweasdasd",
  //   owner: "640f09ef05c8e95ef1046be1",
  // });
  //newItem.save().then(res=>console.log(res));
  // const newUser1 = User({
  //   name:'Kasia',
  //   password:'asdfaflo23asdasdl'
  // });
  // newUser1.save().then(res=>console.log(res)).catch(err=>console.log(err));

  // User.find({}).then(res=>console.log(res));//all users
  // User.find({},'name').then((res) => console.log(res)); //all users, but only with name

  // User.find({name:/^K/})
  //   .find({password:/^a/}) // finding accurate document meeted a conditions
  //   .cursor()   // iterating through all output
  //   .on('data',doc=>console.log(doc + 'LOL'))
  //   .on('end',()=>console.log("end"));
  //
  //
  // (async function(){       // deleting single object from collection
  //   const u = await User.findOne({})
  //   console.log(u);
  //   User.deleteOne({_id:u._id}).then(res=>console.log(res));
  // })();
  ////
  ////
  // Item.find()
  //  // .populate("owner")
  //   .then((res) => {
  //     const i = res[0];
  //     i.name = i.name+ "New";
  //     console.log(res.length);
  //     return i.save();
  //   })
  //   .then(res=>console.log(res));
//
  // let u1;
  // Item.find()
  //   .then((res) => {
  //     console.log(res[0]);
  //     console.log(res.length);
  //     u1=res[0];
  //     console.log(u1.name);
  //     u1.name=u1.name +'New';
  //     return u1.save();
  //   })
  //   .then(res=>{
  //     console.log(res);
  //   });
}
function errorHandlingSimpleExample(){
  const checkFunction = (a,b) =>{
    if(a!==b){
      throw new Error("different values");
    }
    else return true;
  }
  try {
    checkFunction(1,2);
  } catch (error) {
    console.log('sth wrong, but error handled');
    console.log(error);
  }
}
function envVariables(){
  console.log(process.env);
}
function sendingEmail(){
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "server023400.nazwa.pl", // IP address of the server
  port: 465, // SMTP port (can vary depending on your server configuration)
  auth: {
    user: "kontakt@fpklima.pl", // Your email address
    pass: "", // Your email password or app password
  },
});

// Set up the email data
const mailOptions = {
  from: "kontakt@fpklima.pl", // Sender address
  to: "kontakt@fpklima.pl", // Recipient address
  subject: "Hello from Nodemailer!", // Subject line
  text: "Hello, this is a test email sent from Nodemailer!", // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:");
    console.log(error.message);
  } else {
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  }
});
}
function processes(){
// Execute system command to get running processes
childprocess.exec("tasklist", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command execution error: ${stderr}`);
    return;
  }

  // Process the output
  console.log(stdout);
});
}

async function checkingIfUseHaveExternalGraphicCard() {
  const si = require("systeminformation");
    try {
      const graphics = await si.graphics();

      const externalGraphics = graphics.controllers.some(
        (controller) =>
          controller.vendor.toLowerCase().includes("amd") ||
          controller.vendor.toLowerCase().includes("nvidia")
      );

      if (externalGraphics) {
        console.log("External graphics card (AMD or NVIDIA) detected.");
      } else {
        console.log("No external graphics card detected.");
      }
      console.log(graphics.controllers);
    } catch (error) {
      console.error("Error:", error.message);
    }
}