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

test("Navigate to Merchant section", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Navigate to merchant section",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Find and click Merchant or Business from navigation" },
    ],
    assertions: [
      { assertion: "Merchant page content is visible" },
      { assertion: "Merchant registration or info is present" },
      { assertion: "A call to action button is visible" },
    ],
    test,
    expect,
  });
});

test("Navigate to Help or FAQ page", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Navigate to help page",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Find and click Help or FAQ from navigation or footer" },
    ],
    assertions: [
      { assertion: "Help or FAQ page is visible" },
      { assertion: "At least one FAQ question is visible" },
      { assertion: "Contact support option is visible" },
    ],
    test,
    expect,
  });
});
