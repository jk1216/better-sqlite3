'use strict';
const native = require('../build/better_sqlite3.node');

native.copyfile('../.local/content.db', 'copy.db');
