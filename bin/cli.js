#! /usr/bin/env node

const read = require('read-file-stdin')
const stripJsonComments = require('strip-json-comments')
const toDot = require('jgf-dot')

const toJgf = require('../src/jgf')

read(process.argv[2], (err, buffer) => {
  if (err) throw err
  const inputJson = stripJsonComments(buffer.toString())
  const node = JSON.parse(inputJson)
  const graph = toJgf(node)
  const dot = toDot(graph)
  console.log(dot)
})
