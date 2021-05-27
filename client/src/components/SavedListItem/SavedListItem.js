import React from 'react';

function ResultListItem(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <img src={image} style={{maxHeight: "200px", margin: "30px 0"}} alt="jumbotron"/>
                <div className="card-body">
                    <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginRight: "8px", paddingTop: "17px"}}>View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn" style={{borderColor: "#EB6864", backgroundColor: "transparent", color: "#EB6864"}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem;