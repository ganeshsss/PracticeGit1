import {test} from '../fixture/hooks-fixture'

test("Add a new employee",async ({page,gotoUrl,leftNavigationPage})=>{
    await leftNavigationPage.clickPimLink()

    await page.getByText("Employee Information").waitFor({state:'visible'})

    await page.waitForLoadState('networkidle')

   await page.screenshot(
    {path : 'screenshots/add-employee.png', 
    fullPage: true,
    animations: 'disabled'})

})