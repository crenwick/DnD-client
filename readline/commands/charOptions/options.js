'use strict';

const skills = require('./skills.js');
const deity = require('./deity.js');
const equipment = require('./equipment.js').equipment;
const abilityScores = require('./abilityScores.js').abilityScores;
const alignment = require('./alignment.js');
const classSelect = require('./classSelect.js');
const race = require('./race.js');
const name = require('./name.js');

module.exports = { skills, deity, equipment, abilityScores, alignment, classSelect, race, name };