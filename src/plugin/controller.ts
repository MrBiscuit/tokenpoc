import { Rectangle } from 'recharts';
import {handleEvent, dispatch} from '../helpers/codeMessageHandler';


figma.showUI(__html__,{width: 240, height: 400});

let selection = figma.currentPage.selection
figma.on("selectionchange", () => {
    selection = figma.currentPage.selection

    if (selection[0].type === "RECTANGLE") {
        if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 1&& selection[0].fills[0].color.g === 0&& selection[0].fills[0].color.b === 0) {
            dispatch('brand', 'red')
        }   else if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 0&& selection[0].fills[0].color.g === 1&& selection[0].fills[0].color.b === 0) {
            dispatch('brand', 'green')
        }else if (selection[0].fills[0].type === "SOLID" && selection[0].fills[0].color.r === 0&& selection[0].fills[0].color.g === 0&& selection[0].fills[0].color.b === 1) {
            dispatch('brand', 'blue')
        }
    }
});

handleEvent('brand', (data) => {

    switch (data) {
        case 'red':
            selection[0].fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]
            break;
        case 'green':
            selection[0].fills = [{type: 'SOLID', color: {r: 0, g: 1, b: 0}}]
            break;
        case 'blue':
            selection[0].fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 1}}]
            break;
    }
});


