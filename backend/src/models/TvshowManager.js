const AbstractManager = require("./AbstractManager");

class tvshowManager extends AbstractManager {
  constructor() {
    super({ table: "tvshow" });
  }

  insert(tvshow) {
    return this.connection.query(
      `insert into ${this.table} (title, quote) values (?, ?)`,
      [tvshow.title, tvshow.quote]
    );
  }

  update(tvshow) {
    return this.connection.query(
      `update ${this.table} set title = ?, quote = ? where id = ?`,
      [tvshow.title, tvshow.quote, tvshow.id]
    );
  }
}

module.exports = tvshowManager;
