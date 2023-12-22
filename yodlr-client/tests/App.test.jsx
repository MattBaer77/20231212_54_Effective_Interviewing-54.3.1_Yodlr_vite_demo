import {render, screen} from '@testing-library/react'
import App from '../src/App'
import { expect } from 'vitest';

it('renders without crashing (SMOKE TEST)', () => {

  render(<App />);

});

it('renders correctly', () => {

  const app = render(<App />);
  expect(app).toBeDefined()

  const NavBar = screen.getByTestId('NavBar')
  expect(NavBar).toHaveTextContent("YODLR")
  expect(NavBar).toHaveTextContent("Signup")
  expect(NavBar).toHaveTextContent("Admin Page")

  const Home = screen.getByTestId('Home')
  expect(Home).toHaveTextContent("HOME COMPONENT")

  
})