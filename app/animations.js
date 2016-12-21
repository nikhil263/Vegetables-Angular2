"use strict";
var core_1 = require('@angular/core');
exports.pageTransition = core_1.trigger('transition', [
    core_1.state('in', core_1.style({ transform: 'translateY(0)', opacity: '0' })),
    core_1.transition('void => *', [
        core_1.style({ transform: 'translateY(-15px)', opacity: '1' }),
        core_1.animate(300)
    ])
]);
//# sourceMappingURL=animations.js.map