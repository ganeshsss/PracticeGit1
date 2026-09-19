import{Page,Locator} from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly userNameTextBox:Locator;
    readonly passwordTextBox:Locator;
    readonly loginButton:Locator

    constructor(page:Page){
        this.page=page;
        this.userNameTextBox=page.getByPlaceholder('Username');
        this.passwordTextBox=page.getByPlaceholder('Password');
        this.loginButton=page.getByRole('button',{name:'Login'})
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

