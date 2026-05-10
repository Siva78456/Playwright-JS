import { test } from "@playwright/test"

test("Create Lead under TestLeaf", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('[id="username"]').fill("democsr2");
    await page.locator('#password').fill("crmsfa");
    await page.click('.decorativeSubmit');
    await page.click("//a[contains(text(),'CRM/SFA')]");
    await page.click("//a[contains(text(),'Create Lead')]");
    await page.locator('#createLeadForm_companyName').fill("Novac Technology");
    await page.locator('#createLeadForm_firstName').fill("Siva");
    await page.locator('#createLeadForm_lastName').fill("S");
    await page.click('.smallSubmit');
})