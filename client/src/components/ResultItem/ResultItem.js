import React, { Component } from 'react';

class ResultItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#238636",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }



    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }
    render () {
        
        const {book} = this.props

        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <img src={this.props.image} style={{maxHeight: "200px", margin: "30px 0"}} alt="book"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginRight: "6px", paddingTop: "17px"}}>View Book</a>
                        <button onClick={this.onClickFunc} className="btn" style={{borderColor: "#EB6864", backgroundColor: "transparent", color: "#EB6864"}}>{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultItem;





