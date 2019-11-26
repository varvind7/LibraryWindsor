import React, { Component } from "react";
import CircularBar from "../../components/CircularBar";
import { Table, Container } from "reactstrap";
import FeedbackPopup from "../../components/FeedbackPopup";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import feedbackActions from "../../redux/feedback/actions";
const { feedbackDetails } = feedbackActions;
class Feedback extends Component {
  state = {
    isOpen: false
  };

  render() {
    const percentage = 66;
    let rows = (
      <tr>
        <td>05/10/19</td>
        <td>ngfngngc</td>
        <td>
          Overall, I had a decent experience at the U of W. I had some memorable
          professors who taught me well and I met some lovely people who, to
          this day, I still consider good friends. I would like to point out
          that the French dept. was a disappointment as a few profs were, in my
          opinion, incompetent and/or lacked teaching skills. I wish I'd had a
          more enriching and fulfilling experience.
        </td>
        <td>
          {/* <CircularProgressbar value={percentage} text={`Anger:${percentage}%`} />; */}

          <CircularBar percentage={66} emotion="anger" />
          <CircularBar percentage={93} emotion="happiness" />
          <CircularBar percentage={85} emotion="sadness" />
          <CircularBar percentage={40} emotion="disgust" />
        </td>
      </tr>
    );

    return (
      <div>
        <Container>
          <br />
          <h1>FeedBack</h1>
          <br />
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="10%">Date</th>
                <th width="10%">Room Number</th>
                <th width="30%"> FeedBack</th>
                <th width="50%">Analysis Scores</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>

          <div>
            <p>If you would like to write a feedback, </p>
            <Button data-testid="button"
              color="secondary"
              onClick={e => this.setState({ isOpen: true })}
            >
              Click Here
            </Button>

            <FeedbackPopup
              isOpen={this.state.isOpen}
              onClose={e => this.setState({ isOpen: false })}
            ></FeedbackPopup>
          </div>
        </Container>
      </div>
    );
  }
}
export default connect(
	state => ({
		...state.Feedback
	}),
	{ feedbackDetails }
)(Feedback);

