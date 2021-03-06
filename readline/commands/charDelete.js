"use strict";

const chalk = require("chalk");

const superagent = require("superagent");

const rl = require("../readline");

/**
 * Deletes a character from a user's account + the database entirely.
 *
 * @param {*} character - this is the selected character object for the logged-in user.
 */
async function deleteCharacter(character) {
  return new Promise(async (resolve, reject) => {
    try {
      let confirm = await rl.ask(
        `\nConfirm deletion of ${character.name}? (Y/n): `
      );

      if (confirm.toUpperCase() === "Y") {
        await superagent.delete(
          `https://cf-dnd-character-creator.herokuapp.com/v1/api/character/${character._id}`
        );
        console.log(
          `\nYour character, ${character.name}, has been claimed by ${character.deity}!`
        );
      } else if (confirm.toUpperCase() === "N") {
        console.log(`${character.name} lives to fight another day.`);
      } else {
        console.log("Command not recognized. Returning to main menu...");
      }

      resolve();
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = deleteCharacter;
