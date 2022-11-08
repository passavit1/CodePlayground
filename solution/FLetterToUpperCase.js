function fupper(x){
    var c = x.split(' ').map(a=>a[0].toUpperCase()+a.slice(1)).join(' ')
    console.log(c)
}

fupper('my name is passavit')


