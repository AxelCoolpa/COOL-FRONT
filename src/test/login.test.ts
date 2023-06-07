import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../components/Login";

test("renders Login component", () => {
  render(<Login />);
  
  // Verificar que el componente se renderiza correctamente
  expect(screen.getByText("Hello!")).toBeInTheDocument();
  expect(screen.getByText("Login to get started!")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
});

test("handles form submission", () => {
  render(<Login />);
  
  // Simular la entrada de datos en los campos de formulario
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "testuser" },
  });
  
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "testpassword" },
  });
  
  // Simular la presentación del formulario
  fireEvent.click(screen.getByRole("button", { name: "Login" }));
  
  // Verificar que los datos del formulario se imprimen en la consola
  expect(console.log).toHaveBeenCalledWith({
    username: "testuser",
    password: "testpassword",
  });
});
