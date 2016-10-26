# i3 layout tree to JSON Graph Format

The [i3](http://i3wm.org/) allows to [save the layout](http://i3wm.org/docs/layout-saving.html) in a JSON file.

This tool converts this JSON file into another JSON following the
[JSON Graph Format](http://jsongraphformat.info/) specification.

To actually visualize the graph, you'll need other tools. I suggest:
- [strip-json-comments-cli](https://github.com/sindresorhus/strip-json-comments-cli) to remove comments in any JSON
- [jgf-dot](https://github.com/jsongraph/jgf-dot/) to convert from JGF to DOT language
- [xdot](https://github.com/jrfonseca/xdot.py) to visualize the graph

So the full chain is:

```
i3-save-tree --workspace 1 | strip-json-comments --no-whitespace | i3-layout-tree-to-jgf | jgfdot | xdot -
```

I may develop an end-to-end tool called `i3-layout-tree-to-dot` maybe, which would wrap the full chain excepted `xdot`.