import '@testing-library/jest-dom/extend-expect';
import Button, { ButtonProps } from './index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Button />', () => {
  const props: ButtonProps = {
    size: 'small',
    onClick: jest.fn(),
    children: 'Button',
  };
  it('should cause an event', async () => {
    render(<Button {...props}>{props.children}</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should check if the button exist', () => {
    props.children = 'Click Button';
    render(<Button {...props}>{props.children}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Button');
  });
});
