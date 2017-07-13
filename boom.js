const fs = require('fs')

fs.writeFile("/tmp/boom.txt", "Boom! your filesystem is belong to us", (err) => {
  fs.readFile("/tmp/boom.txt", (err, buff) => {
    console.log(buff.toString())
  })
})
