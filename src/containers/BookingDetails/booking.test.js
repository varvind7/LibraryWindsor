import React from "react";
import { shallow, configure } from "enzyme";
import { create } from "react-test-renderer";
import Booking from "./";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Booking render", () => {
	const setRouteLeaveHook = jest.fn();
	const historyMock = { push: jest.fn(), goBack: jest.fn() };

	let wrapper = shallow(
		<Booking.WrappedComponent
			history={historyMock}
			params={{
				router: setRouteLeaveHook
			}}
			location={{}}
			room={{}}
		/>
	);
	expect(wrapper).toMatchSnapshot();
});
