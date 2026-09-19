import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage {
    readonly page:Page;
    readonly leftNavigationPanel: Locator

    constructor(page:Page){
        this.page=page;
        this.leftNavigationPanel=page.getByRole('link',{name:'PIM'})
    }

    /**
     * click the PIM click which is in the left navigatin panel
     */
    async clickPimLink(){
        await this.leftNavigationPanel.click()
    }


}