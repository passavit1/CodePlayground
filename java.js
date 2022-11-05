function sor(x){
    var getodd = x.filter(x=>x%2).sort((a,b)=>a-b)
    console.log(getodd)
    console.log(x.map(x=>x%2 ? 'hello':getodd.pop()))
}








sor([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])