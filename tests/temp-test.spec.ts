import {test} from '../fixture/hooks-fixture'

test("Temp Test",async ({page,loginPage,commonPage,gotoUrl})=>{

    await page.waitForURL(process.env.HOME_PAGE_URL!)
    console.log(await page.title())
    console.log("Successfully run")


})