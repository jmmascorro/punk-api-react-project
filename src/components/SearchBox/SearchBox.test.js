import SearchBox from "./SearchBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the form", () => {

    render(<SearchBox />);

    const searchBox = screen.getByRole("form");  //allows to search by name of component, basically.
    
    expect(searchBox).toBeInTheDocument();

});

it("should render the basic input fields", () => {

    render(<SearchBox />);

    const searchInput = screen.getByRole("textbox");
    
    expect(searchInput).toBeTruthy();

});

it("should render beer cards based on search term", () => {

    render(<SearchBox />);

    const searchInput = screen.getByRole("textbox");
    
    userEvent.type(searchInput, "trashy");

    const success = screen.getByDisplayValue("trashy");

    expect(success).toBeInTheDocument(); 

});
