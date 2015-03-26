(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
          return (root.returnExportsGlobal = factory());
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        root['Chartist.plugins.axisLabel'] = factory();
    }
}(this, function () {

    /**
     * This Chartist plugin creates axis labels.
     *
     */
    (function (window, document, Chartist, $) {
        'use strict';

        var defaultOptions = {
            axisX: {
                name: false,
                className: 'ct-x-axis-label'
            },
            axisY: {
                name: false,
                className: 'ct-y-axis-label'
            }
        };

        Chartist.plugins = Chartist.plugins || {};

        Chartist.plugins.axisLabel = function (options) {

            options = Chartist.extend({}, defaultOptions, options);

            return function axisLabel(chart) {
                var $chart = $(chart.container);

                if (options.axisX.name) {
                    $chart
                        .append('<div class="ct-axis-label '+ options.axisX.className +'">' +
                            options.axisX.name +
                            '</div>')
                        .find('.' + options.axisX.className);
                }

                if (options.axisY.name) {
                    $chart
                        .append('<div class="ct-axis-label '+ options.axisY.className +'">' +
                            options.axisY.name +
                            '</div>')
                        .find('.' + options.axisY.className);
                }
            };

        };

    }(window, document, Chartist, $));

    return Chartist.plugins.axisLabel;

}));
