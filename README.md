# chartist-plugin-axis-label

Implements axis labels (label on the X and Y axis) for [Chartist](https://github.com/gionkunz/chartist-js) charts.

This is a very basic plugin that could also be done outside the chart, but as it directly relates to the chart I wanted to include this in the chart.

## Install

As styles are very different with each project, no CSS is included. You can copy paste this to use as base:

```scss
.ct-chart {
    position: relative;
}

.ct-axis-label {
    position: absolute;
}

.ct-x-axis-label {
    bottom: 0;
    left: 50%;
}

.ct-y-axis-label {
    transform: rotate(-90deg);
    top: 50%;
    left: -20px;
}
```

## Usage

In an example chart:

```js
new Chartist.Bar('.ct-chart', data, {
        stackBars: true,
    },
    plugins: [
        Chartist.plugins.axisLabel({
            axisX: {
                name: 'Dollars'
            },
            axisY: {
                name: 'Quarters'
            }
        })
    ]
});
```

| __Option__ | __Description__ | __Type__ | __Default__ |
| ---        | ---             | ---      | ---         |
| `axisX.name` / `axisY.name` | Name of axis label. | `string` | `false` |
| `axisX.className` / `axisY.className` | Classname of axis label. | `string` | `ct-x-axis-label` / `ct-y-axis-label` |

