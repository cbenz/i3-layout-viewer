# i3 layout tree to JSON Graph Format

The [i3](http://i3wm.org/) allows to [save the layout](http://i3wm.org/docs/layout-saving.html) in a JSON file.

This tool converts this JSON file to a [DOT](http://www.graphviz.org/content/dot-language) file (see [GraphViz](http://www.graphviz.org/) tool).

To actually visualize the graph, you'll need a viewer like [xdot](https://github.com/jrfonseca/xdot.py).

So the full chain is:

```
i3-save-tree --workspace 1 | i3-layout-to-dot | xdot -
```