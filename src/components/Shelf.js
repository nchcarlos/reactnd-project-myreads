import React from 'react';
import BookList from './BookList';

const Shelf = ({ books, shelfOptions, shelfTitle }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <BookList
            books={books}
            moveOptions={shelfOptions}
        />
    </div>
);

export default Shelf;