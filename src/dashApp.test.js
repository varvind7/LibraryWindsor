import React from "react";
import DashApp from "./dashApp";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { create } from "react-test-renderer";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
	shallow(<DashApp />);
});
