const getCallbackData = ((num, callback) =>{
    setTimeout(() => {
        if(typeof num === 'number'){
            callback(undefined, num*2)
        } else{
            callback('Enter number only')
        }
    }, 2000)
})

getCallbackData(2, (err, data) => {
    if(err){
        console.log(err)
    } else {
        getCallbackData(data, (err, data) => {
            if(err){
                console.log(err)
            } else{
                console.log(`Callback Data : ${data}`)
            }   
        })
    }
})

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Enter number only')
    }, 2000)
})

getDataPromise(2).then((data) =>{
    getDataPromise(data).then((result) =>{
        console.log(`Promise Data : ${result}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise('10').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(`Promise Data (6s) : ${data}`)
}).catch((err) => {
    console.log(err)
})