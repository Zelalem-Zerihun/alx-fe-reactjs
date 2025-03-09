import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");

    await userEvent.type(input, "New Todo");
    await userEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo", async () => {
    render(<TodoList />);
    const todoText = screen.getByTestId("todo-text-1");

    await userEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");

    await userEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId("delete-button-1");

    await userEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
