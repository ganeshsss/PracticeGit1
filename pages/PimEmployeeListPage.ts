import{Page,Locator} from '@playwright/test'

export class PimEmployeeListPage{
    readonly page:Page;
    readonly employeeIdInput:Locator;
    readonly searchButton:Locator;
    readonly employeeRowCount:Locator;
    readonly recordFoundCount:Locator;
    readonly loadingSpinner:Locator;

    constructor(page:Page){
        this.page=page;
        this.employeeIdInput=page.locator(".oxd-input-group")
        .filter({hasText: 'Employee Id'})
        .locator('input')
        this.searchButton=page.getByRole('button',{name:'Search'})
        this.loadingSpinner = page.locator('.oxd-loading-spinner');
        this.employeeRowCount=page.locator('.oxd-table-body .oxd-table-card')
        this.recordFoundCount = page.locator('.orangehrm-horizontal-padding span').first()
    }

    /**
     * Enter the employeeId
     * @param employeeId 
     */
    async enterEmployeeIdInput(employeeId:string){
        await this.employeeIdInput.fill(employeeId)
    }

    /**
     * Click the searchbutton
     */
    async clickSearchButton(){
        await this.searchButton.click()
        await this.loadingSpinner.waitFor({ state: 'detached' });

    }

    async getEmployeeRowCount():Promise<number>{
        return await this.employeeRowCount.count()
    }

    /**
     * Extracts integer count from table header text (e.g. "(241) Records Found", "No Records Found")[cite: 1]
     */
    async getRecordFoundCount(): Promise<number> {
        // 1. Ensure any pending loading state finishes
        await this.loadingSpinner.waitFor({ state: 'detached' });

        // 2. Wait for count header to be visible
        await this.recordFoundCount.waitFor({ state: 'visible', timeout: 5000 });

        // 3. Fetch inner text
        const text = await this.recordFoundCount.textContent();

        // 4. Handle empty/zero results gracefully
        if (!text || text.includes('No Records Found')) {
            return 0;
        }

        // 5. Extract integer inside parentheses
        const match = text.match(/\((\d+)\)/);
        return match ? parseInt(match[1], 10) : 0;
    }
}

    