import React from "react";
import { shallow, configure } from "enzyme";
import { create } from "react-test-renderer";
import Feedback from "./";
import Adapter from "enzyme-adapter-react-16";
import feedbackActions from "../../redux/feedback/actions";

configure({ adapter: new Adapter() });

it("Should render Feedback without crashing", () => {
	const historyMock = { push: jest.fn(), goBack: jest.fn() };

	let wrapper = shallow(
		<Feedback.WrappedComponent
			history={historyMock}
			params={{
				router: jest.fn()
			}}
			location={{}}
			room={{}}
			getRooms={jest.fn()}
		/>
	);
	expect(wrapper).toMatchSnapshot();
});

it("should create an action to get rooms", () => {
	const expectedAction = {
		type: feedbackActions.MY_ROOM_REQUEST
	};
	expect(feedbackActions.getRooms()).toEqual(expectedAction);
});
