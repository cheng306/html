console.log(import.meta);
console.log(this);

//import b from './reexports.js';

let a = {
    prop1: 12,
    prop2: [1, 2, 3],
    method1(){
        this.prop2.forEach(()=>{
            console.log(this);
        });
    }
}

a.method1();