const path=require('path')

console.log(path.basename('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path/path.js'))
console.log(path.basename('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path/path.js','.js'))
console.log(path.basename('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path'))

console.log(path.dirname('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path/path.js'))

console.log(path.extname('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path/path.js'))

// let info={
//     name:'yogesh',
//     age:22,
//     lives:'Hyderabad'
// }

let a=path.parse('C:/Users/91970/Desktop/New folder/Node_js/19_fs, os, path/path.js')

console.log(a)
console.log(a.root)
console.log(a.dir)
console.log(a.base)
console.log(a.ext)
console.log(a.name)

