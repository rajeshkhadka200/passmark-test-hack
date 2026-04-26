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

test("Navigate to About page", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Navigate to about page",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Find and click About Us from navigation or footer" },
    ],
    assertions: [
      { assertion: "About page content is visible" },
      { assertion: "Company information is present" },
      { assertion: "eSewa mission or vision is mentioned" },
    ],
    test,
    expect,
  });
});

test("Navigate back to homepage", async ({ page }) => {
  test.slow();
  await runSteps({
    page,
    userFlow: "Navigate back to homepage",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Click on any navigation link to go to inner page" },
      { description: "Click on eSewa logo to go back to homepage" },
    ],
    assertions: [
      { assertion: "Homepage is visible again" },
      { assertion: "eSewa logo is visible" },
      { assertion: "Homepage hero section is visible" },
    ],
    test,
    expect,
  });
});
