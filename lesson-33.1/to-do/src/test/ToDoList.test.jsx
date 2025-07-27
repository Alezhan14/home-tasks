import { describe, it, expect } from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/vitest"
import HeadingToDo from "../components/HeadingToDo.jsx";
import Form from "../components/Form.jsx";
import {Provider} from "react-redux";
import store from "../redux-toolkit/store.js";
import ToDoList from "../components/ToDoList.jsx";

describe('Heading', () => {
    it('has heading', () => {
        render(<HeadingToDo />);
        expect(screen.getByText('To Do List')).toHaveTextContent('To Do List')
    })
})

describe('not add empty to do', () => {
    render(
        <Provider store={store}>
            <Form />
            <ToDoList />
        </Provider>
    );

    it('not add empty to do', () => {
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        const items = screen.queryAllByRole('listitem');
        expect(items.length).toBe(0);
    })
})

describe('should allow numbers and letters in the input field', () => {
    it('Are numbers and letters allowed', () => {
        const input = screen.getByPlaceholderText('Enter text to do');

        fireEvent.change(input, { target: { value: "123" } });
        expect(input.value).toBe("123");
    })
})

describe('check text of new to do', () => {
    it('input text and new to do text the same', () => {
        const input = screen.getByPlaceholderText('Enter text to do');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'Buy milk' } });
        fireEvent.click(submitButton);

        const newItem = screen.getByText('Buy milk');
        expect(newItem).toBeInTheDocument();

    })
})

describe('clean field after submit', () => {
    it('field cleaned', () => {
        const input = screen.getByPlaceholderText('Enter text to do');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'Buy milk' } });
        fireEvent.click(submitButton);

        expect(input).toHaveValue('');
    })
})