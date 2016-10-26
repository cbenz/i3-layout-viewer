#! /usr/bin/env node

const read = require('read-file-stdin')

const convert = require('./convert').convert


read(process.argv[2], (err, buffer) => {
  if (err) throw err
  const node = JSON.parse(buffer)
  const graph = convert(node)
  console.log(JSON.stringify(graph, null, 2))
})
