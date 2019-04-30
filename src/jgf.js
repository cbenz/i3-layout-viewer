function traverse (node, parentId, accu) {
  const id = accu.nextId
  accu.nextId += 1
  if (node.nodes) {
    // `node` is a container.
    const metadata = Object.assign({}, node)
    delete metadata.nodes
    accu.nodes.push({
      id,
      label: node.layout,
      metadata
    })
    if (parentId !== null) {
      accu.edges.push({source: parentId, target: id})
    }
    node.nodes.forEach(function (child) {
      traverse(child, id, accu)
    })
  } else {
    // `node` is a window.
    accu.nodes.push({
      id,
      label: node.name,
      metadata: node
    })
    // nodes can also be orphans!
    // if that is the case, dont add edge
    if (parentId !== null) {
      accu.edges.push({source: parentId, target: id})
    }
  }
}

function toJgf (node) {
  const nodes = []
  const edges = []
  traverse(node, null, {nodes, edges, nextId: 0})
  const graph = {
    graph: {
      directed: true,
      nodes,
      edges
    }
  }
  return graph
}

module.exports = toJgf
