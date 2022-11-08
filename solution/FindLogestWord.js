function long(x){
    var a = x.split(' ')
    var txt = ''
    for (let i of a){
        if (i.length>txt.length){
            txt = i
        }
    }
    console.log(txt)
}

long('Web Development Tutorial ')