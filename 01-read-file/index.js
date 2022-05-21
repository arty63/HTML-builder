const fs = require('fs')

const stream = new fs.ReadStream(__dirname + '/text.txt', {encoding: 'utf-8'})

stream.on('data', function(chunk){
    console.log(chunk)
})
stream.on('error', function(err){
    if (err.code == 'ENOENT'){
        console.log('Файл не найден')
    }else{
        console.error(err)
    }
})