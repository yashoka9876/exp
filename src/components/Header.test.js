import { render, screen } from "@testing-library/react"
import Headers from "./Header"
import { Provider } from "react-redux";
import store from '../store'
import { MemoryRouter } from "react-router-dom";
test('cheking', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Headers /> {/* Render your Headers component */}
            </MemoryRouter>
        </Provider>

    );
  
    const nameElement = screen.getByText('Expenses');
    expect(nameElement).toBeInTheDocument();
  });