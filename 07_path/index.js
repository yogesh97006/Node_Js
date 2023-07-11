const path=require('path')

console.log(path.dirname("C:/Users/91970/Desktop/New folder/Node_js/07_path"))
console.log(path.basename("C:/Users/91970/Desktop/New folder/Node_js/07_path"))
console.log(path.extname("C:/Users/91970/Desktop/New folder/Node_js/07_path.js"))

console.log(path.parse("C:/Users/91970/Desktop/New folder/Node_js/07_path").dir)