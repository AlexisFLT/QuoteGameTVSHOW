const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (username, score) values (?, ?)`,
      [user.username, user.score]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set score = ? where id = ?`,
      [user.score, user.id]
    );
  }
}

module.exports = userManager;
