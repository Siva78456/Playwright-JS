// import { test } from "@playwright/test";

// test("Launch Salesforce", async ({ page }) => {
//     await page.goto("https://login.salesforce.com/");
//     await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
//     await page.locator('#password').fill("TestLeaf@2025");
//     await page.locator('#Login').click()
// })

// Using Locator

// import { test } from "@playwright/test";

// test("Launch Salesforce", async ({ page }) => {
//     await page.goto("https://login.salesforce.com/");
//     await page.locator('[aria-describedby="error"]').first().fill("dilipkumar.rajendran@testleaf.com");
//     await page.locator('[aria-describedby="error"]').last().fill("TestLeaf@2025");
//     await page.locator('#Login').click()
// })

// using Xpath

import {test} from "@playwright/test"

test ("relative Xpath",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.click("//input[@id='twotabsearchtextbox']/preceding-sibling::label")
})