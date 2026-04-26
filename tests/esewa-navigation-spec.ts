import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Navigate to Services page", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Navigate to services",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Find and click Services from the navigation menu" },
    ],
    assertions: [
      { assertion: "Services page is visible" },
      { assertion: "List of services is displayed" },
      { assertion: "Each service has a title or name" },
      { assertion: "Page URL has changed from homepage" },
    ],
    test,
    expect,
  });
});
