const fs = require('fs')
const path = require('path')

// 读取指定的目录下所有文件的名称。大小是否为文件，并将读取的结果记录到info.txt文档中

// 首先要读取指定目录
fs.readdir(__dirname, (err, filenames) => {
    if (err) return console.log('获取指定目录失败：' + err.message)

    // console.log(filenames)
    // 获取到文件信息之后，需要遍历才能知道
    let str = ''
    filenames.forEach((item, index) => {
        // 读取文件信息
        // console.log(path.join(__dirname,'./files' + item))
        fs.stat(path.join(__dirname, item), (err, stats) => {
            if (err) return console.log('获取文件信息失败：' + err.message)
            // console.log(stats.size)
            // console.log(stats.isFile())
            // console.log(item)
            const name = '文件名：' + item + '\n'
            const size = '文件大小：' + stats.size + '\n'
            const file = '是否为文件：' + stats.isFile() + '\n'
            const br = '---------------------' + '\n'
            const result = name + size + file + br
            // console.log(result);
            str += result;
            // 写入文件
            fs.writeFile(path.join(__dirname, './files/info.txt'), str, (err) => {
                if (err) return console.log('写入文件失败：' + err.message)
                console.log('写入文件成功！')
            })
        })

    })

})
// 然后获取文件信息
// 写入文件
