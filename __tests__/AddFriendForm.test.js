import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddFriendForm from './AddFriendForm';


//To do: solve the problem with the Jest setup. Tests aren't running.

/*

describe('AddFriendForm validation', () => {
  
    beforeEach(() => {
        render(<AddFriendForm />);
    });

    // Name validation tests
    test('should show error when name is empty', async () => {
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Please provide your friend's name.")).toBeInTheDocument();
        });
    });

    test('should show error when name is less than 9 characters', async () => {
        userEvent.type(screen.getByLabelText("Friend's name:"), 'Short Nm');
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Friend's name must have at least 9 characters.")).toBeInTheDocument();
        });
    });

    test('should show error when name has less than 2 words', async () => {
        userEvent.type(screen.getByLabelText("Friend's name:"), 'OneWordName');
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Friend's name must contain at least 2 words.")).toBeInTheDocument();
        });
    });

    // Email validation tests
    test('should show error when email is empty', async () => {
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Please provide your friend's email.")).toBeInTheDocument();
        });
    });

    test('should show error when email format is invalid', async () => {
        userEvent.type(screen.getByLabelText("Friend's email:"), 'invalid-email');
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Format invalid.")).toBeInTheDocument();
        });
    });

    // Image validation tests
    test('should show error when image is not selected', async () => {
        userEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText("Please choose an image option.")).toBeInTheDocument();
        });
    });

 

});*/

