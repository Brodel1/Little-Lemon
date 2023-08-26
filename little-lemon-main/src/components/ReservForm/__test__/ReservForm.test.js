import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ReserveProvider } from 'context/reserveContext';
import ReservForm from '..';
import dayjs from 'dayjs';

const MockComp = () => {
    return (
        <ReserveProvider>
            <ReservForm />
        </ReserveProvider>
    )
}

describe('test ReservFrom', () => {

    test('test input Name', async () => {
        render(<MockComp />);
        const element = screen.getByPlaceholderText(/your name/i);
        await waitFor(() => {
            fireEvent.change(element, { target: { value: "test input name" } })
        });

        expect(element).toHaveValue("test input name");

    });

    test('test input Phone', async () => {
        render(<MockComp />);
        const element = screen.getByPlaceholderText(/Phone number/i);
        await waitFor(() => {
            fireEvent.change(element, { target: { value: "1234567890" } })
        });
        expect(element).toHaveValue("1234567890");
    });

    test('test input Comment', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/comment/i);
        await waitFor(() => {
            fireEvent.change(element, { target: { value: "test this is comment" } })
        });

        expect(element).toHaveValue("test this is comment");
    });

    test('test select Occasion', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/Occasion/i);

        fireEvent.keyDown(element.firstChild);
        fireEvent.click(await screen.findByText('Birthday'));
        expect(element).toHaveTextContent('Birthday');

        fireEvent.keyDown(element.firstChild);
        fireEvent.click(await screen.findByText('Anniversary'));
        expect(element).toHaveTextContent('Anniversary');
    });

    test('check disable Time select', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/Time/i);
        expect(element).toBeDisabled();
    });

    test('check disable Time select', async () => {
        render(<MockComp />);
        const element = screen.getByLabelText(/Date/i);
        fireEvent.click(element);
        fireEvent.click(await screen.findByText(/Today/i));

        const day = (dayjs().date()).toString().padStart(2, '0');
        const month = (dayjs().month() + 1).toString().padStart(2, '0'); // month start with 0-11
        const year = dayjs().year()
        const today = `${year}-${month}-${day}`
        expect(element).toHaveValue(today);

        const elementTime = screen.getByLabelText(/Time/i);
        expect(elementTime).not.toBeDisabled();
    });

    test('select Number of persons', async () => {
        render(<MockComp />);
        const element = document.getElementById('resGuestNum');
        fireEvent.click(element.childNodes[0].childNodes[0]);
        expect(screen.getByRole(/numberguest/i)).toHaveTextContent('1');

        fireEvent.click(element.childNodes[4].childNodes[0]);
        expect(screen.getByRole(/numberguest/i)).toHaveTextContent('5');

        fireEvent.click(element.childNodes[9].childNodes[0]);
        expect(screen.getByRole(/numberguest/i)).toHaveTextContent('10');
    })

    test('test invalid form with all blank', async () => {
        render(<MockComp />);

        await waitFor(() => {
            fireEvent.click(screen.getByText(/Reserve Now/i));
        });

        await waitFor(() => {
            expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
        });
    })

})
