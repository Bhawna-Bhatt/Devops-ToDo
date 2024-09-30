// describe("Adding two numbers", () => {
//   it("should produce their sum", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoListApp from "./ToDoApp";

describe("ToDoListApp", () => {
  beforeEach(() => {
    render(<ToDoListApp />);
  });

  test("renders input and add button", () => {
    const input = screen.getByPlaceholderText(/enter todo/i);
    screen.debug();
    const button = screen.getByRole("button", { name: /add todo/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  //   test("allows users to add a todo item", () => {
  //     const input = screen.getByPlaceholderText(/enter todo/i);
  //     const button = screen.getByRole("button", { name: /plus circle/i });

  //     fireEvent.change(input, { target: { value: "Test Todo" } });
  //     fireEvent.click(button);

  //     expect(screen.getByText(/test todo/i)).toBeInTheDocument();
  //   });

  //   test("allows users to delete a todo item", () => {
  //     const input = screen.getByPlaceholderText(/enter todo/i);
  //     const button = screen.getByRole("button", { name: /plus circle/i });

  //     fireEvent.change(input, { target: { value: "Test Todo" } });
  //     fireEvent.click(button);

  //     const deleteButton = screen.getByRole("button", { name: /trash-alt/i });
  //     fireEvent.click(deleteButton);

  //     expect(screen.queryByText(/test todo/i)).not.toBeInTheDocument();
  //   });

  //   test("allows users to edit a todo item", () => {
  //     const input = screen.getByPlaceholderText(/enter todo/i);
  //     const button = screen.getByRole("button", { name: /plus circle/i });

  //     fireEvent.change(input, { target: { value: "Test Todo" } });
  //     fireEvent.click(button);

  //     const editButton = screen.getByRole("button", { name: /pen/i });
  //     fireEvent.click(editButton);

  //     const editInput = screen.getByDisplayValue(/test todo/i);
  //     fireEvent.change(editInput, { target: { value: "Updated Todo" } });

  //     const updateButton = screen.getByRole("button", { name: /update/i });
  //     fireEvent.click(updateButton);

  //     expect(screen.getByText(/updated todo/i)).toBeInTheDocument();
  //   });

  //   test("allows users to shift todo items up", () => {
  //     const input = screen.getByPlaceholderText(/enter todo/i);
  //     const button = screen.getByRole("button", { name: /plus circle/i });

  //     fireEvent.change(input, { target: { value: "First Todo" } });
  //     fireEvent.click(button);
  //     fireEvent.change(input, { target: { value: "Second Todo" } });
  //     fireEvent.click(button);

  //     const shiftUpButton = screen.getAllByRole("button", {
  //       name: /chevron up/i,
  //     })[1]; // second todo's shift up button
  //     fireEvent.click(shiftUpButton);

  //     expect(screen.getAllByText(/first todo/i)[0]).toBeInTheDocument(); // First todo should now be above second todo
  //   });

  //   test("allows users to shift todo items down", () => {
  //     const input = screen.getByPlaceholderText(/enter todo/i);
  //     const button = screen.getByRole("button", { name: /plus circle/i });

  //     fireEvent.change(input, { target: { value: "First Todo" } });
  //     fireEvent.click(button);
  //     fireEvent.change(input, { target: { value: "Second Todo" } });
  //     fireEvent.click(button);

  //     const shiftDownButton = screen.getByRole("button", {
  //       name: /chevron down/i,
  //     }); // first todo's shift down button
  //     fireEvent.click(shiftDownButton);

  //     expect(screen.getAllByText(/second todo/i)[0]).toBeInTheDocument(); // Second todo should now be above first todo
  //   });
});
