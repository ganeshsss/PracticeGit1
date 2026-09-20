import {test,expect} from '../fixture/hooks-fixture'

test("Search Employee By Valid Employee ID",async ({gotoUrl,leftNavigationPage,pimEmployeeListPage,addEmployeePage})=>{

    await leftNavigationPage.clickPimLink();
    await addEmployeePage.employeeInformationHeading.waitFor({state:'visible'})

    await pimEmployeeListPage.enterEmployeeIdInput("0312");
    await pimEmployeeListPage.clickSearchButton()
    
    //const actualRow=await pimEmployeeListPage.getEmployeeRowCount()
    const expectedRow=await pimEmployeeListPage.getRecordFoundCount()

    await expect(pimEmployeeListPage.employeeRowCount).toHaveCount(expectedRow)

})