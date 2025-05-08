import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

// Ensure the supabaseClient module exists in the specified path
// or update the path to the correct location if necessary.