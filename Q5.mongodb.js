/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('dskola');



// Search for documents in the current collection.
db.books.find({ borrowed_by: [] })