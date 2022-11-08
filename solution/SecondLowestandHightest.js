function maxmin(x){
    var a = x.sort((a,b)=>a-b)
    var result = a[a.indexOf(Math.min(...x))+1]+','+a[a.indexOf(Math.max(...x))-1]
    console.log(result)
}

maxmin([1,9,-3,7,-5,4,5]) 