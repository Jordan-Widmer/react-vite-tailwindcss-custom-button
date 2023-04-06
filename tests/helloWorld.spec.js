import { test, expect } from "@playwright/test";

test.describe("Toggle visibility of Hello, World! text", () => {
  test("should toggle visibility", async ({ page }) => {
    // Navigate to the app URL
    await page.goto("http://localhost:3000");

    // Check if the "Hello, World!" text is initially visible
    const initialText = await page.textContent("#hello-world");
    expect(initialText).toBe("Hello, World!");

    // Find the button and click it to toggle visibility
    await page.click("#toggle-button");

    // Check if the "Hello, World!" text is hidden
    const isHidden = !(await page.isVisible("#hello-world"));
    expect(isHidden).toBe(true);

    // Click the button again to toggle visibility back
    await page.click("#toggle-button");

    // Check if the "Hello, World!" text is visible again
    const visibleText = await page.textContent("#hello-world");
    expect(visibleText).toBe("Hello, World!");
  });
});


test.describe("Toggle button visibility", () => {
  test("should work correctly", async ({ page }) => {
    // Navigate to the app URL
    await page.goto("http://localhost:3000");

    // Check if the text "Hello, World!" is visible
    await expect(page.locator("#hello-world")).toBeVisible();

    // Click the toggle button
    await page.locator("#toggle-button").click();

    // Check if the text "Hello, World!" is hidden
    await expect(page.locator("#hello-world")).toBeHidden();

    // Click the toggle button again
    await page.locator("#toggle-button").click();

    // Check if the text "Hello, World!" is visible again
    await expect(page.locator("#hello-world")).toBeVisible();
  });
});
