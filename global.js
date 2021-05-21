
// console.log(global); 


gloabl.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int)
}, 30000)

const int = setInterval(()=>{
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);npm 