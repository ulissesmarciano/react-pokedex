import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useRef } from 'react';

const SearchBarTestWrapper = ({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  const ref = useRef(null);

  return <SearchBar value={value} onChange={onChange} $ref={ref} />;
};

describe('SearchBar', () => {
  const handleChange = vi.fn();
  let value = '';

  beforeEach(() => {
    handleChange.mockClear();
    value = '';
    render(<SearchBarTestWrapper onChange={handleChange} value={value} />);
  });

  it('should render the search input', () => {
    const input = screen.getByPlaceholderText(/name or number/i);
    expect(input).toBeInTheDocument();
  });

  it('allows typing in the input', async () => {
    const input = screen.getByPlaceholderText(/name or number/i);
    const user = userEvent.setup();

    await user.type(input, 'pikachu');
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onChange correct number of times', async () => {
    const input = screen.getByPlaceholderText(/name or number/i);
    const user = userEvent.setup();

    await user.type(input, 'pi');

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('renders the search icon', () => {
    const icon = screen.getByAltText(/ícone de pesquisa/i);
    expect(icon).toBeInTheDocument();
  });
});
