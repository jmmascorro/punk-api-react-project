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
