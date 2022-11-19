function checkdiff(x,y){
    if (x[0]==y[0] && x[x.length-1]==y[y.length-1]){
        console.log('true')
    }
    else{
        console.log('false')
    }

}


checkdiff(['white bread','lettuce','white bread'],['white bread','tomato','white bread'])
// checkdiff(['brown bread','chicken','brown bread'],['white bread','chicken','white bread'])
// checkdiff(['toast','cheese','toast'],['brown bread','cheese','toast'])