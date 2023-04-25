"use strict";

function flattenAndSort(array) {
let my_array = []
            for (let item of array) {
                if (!Array.isArray(item)) {
                    my_array.push(item)
                }
                else {

                    for (let item2 of item) {
                        my_array.push(item2)
                    }
                }
            }
            
            return my_array.sort(function (a, b) { return a - b });
}
