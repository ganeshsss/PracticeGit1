import {test as baseTest,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {DashboardPage} from '../pages/DashboardPage'
import {LeftNavigationPage} from '../pages/LeftNavigationPage'
import { AddEmployeePage } from '../pages/AddEmployeePage'
import { PimEmployeeListPage } from '../pages/PimEmployeeListPage'

type PomFixtureType={
    loginPage:LoginPage
    dashboardPage:DashboardPage
    leftNavigationPage:LeftNavigationPage
    addEmployeePage:AddEmployeePage
    pimEmployeeListPage: PimEmployeeListPage
}

export const test =baseTest.extend<PomFixtureType>({
    loginPage : async ({page},use)=>{
        await use(new LoginPage(page))
    },
    dashboardPage: async ({page},use)=>{
        await use(new DashboardPage(page))

    },
    leftNavigationPage:async ({page},use)=>{
        await use(new LeftNavigationPage(page))

    },
    addEmployeePage:async({page},use)=>{
        await use(new AddEmployeePage(page))
    },
    pimEmployeeListPage:async ({page},use)=>{
        await use(new PimEmployeeListPage(page))
        

    }
    
})

export {expect};
