import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('ramon@teste.com', 'teste123')
        await homePage.openMenu('profile')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('Cajueiro Ramon')).isDisplayed()).toBeTruthy()
    })
})

