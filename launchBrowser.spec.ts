import { test } from "@playwright/test";

test("Laucnh browser", async ({page}) => {
    // const launch = await chromium.launch({headless:false});
    // const BrowserContext = await launch.newContext();
    // const page = await BrowserContext.newPage();
    await page.goto("https://www.hotstar.com/in/onboarding/profile");
    await page.waitForTimeout(3000)
}
)