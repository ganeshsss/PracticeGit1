import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const envFileName = process.env.ENV_NAME ? `.env.${process.env.ENV_NAME}` : `.env.demo`;
const envFilePath = path.resolve(__dirname, '../env-files', envFileName);

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
}


import{test,expect} from '../fixture/common-fixture'
import dashboardheadingdata from '../data/global-setup-data.json'

test("Global Login Test",async ({page,loginPage,commonPage,dashboardPage})=>{
     const decryptDataUserName=commonPage.decryptData(process.env.USER_NAME!)
    const decryptDatapassword=commonPage.decryptData(process.env.PASSWORD!)

    await loginPage.gotoUrl();
    await loginPage.loginOrangeHrm(decryptDataUserName,decryptDatapassword);

    await page.waitForURL(process.env.HOME_PAGE_URL!)

    await expect(dashboardPage.dashboardheading).toHaveText(dashboardheadingdata.Dashboardheading);

    page.context().storageState({
        path: "./playwright/.auth/auth.json"
    })


})