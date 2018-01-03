import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Hello } from "../";

describe("hello", () => {
	it("renders the title correctly", () => {
		const wrapper = shallow(<Hello
		/>);

		expect(wrapper.find("h1").text()).to.equal("Hello");
	});
});
