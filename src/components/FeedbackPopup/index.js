import React, { Component } from "react";
import { Button } from "reactstrap";

let dialogStyles = {
    width: "500px",
    maxWidth: "100%",
    margin: "0 auto",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "999",
    backgroundColor: "#eee",
    padding: "10px 20px 40px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column"
};

let dialogCloseButtonStyles = {
    marginBottom: "15px",
    padding: "3px 8px",
    cursor: "pointer",
    borderRadius: "50%",
    border: "none",
    width: "30px",
    height: "30px",
    fontWeight: "bold",
    alignSelf: "flex-end"
};

class FeedbackPopup extends Component {
    render() {
        let dialog = (
            <div style={dialogStyles}>
                <button
                    style={dialogCloseButtonStyles}
                    onClick={this.props.onClose}
                >
                    x
                </button>

                <div>
                    {this.props.children}
                    <h3 style={{ textAlign: "center" }}>Feedback Form</h3>
                    <br />
                    <br />
                    Select Room:
                    <select>
                        <option>Room 1</option>
                        <option>Room 2</option>
                        <option>Room 3</option>
                    </select>
                    <br />
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Write your Feedback here.."
                    ></textarea>
                    <br />
                    <br />
                    <Button color="success">Submit Feedback</Button>
                </div>
            </div>
        );

        if (!this.props.isOpen) {
            dialog = null;
        }
        return <div>{dialog}</div>;
    }
}

export default FeedbackPopup;
