var a = [1,2,3,4,5,6]
var c = ['apple','banana','orange','mango']
c = c.entries()

var b = a.map(a=>a*5);
console.log(b)

// console.log(a.reduce((a,b)=>a*b))

// console.log(b.filter(a=>a>15))
// console.log(b.every(a=>a>=5))
// console.log(b.find(b=>b>15))
// console.log(b.findIndex(b=>b>15))

// for (let i of d ){
//     txt += i + "<br>";
// }
// console.log(txt)


const time = document.getElementById('time');
const time2 = document.getElementById('time2');

time.style.width = 'auto';
time.style.height = 'auto';
time.style.backgroundColor = 'aqua';

time2.style.width = 'auto';
time2.style.height = 'auto';
time2.style.backgroundColor = 'aqua';

const starttime = setInterval(haha,1000)
function haha(){

    const weekday = ['sun','mon','Tue','Wed','Thu','Fri','Sat']
    const month = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    const tem = new Date()
    const yyyy = tem.getFullYear()
    const mm = month[tem.getMonth()]
    const date = tem.getDate()
    const dd = weekday[tem.getDay()]
    const hour = tem.getHours()
    const minu = tem.getMinutes()
    const second = tem.getSeconds()
    time.innerHTML = `Today is ${dd} ${date} ${mm} ${yyyy} Times ${hour} : ${minu} : ${second}`
}

