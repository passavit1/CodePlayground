function check(x){
    const word = ['meme','tiktok','anime','football']

    for (let i in word){
        if (x.includes(word[i])){
            console.log('NO!')
            break
        }
        else if (i==word.length-1){
            console.log('Safe')
        }
        else{
            continue
        }
    }
    
}



check('iaskfootballldjl')