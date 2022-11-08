function plus(x,y){
    for (let i=0 ; i<x.length ; i++){
        for(let k=i+1 ; k<x.length ; k++){
            if(x[i]+x[k]==y){
                console.log([i,k])
            }
        }
    }


}

plus([2,3,4,5,6,1,2,4,6,3],9)