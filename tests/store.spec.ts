import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

// Test 1: Add item to cart
test("Add item to cart", async ({ page }) => {
  test.setTimeout(60_000);

  await runSteps({
    page,
    userFlow: "Add product to cart",
    steps: [
      {
        description:
          "Navigate to https://demo.vercel.store/product/acme-drawstring-bag",
      },
      { description: "Click on any product" },
      { description: "Add the product to cart" },
      { description: "Wait until cart is visible" },
    ],
    assertions: [{ assertion: "Cart shows at least 1 item" }],
    test,
    expect,
  });
});

// Test 2: Search for a product
test("Search for a product", async ({ page }) => {
  test.setTimeout(60_000);

  await runSteps({
    page,
    userFlow: "Search for a product",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click the search icon" },
      { description: "Type 'shirt' in the search box" },
    ],
    assertions: [{ assertion: "Search results are visible on the page" }],
    test,
    expect,
  });
});

// Test 3: Browse a category
test("Browse a category", async ({ page }) => {
  test.setTimeout(60_000);

  await runSteps({
    page,
    userFlow: "Browse category",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on any category from the navigation menu" },
    ],
    assertions: [{ assertion: "Products are listed on the page" }],
    test,
    expect,
  });
});
