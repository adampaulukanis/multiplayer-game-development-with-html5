/**
 *
 * @param {number} id
 * @param {string} label
 * @param {string} name
 * @constructor
 */
var Player = function (id, label, name) {
  /** Each player has the unique ID. */
  this.id = id;

  /** What each player will print on the board. Also should be unique between
   * players. */
  this.label = label;

  /** Human-readable name. */
  this.name = name;
};

module.exports = Player;
