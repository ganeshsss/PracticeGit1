import{Page,Locator} from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly userNameTextBox:Locator;
    readonly passwordTextBox:Locator;
    readonly loginButton:Locator

    constructor(page:Page){
        this.page=page;
        this.userNameTextBox=page.locator("input[name='username']");
        this.passwordTextBox=page.locator("input[name='password']");
        this.loginButton=page.locator('button[type="submit"]');
    }

    /**
     * Opening the OrangeHrm URL
     */

    async gotoUrl(){
        await this.page.goto(process.env.BASE_URL!)
    }

    /**
     * Providing the credentials Details to login into orange hrm
     * @param userName 
     * @param password 
     */
    async loginOrangeHrm(userName:string,password:string){
        await this.userNameTextBox.fill(userName);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}

