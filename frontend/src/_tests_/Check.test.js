import { render, screen } from '@testing-library/react';
import Check from "../pages/Check";

test('Buy Check page', () => {
    render(<>
        <Check/>
    </>);
    
    const linkElement = screen.getByText(/Check Electricty/i);
    expect(linkElement).toBeInTheDocument();
});
