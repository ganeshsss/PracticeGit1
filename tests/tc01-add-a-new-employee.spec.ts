import { test, expect } from '../fixture/hooks-fixture'
import { generateEmployeeData } from '../data/tc01-add-a-new-employee-data'

// Invoke helper function to get 3 unique dataset records
const employeeDataList = generateEmployeeData(3);

employeeDataList.forEach((empData,index) => {


    test(`Add a new employee- Record ${index + 1}`, async ({ page, gotoUrl, leftNavigationPage, addEmployeePage }) => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

        const screenshotFolder = `screenshots/TC01`;

        await test.step('Navigate to PIM and wait for page load', async () => {
            await leftNavigationPage.clickPimLink();
            await addEmployeePage.employeeInformationHeading.waitFor({ state: 'visible' });
            await page.waitForLoadState('networkidle');
        });

        await test.step('Capture Employee Information screenshot', async () => {
            await addEmployeePage.employeeInformationScreenshot.screenshot({
                path: `${screenshotFolder}/employee-Information-${timestamp}.png`
            });
        });

        await test.step('Navigate to Add Employee form', async () => {
            await addEmployeePage.clickAddButton();
            await addEmployeePage.addEmployeeHeading.waitFor({ state: 'visible' });
            await addEmployeePage.employeeFullNameLabel.waitFor({ state: 'visible' });
        });

        await test.step('Capture Add Employee form screenshot', async () => {
            await addEmployeePage.addEmployeeScreenshot.screenshot({
                path: `${screenshotFolder}/add-Employee-${timestamp}.png`
            });
        });

        await test.step('Fill new employee form details', async () => {
            await addEmployeePage.createEmployee(empData);
        });

        await test.step('Save employee details', async () => {
            await addEmployeePage.clickSaveButton();
            await addEmployeePage.firstAndLastNameHeading.waitFor({ state: 'visible' });
            await page.waitForLoadState('networkidle');
        });

        await test.step('Capture created employee details screenshot', async () => {
            await addEmployeePage.employeeDetailsScreenshot.screenshot({
                path: `${screenshotFolder}/employee-Details-${timestamp}.png`
            });
        });

        await test.step('Verify employee full name heading', async () => {
            await expect(addEmployeePage.firstAndLastNameHeading).toHaveText(`${empData.firstName} ${empData.lastName}`);
        });

    });
});


/* import { test, expect } from '../fixture/hooks-fixture'
import newemployeedata from '../data/tc01-add-a-new-employee-data.json'

newemployeedata.forEach((empData) => {


    test(`Add a new employee ${empData.firstName} ${empData.lastName}`, async ({ page, gotoUrl, leftNavigationPage, addEmployeePage }) => {
        await leftNavigationPage.clickPimLink()

        //await page.getByText("Employee Information").waitFor({state:'visible'})
        await addEmployeePage.employeeInformationHeading.waitFor({ state: 'visible' })

        await page.waitForLoadState('networkidle')

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

        //    await page.screenshot(
        //     {path : 'screenshots/add-employee.png', 
        //     fullPage: true,
        //     animations: 'disabled'})
        await addEmployeePage.employeeInformationScreenshot.screenshot({
            path: `screenshots/employee-Information-${timestamp}.png`
        })

        await addEmployeePage.clickAddButton()

        await addEmployeePage.addEmployeeHeading.waitFor({ state: 'visible' })

        await addEmployeePage.employeeFullNameLabel.waitFor({ state: 'visible' })

        await addEmployeePage.addEmployeeScreenshot.screenshot({
            path: `screenshots/add-Employee-${timestamp}.png`
        })


        //await addEmployeePage.createEmployee({firstName:'John',middleName:'Kate',lastName:'Miller',employeeId:'12345'});
        await addEmployeePage.createEmployee(empData)

        await addEmployeePage.clickSaveButton();

        await addEmployeePage.firstAndLastNameHeading.waitFor({ state: 'visible' });

        await page.waitForLoadState('networkidle')

        await addEmployeePage.employeeDetailsScreenshot.screenshot({
            path: `screenshots/employee-Details-${timestamp}.png`

        })

        await expect(addEmployeePage.firstAndLastNameHeading).toHaveText(`${empData.firstName} ${empData.lastName}`)

    })
}) */