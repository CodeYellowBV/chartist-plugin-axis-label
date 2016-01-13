(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['chartist', 'jquery'], function (chartist, jquery) {
            return (root.returnExportsGlobal = factory(chartist, jquery));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('chartist'), require('jquery'));
    } else {
        root['Chartist.plugins.axisLabel'] = factory(root.Chartist, root.jQuery);
    }
}(this, function (Chartist, $) {

    /**
     * This Chartist plugin creates axis labels.
     *
     */
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
                        '<span>' + options.axisX.name + '</span>' +
                        '</div>')
                    .find('.' + options.axisX.className);
            }

            if (options.axisY.name) {
                $chart
                    .append('<div class="ct-axis-label '+ options.axisY.className +'">' +
                        '<span>' + options.axisY.name + '</span>' +
                        '</div>')
                    .find('.' + options.axisY.className);
            }
        };

    };

    return Chartist.plugins.axisLabel;
}));
