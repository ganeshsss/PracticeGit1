import{test as baseTest,expect} from './pom-fixture'
import {CommonPage} from '../pages/CommonPage'

type CommonFixtureType={
    commonPage : CommonPage
}

export const test = baseTest.extend<CommonFixtureType>({
    commonPage :  ({},use)=>{
        use(new CommonPage())

    }
})

export{expect}