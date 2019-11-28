import React from "react";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"

import Button from "../components/button";


describe("Button Test", () => {
    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button/>, div)
    });

    it('should render button correctly', () => {
        const {getByTestId} = render(<Button label="Click me"/>);
        expect(getByTestId('button').textContent).toBe("Click me")
    });
});