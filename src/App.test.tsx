import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./components/Login";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

test("Testing UX login flow", () => {
  // We need to intialize our browser router and establish routes so the components can be rendered in the DOM.
  // My recommendation would be to only redner the routes you need for the given test.

  render(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // We then need to intialize our email and password DOM variables.
  // We can do this by setting a "data-testid" on our elements in their respective React component Files
  const emailInput = screen.getByTestId("email-input");
  const passwordInput = screen.getByTestId("password-input");

  // Utilizing the fireEvent.change handler we can provide a DOM input component and include what the target should be.
  // This is definitely not best practice to use the actual user data but should be fine for an example
  fireEvent.change(emailInput, { target: { value: "user123@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "passw0rd123" } });

  // We then need to find the submit button and fire a userEvent.click in order to submit the form/initiate a login request
  userEvent.click(screen.getByTestId("submit"));

  // After all this we are testing if we had a successful login if we have been redirected to the profile page!
  expect(screen.getByTestId("profile-page")).toBeInTheDocument();
});

test("Testing if user enters a valid password")
