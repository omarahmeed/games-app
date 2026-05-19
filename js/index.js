import { UI } from './ui.js';
import { Games } from './home.js';
import { Details } from './details.js';

const ui      = new UI();
const games   = new Games(ui);
const details = new Details(ui);

details.bindEvents();
games.getGames('mmorpg');
