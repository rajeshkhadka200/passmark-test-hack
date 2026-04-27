import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Check empty fields in login", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Check empty fields in login",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Leave all fields empty" },
      { description: "Click on the Login button" },
    ],
    assertions: [
      { assertion: "Login form is visible" },
      { assertion: "Phone number input field is present" },
      { assertion: "Password input field is present" },
      { assertion: "Sign In button is visible inside the modal" },
      { assertion: "An error message is shown for empty fields" },
    ],
    test,
    expect,
  });
});
