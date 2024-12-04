// import { create } from 'react-test-renderer';
// import { render, act, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// Mock the dependencies used in the Dashboard component
// jest.mock('../../../api/queries');

// const mockJournal = [
//   {
//     title: 'Homer Simpson',
//     description: 'Homer Simpson is a family man!',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: '643db8c388f22f9d7395a0f5'
//   },
//   {
//     "id": "643db8efcbc42d4aa4bc8d5b",
//     "title": "Bacon Cheese",
//     "description": "I want a bacon cheese sandwich!",
//     "createdAt": "2023-04-17T21:23:59.982Z",
//     "updatedAt": "2023-04-17T21:23:59.982Z"
//   },
// ]

// describe('Dashboard component', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   let component
//   let tree
//   beforeEach(() => {
//     component = create(<Dashboard />)
//     tree = component.toJSON()
//   })
//
//   // Snapshot test for the Dashboard component
//   it('renders correctly', async () => {});
//
//   it('should render component', async () => {
//     (api.getJournal as jest.MockedFunction<typeof api.getJournal>).mockResolvedValue(mockJournal)
//
//     await act(async () => {
//       render(<Dashboard />)
//     });
//     expect(screen.getByText('Homer Simpson')).toBeInTheDocument
//   });

// it('should add a new queries entry', async () => {
//   (api.getJournal as jest.MockedFunction<typeof api.getJournal>).mockResolvedValue([]);
//   (api.onCreateJournal as jest.MockedFunction<typeof api.onCreateJournal>).mockResolvedValue(mockJournal);
//
//   render(<Dashboard />)
//
//   await userEvent.type(screen.getByText('Title'), 'Homer Simpson')
//   await userEvent.type(screen.getByText('Description'), 'Homer Simpson is a family man!')
//   await userEvent.click(screen.getByText('Submit'))
//
//   await waitFor(() => expect(screen.getByText('Homer Simpson')).toBeInTheDocument)
// });
// });
