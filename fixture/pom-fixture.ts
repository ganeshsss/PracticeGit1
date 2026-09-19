import {test as baseTest,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {DashboardPage} from '../pages/DashboardPage'
import {LeftNavigationPage} from '../pages/LeftNavigationPage'

type PomFixtureType={
    loginPage:LoginPage
    dashboardPage:DashboardPage
    leftNavigationPage:LeftNavigationPage
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

    }
    
})

export {expect};
