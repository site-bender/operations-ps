# Operations

The PureScript version of the Sitebender operations module.

The goal here (this is a WIP) is to be able to do calculations with composed functions generated from a JSON configuration object. Here is one example (not formally defined yet):

```json
{
  "tag": "Subtract",
  "minuend": {
    "tag": "Add",
    "addends": [
      {
        "tag": "FromFormInput",
        "name": "x",
        "datatype": "Int"
      },
      {
        "tag": "FromSessionStore",
        "key": "y",
        "datatype": "Int"
      },
      {
        "tag": "FromArgument",
        "datatype": "Int"
      }
    ],
    "subtrahend": {
      "tag": "Multiply",
      "multipliers" : [
      {
        "tag": "FromFormInput",
        "name": "h",
        "datatype": "Int"
      },
      {
        "tag": "Divide",
        "dividend": {
          "tag": "FromFormInput",
          "name": "m",
          "datatype": "Int"
        },
        "divisor": {
          "tag": "FromLocalStorage",
          "name": "n",
          "datatype": "Int"
        }
      },
      {
        "tag": "FromUrlParam",
        "key": "k",
        "datatype": "Int"
      }]
    }
  }
}
```

This generates the following function:

```purescript
makeOperation json = (\v -> ((x + y + v) - (h * (m / n) * k)))
```

Where `v` is passed in to the function (`FromArgument`), `x`, `h`, `m` are from form inputs (`FromFormInput`), `y` comes from sessionStorage (`FromSessionStorage`), `n` from localStorage (`FromLocalStorage`), and `k` is from a URL parameter (`FromUrlParam`).

`makeOperation` returns a composed function that when called retrieves all the data, does the calculation, and returns the result &ndash; a value or an array of errors.

An "operation", then, is anything that returns a value. These can be nested to form a tree where all the leaves are operations that directly return a value, and the nodes are operations that act on those values in some way.

You can see how this could be used to create, for example, a spreadsheet.

This is one module in a set of modules that will include a renderer/component library, a builder (no-code site generator), and a pub-sub system/event bus. Together, they will allow the creation of entire websites (or any part thereof) from fairly simple JSON configurations. In the builder's case, it will create the configuration in a WYSIWYG manner.