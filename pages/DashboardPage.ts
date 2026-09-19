import { Locator, Page } from "@playwright/test";

export class DashboardPage{
    readonly page : Page;
    readonly dashboardheading:Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardheading=page.getByRole('heading',{name:'Dashboard'})
    }
}