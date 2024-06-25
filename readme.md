# Home work NoSql

Find all books authored by "Author 5" that have been borrowed by any user but not yet returned.
List all books published before the year 1980 and have more than 5 copies available.
Find the top 5 most recently published books in the "Fantasy" genre.
Count the number of books available for each genre.
Find all books that have never been borrowed by any user.

Prerequisite
pull image
docker pull mongodb/mongodb-community-server:latest

run container
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest

install mongodb extension for vscode
connect with this:
mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10