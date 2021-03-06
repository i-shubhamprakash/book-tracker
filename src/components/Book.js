import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {
        // Get the correct thumbnail URL, if not present set to an empty string
        let thumbnailURL = (this.props.book.imageLinks) ? (this.props.book.imageLinks.thumbnail) : (" ");

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnailURL})` }}></div>
                        <div className="book-shelf-changer">
                        <select value={this.props.thisShelf} onChange={(event) => {
                            this.props.changeBookShelf(this.props.book, event.target.value)
                            }}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}


//TypeChecking of props used in this component
Book.propTypes = {
    book: PropTypes.object,
    changeBookShelf: PropTypes.func,
    thisShelf:PropTypes.string
}



export default Book;