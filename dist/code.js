/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/codeMessageHandler.ts":
/*!*******************************************!*\
  !*** ./src/helpers/codeMessageHandler.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "handleEvent": () => (/* binding */ handleEvent)
/* harmony export */ });
const eventListeners = [];
const dispatch = (action, data) => {
    figma.ui.postMessage({ action, data });
};
const handleEvent = (type, callback) => {
    eventListeners.push({ type, callback });
};
figma.ui.onmessage = (message) => {
    for (let eventListener of eventListeners) {
        if (message.action === eventListener.type)
            eventListener.callback(message.data);
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_codeMessageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/codeMessageHandler */ "./src/helpers/codeMessageHandler.ts");

figma.showUI(__html__, { width: 240, height: 400 });
let selection = figma.currentPage.selection;
figma.on("selectionchange", () => {
    selection = figma.currentPage.selection;
    if (selection[0].type === "RECTANGLE") {
        if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 1 && selection[0].fills[0].color.g === 0 && selection[0].fills[0].color.b === 0) {
            (0,_helpers_codeMessageHandler__WEBPACK_IMPORTED_MODULE_0__.dispatch)('brand', 'red');
        }
        else if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 0 && selection[0].fills[0].color.g === 1 && selection[0].fills[0].color.b === 0) {
            (0,_helpers_codeMessageHandler__WEBPACK_IMPORTED_MODULE_0__.dispatch)('brand', 'green');
        }
        else if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 0 && selection[0].fills[0].color.g === 0 && selection[0].fills[0].color.b === 1) {
            (0,_helpers_codeMessageHandler__WEBPACK_IMPORTED_MODULE_0__.dispatch)('brand', 'blue');
        }
    }
});
(0,_helpers_codeMessageHandler__WEBPACK_IMPORTED_MODULE_0__.handleEvent)('brand', (data) => {
    switch (data) {
        case 'red':
            selection[0].fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
            break;
        case 'green':
            selection[0].fills = [{ type: 'SOLID', color: { r: 0, g: 1, b: 0 } }];
            break;
        case 'blue':
            selection[0].fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
            break;
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1AsMkJBQTJCLGNBQWM7QUFDekM7QUFDTztBQUNQLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQ3RFLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVkscUVBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVkscUVBQVE7QUFDcEI7QUFDQTtBQUNBLENBQUM7QUFDRCx3RUFBVztBQUNYO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCLG9CQUFvQjtBQUNoRjtBQUNBO0FBQ0Esb0NBQW9DLHdCQUF3QixvQkFBb0I7QUFDaEY7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0Isb0JBQW9CO0FBQ2hGO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2hlbHBlcnMvY29kZU1lc3NhZ2VIYW5kbGVyLnRzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbiwgZGF0YSkgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgYWN0aW9uLCBkYXRhIH0pO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVFdmVudCA9ICh0eXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goeyB0eXBlLCBjYWxsYmFjayB9KTtcbn07XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGZvciAobGV0IGV2ZW50TGlzdGVuZXIgb2YgZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBldmVudExpc3RlbmVyLnR5cGUpXG4gICAgICAgICAgICBldmVudExpc3RlbmVyLmNhbGxiYWNrKG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFuZGxlRXZlbnQsIGRpc3BhdGNoIH0gZnJvbSAnLi4vaGVscGVycy9jb2RlTWVzc2FnZUhhbmRsZXInO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAyNDAsIGhlaWdodDogNDAwIH0pO1xubGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvblswXS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb25bMF0uZmlsbHNbMF0udHlwZSA9PT0gXCJTT0xJRFwiICYmIHNlbGVjdGlvblswXS5maWxsc1swXS5jb2xvci5yID09PSAxICYmIHNlbGVjdGlvblswXS5maWxsc1swXS5jb2xvci5nID09PSAwICYmIHNlbGVjdGlvblswXS5maWxsc1swXS5jb2xvci5iID09PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnYnJhbmQnLCAncmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uWzBdLmZpbGxzWzBdLnR5cGUgPT09IFwiU09MSURcIiAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuciA9PT0gMCAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuZyA9PT0gMSAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuYiA9PT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ2JyYW5kJywgJ2dyZWVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uWzBdLmZpbGxzWzBdLnR5cGUgPT09IFwiU09MSURcIiAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuciA9PT0gMCAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuZyA9PT0gMCAmJiBzZWxlY3Rpb25bMF0uZmlsbHNbMF0uY29sb3IuYiA9PT0gMSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ2JyYW5kJywgJ2JsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuaGFuZGxlRXZlbnQoJ2JyYW5kJywgKGRhdGEpID0+IHtcbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICAgIHNlbGVjdGlvblswXS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmVlbic6XG4gICAgICAgICAgICBzZWxlY3Rpb25bMF0uZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAxLCBiOiAwIH0gfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgICAgICBzZWxlY3Rpb25bMF0uZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAxIH0gfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==