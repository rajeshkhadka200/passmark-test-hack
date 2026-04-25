import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

// Test 1: check if the homepage loads correctly
test("Homepage loads correctly", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow: "Check eSewa homepage",
    steps: [{ description: "Navigate to https://esewa.com.np" }],
    assertions: [
      { assertion: "eSewa logo is visible on the page" },
      { assertion: "Homepage hero section is visible" },
      { assertion: "Page title contains eSewa" },
      { assertion: "Navigation menu is visible" },
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
      { description: "Look at the hero section" },
    ],
    assertions: [
      { assertion: "A headline or tagline is visible" },
      { assertion: "A call to action button is visible" },
      { assertion: "Hero image or banner is visible" },
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
    ],
    assertions: [
      { assertion: "Download on App Store button or link is visible" },
      { assertion: "Get it on Google Play button or link is visible" },
      { assertion: "App download section is clearly visible" },
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

// Test 5: checking if Footer is complete
test("Footer has all important information", async ({ page }) => {
  test.setTimeout(60_000);
  await runSteps({
    page,
    userFlow: "Check footer content",
    steps: [
      { description: "Navigate to https://esewa.com.np" },
      { description: "Scroll all the way down to the footer" },
    ],
    assertions: [
      { assertion: "Footer is visible at the bottom" },
      { assertion: "Contact information is present in footer" },
      { assertion: "Social media links are visible in footer" },
      { assertion: "Copyright information is visible" },
    ],
    test,
    expect,
  });
});
