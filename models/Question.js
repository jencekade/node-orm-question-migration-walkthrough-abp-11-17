'use strict';

const db = require("../config/db")

class Question {
  static CreateTable() {

    const sql =
      `CREATE TABLE questions (
          id INTEGER PRIMARY KEY,
          content TEXT
        )`;

    return new Promise(function(resolve) {
      db.run(sql, function() {
        resolve("Success");
      });
    });

  }
}


module.exports = Question;

/*I need to understand why
the promise wraps around the const sql in the spoiler tutorial.
if it doesn't appear it needs to be made synchronous.
Doesn't the table just gets made automatically?
I know that the db.run has
to be made synchronous
and needs to be resolve before the next code
so that needs to be wrapped in promise function */
