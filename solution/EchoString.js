function echo(x){
    var txt = ''
    for (let i = 0 ; i<x.length ; i++){
        for (let k = i+1 ; k<x.length+1 ; k++){
                txt += x.substring(i,k)+","
        }
    }
    txt = txt.slice(0,-1)
    console.log(txt)
}


echo('cat') //d,do,dog,o,og,g