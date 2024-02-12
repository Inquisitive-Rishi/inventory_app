models:

game -> title, release_date, description, publisher, price, genre, url
gameInstance -> game, imprint, enum ('available', 'loaned', 'reserved'), due_back
genre -> name, description, url
publisher -> name, estd_date
