import React, { Component } from 'react';
import SavedListItem from "../SavedListItem/SavedListItem";

class ResultItem extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <SavedListItem 
            key={book._id}
            id={book._id}
            title={book.title}
            link={book.link}
            authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
            image={book.image ? book.image : "https://via.placeholder.com/300"}
            description={book.description}
            deleteGoogleBook={this.props.deleteGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultItem


