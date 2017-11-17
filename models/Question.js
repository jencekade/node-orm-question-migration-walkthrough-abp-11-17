'use strict';

const db = require("../config/db")

class Question {
  static CreateTable() {
    return new Promise(function(resolve) {
      const sql =
        CREATE TABLE questions(
          id INTEGER KEY PRIMARY,
          context TEXT
        );

      db.run(sql, function() {
        resolve("Success");
      });
    });
  }
}


module.exports = Question;

/*I need to understand why 
the promise wraps around the const sql 
if it doesn't appear it needs to be made synchronous. 
Doesn't the table
I know that the db.run has
to be made synchronous
and needs to be resolve before the next code */