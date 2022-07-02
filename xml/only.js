// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫檔名及編碼
var x = 'ok.xml'
var ru = 'utf8'
var wu = 'utf8'
// 完成後的副檔名
var afterName = ''

// 用絕對路徑讀入檔案，使用node的readFileSync同步函數
var a = fs.readFileSync(x, ru)
// 導入陣列
var b = a.split('\n')

// 進行你要的操作
// 預設變量，才能累加頁碼
var f0 = 1
var f1 = 1
for (var i = 0; i < b.length; i++) {
    if (/<pb n/.test(b[i])) {
        if (/<art/.test(b[i + 1]) || /<art/.test(b[i + 2])) {
            f1 = 1
            b[i] = b[i].replace(/(<pb n=")\d+/, '$1' + f1)
            f1++
        } else {
            b[i] = b[i].replace(/(<pb n=")\d+/, '$1' + f1)
            f1++
        }
    }
}

// 用絕對路徑寫入檔案
fs.writeFileSync(x + afterName, b.join('\n'), wu)
// 完成時返回通知
console.log('only is OK: ' + x + afterName)

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')