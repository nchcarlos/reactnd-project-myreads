import React, { Component } from 'react';
import Shelf from './Shelf';

class BookShelf extends Component {

    render() {
        const { books, shelfMap, shelfOptions, title } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{title}</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfMap.map((shelf) => {
                            const filteredBooks = books.filter((book) => (
                                book.currentShelf === shelf.value
                            ));
                            return (
                                <Shelf
                                    books={filteredBooks}
                                    shelfKey={shelf.value}
                                    shelfOptions={shelfOptions}
                                    shelfTitle={shelf.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShelf;