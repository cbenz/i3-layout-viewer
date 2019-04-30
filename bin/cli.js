#! /usr/bin/env node

const read = require('read-file-stdin')
const stripJsonComments = require('strip-json-comments')
const toDot = require('jgf-dot')

const toJgf = require('../src/jgf')

read(process.argv[2], (err, buffer) => {
  if (err) throw err
  const jsons = buffer.toString()
    .replace(/"name": "node"/gi, '"name": "$node"')
    .split('\n\n')
    // exclude last element, which will be the empty newline at the end of i3-save-tree
    .slice(0, -1)
  const nodes = [];
  for (const json of jsons) {
    nodes.push(JSON.parse(stripJsonComments(json)))
  }
  const graph = toJgf(
    nodes.length > 1 ?
    {layout: 'root', nodes} :
    nodes[0]
  )
  const dot = toDot(graph)
  console.log(dot)
})
