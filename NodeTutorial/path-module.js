const path = require('path')

console.log(path.sep)
//  "/"

const filePath = path.join('/content', 'subfolder', 'Test.txt')
console.log(filePath)

// \content\subfolder\Test.txt

const base = path.basename(filePath)
console.log(base)

// Test.txt 

// resolve (_dirname : make it a directory)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// C:\Users\pc\OneDrive\Bureau\NodeTutorial\PracticeNode\NodeTutorial\content\subfolder\test.txt

