import{Page,Locator} from '@playwright/test'

export class AddEmployeePage{
    readonly page:Page;
    readonly employeeInformationHeading:Locator;
    readonly addButton:Locator;
    readonly addEmployeeHeading:Locator;
    readonly firstNameText:Locator;
    readonly middleNameText:Locator;
    readonly lastNameText:Locator;
    readonly employeeIdText:Locator;
    readonly saveButton:Locator;
    readonly firstAndLastNameHeading:Locator;
    readonly employeeInformationScreenshot:Locator;
    readonly addEmployeeScreenshot:Locator;
    readonly employeeDetailsScreenshot:Locator;
    readonly employeeFullNameLabel:Locator;

    constructor(page:Page){
        this.page=page;
        this.employeeInformationHeading=page.getByText("Employee Information");
        this.addButton=page.getByRole('button',{name:'Add'});
        this.addEmployeeHeading=page.getByRole('heading',{name:'Add Employee'})
        this.firstNameText=page.getByPlaceholder("First Name");
        this.middleNameText=page.getByPlaceholder("Middle Name")
        this.lastNameText=page.getByPlaceholder("Last Name")
        this.employeeIdText=page
            .locator(".oxd-input-group")
            .filter({hasText:'Employee Id'})
            .locator('input')
        this.saveButton=page.getByRole('button',{name:'Save'})
        this.firstAndLastNameHeading=page.locator(".oxd-text.oxd-text--h6.--strong")
        this.employeeInformationScreenshot=page.locator(".orangehrm-background-container");
        this.addEmployeeScreenshot=page.locator(".orangehrm-card-container");
        this.employeeDetailsScreenshot=page.locator(".orangehrm-background-container")
        this.employeeFullNameLabel=page.getByText('Employee Full Name')
    }

    

    /**
     * click the add button
     */
    async clickAddButton(){
        await this.addButton.click()
    }

    /**
     * Enter the firstname
     * @param firstName 
     */
    async enterFirstName(firstName:string){
        await this.firstNameText.fill(firstName)
    }

    /**
     * Enter the MiddleName
     * @param middleName 
     */
    async enterMiddleName(middleName:string){
        await this.middleNameText.fill(middleName)
    }

    /**
     * Enter the LastName
     * @param lastName 
     */
    async enterLastName(lastName:string){
        await this.lastNameText.fill(lastName)
    }
    /**Employee ID */
    async enterEmployeeId(employeeId:string){
        await this.employeeIdText.fill('');
        await this.employeeIdText.fill(employeeId)
    }

    /**
     * click Save Button
     */
    async clickSaveButton(){
        await this.saveButton.click()
    }



    /**
     * Create Employee details
     * @param employeeData 
     */
    async createEmployee(employeeData:{firstName:string,middleName:string,lastName:string,employeeId:string})
    {
        await this.enterFirstName(employeeData.firstName)
        await this.enterMiddleName(employeeData.middleName)
        await this.enterLastName(employeeData.lastName)
        await this.enterEmployeeId(employeeData.employeeId)

    }
}