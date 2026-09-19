import {test,expect} from '../fixture/hooks-fixture'
import newemployeedata from '../data/tc01-add-a-new-employee-data.json'

newemployeedata.forEach((empData)=>{


test(`Add a new employee ${empData.employeeId}`,async ({page,gotoUrl,leftNavigationPage,addEmployeePage})=>{
    await leftNavigationPage.clickPimLink()

    //await page.getByText("Employee Information").waitFor({state:'visible'})
    await addEmployeePage.employeeInformationHeading.waitFor({state:'visible'})

    await page.waitForLoadState('networkidle')

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

//    await page.screenshot(
//     {path : 'screenshots/add-employee.png', 
//     fullPage: true,
//     animations: 'disabled'})
    await addEmployeePage.employeeInformationScreenshot.screenshot({
        path : `screenshots/employee-Information-${timestamp}.png`
    })

    await addEmployeePage.clickAddButton()

    await addEmployeePage.addEmployeeHeading.waitFor({state:'visible'})

    await addEmployeePage.employeeFullNameLabel.waitFor({state:'visible'})

    await addEmployeePage.addEmployeeScreenshot.screenshot({
        path : `screenshots/add-Employee-${timestamp}.png`
    })


    //await addEmployeePage.createEmployee({firstName:'John',middleName:'Kate',lastName:'Miller',employeeId:'12345'});
    await addEmployeePage.createEmployee(empData)

    await addEmployeePage.clickSaveButton();

    await addEmployeePage.firstAndLastNameHeading.waitFor({state:'visible'});

    await page.waitForLoadState('networkidle')

    await addEmployeePage.employeeDetailsScreenshot.screenshot({
        path: `screenshots/employee-Details-${timestamp}.png`

    })

    await expect(addEmployeePage.firstAndLastNameHeading).toHaveText(`${empData.firstName} ${empData.lastName}`)

})
})