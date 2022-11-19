function replace(x){
    const rep = {4:'A', 5:'S', 0:'O', 1:'I'}
    for (let i in rep){
        if(x.includes(i)){
            x = x.replaceAll(i,rep[i])
        }
    }
    console.log(x)
}


replace('MUB45H1R')
replace('DUBL1N')
replace('51NG4P0RE')
replace('aasdk111120')