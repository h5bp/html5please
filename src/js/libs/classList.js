/*
 * A minimal classList fallback.
 * By Devon Govett
 * MIT LICENSE
 */

classList = (function() {
    var re = /\s+/,
        indexOf = Array.prototype.indexOf || function(item) {
            for (var i = 0, len = this.length; i < len; i++)
                if (this[i] === item) return i;

            return -1;
        },
        update = function(node, fn) {
            return function(value) {
                var classes = node.className.split(re),
                    index = indexOf.call(classes, value);
            
                fn(classes, index, value);
                node.className = classes.join(" ");
            }
        };

    return function(node) {
        return node.classList || {
            add: update(node, function(classes, index, value) {
                ~index || classes.push(value);
            }),
        
            remove: update(node, function(classes, index, value) {
                ~index && classes.splice(index, 1);
            }),
        
            toggle: update(node, function(classes, index, value) {
                ~index ? classes.splice(index, 1) : classes.push(value);
            })
        };
    };
})();