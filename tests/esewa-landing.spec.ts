import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

// Test 1: check if the homepage loads correctly
test("Homepage loads correctly", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow:
      "Validate eSewa homepage loads with key elements and basic interactions",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Click on the eSewa logo" },
    ],
    assertions: [
      { assertion: "eSewa logo is visible in the header" },
      { assertion: "User remains on or is redirected to homepage" },
      { assertion: "Top navigation menu with multiple items is visible" },
      { assertion: "Page title contains the word eSewa" },
      { assertion: "Hero section displays a headline or key message" },

      {
        assertion:
          "Clicking the eSewa logo keeps or brings the user to the homepage",
      },
      { assertion: "Navigation menu items appear clickable or interactive" },
    ],
    test,
    expect,
  });
});

// Test 2: check all the Hero section content
test("Hero section has key content", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow: "Check hero section",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Focus on the hero section at the top of the page" },
      {
        description:
          "Click on the primary call-to-action button in the hero section",
      },
    ],
    assertions: [
      { assertion: "Hero section contains a clear headline or tagline" },
      {
        assertion:
          "A primary call to action button is visible in the hero section",
      },
      {
        assertion:
          "A banner image or visual element is displayed in the hero section",
      },
      {
        assertion:
          "Clicking the call to action button leads to a relevant section or page",
      },
      {
        assertion:
          "Page content changes or scrolls after clicking the call-to-action button",
      },
    ],
    test,
    expect,
  });
});

// Test 3: Download app section
test("Download app section is visible", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow: "Check download app section",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Scroll down to find the download app section" },
      { description: "Click on the Google Play or App Store download button" },
    ],
    assertions: [
      {
        assertion:
          "Download section is visible with mobile app promotion content",
      },
      { assertion: "App store download button is visible and clickable" },
      { assertion: "Google play download button is visible and clickable" },

      {
        assertion:
          "Clicking a download button attempts to open an external app store link",
      },
      {
        assertion:
          "The download buttons are clearly associated with mobile app installation",
      },
    ],
    test,
    expect,
  });
});

// Test 4: check Featured Services section
test("Click View Details on a service", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow: "View service details",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Scroll down to find the Featured services section" },
      { description: "Click on any service or View Details button" },
    ],
    assertions: [
      { assertion: "Service details page or modal is visible" },
      { assertion: "Service name or title is visible" },
      { assertion: "Service description is visible" },
      { assertion: "A back button or close button is visible" },
    ],
    test,
    expect,
  });
});
