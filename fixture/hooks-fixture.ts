import {test as baseTest} from '../fixture/common-fixture'

type HooksFixtureType={
    gotoUrl: void;
}

export const test =baseTest.extend<HooksFixtureType>({
    gotoUrl: async({loginPage},use)=>{
        await loginPage.gotoUrl()
        await use()

    }
})