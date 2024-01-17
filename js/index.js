import { UI } from './ui.js';
import { Games } from './home.js';
import { Details } from './details.js';

let homePgae = new UI();
let Gamedisplay = new Games(homePgae);
let DetailsDisplay = new Details(homePgae);

Gamedisplay.getGames('mmorpg');
DetailsDisplay.events();



