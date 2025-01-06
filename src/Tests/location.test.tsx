import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Location from '../Components/Location/Location.tsx';

test('renders the location name when data is fetched', async () => {
    render(<Location />);

    // Check for loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the location name to appear
    await waitFor(() => expect(screen.getByText('Location: New York City')).toBeInTheDocument());
});
