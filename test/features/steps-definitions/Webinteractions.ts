import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"

Given (/^Webpage Open$/, async function() {
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.setTimeout({implicit: 15000, pageLoad: 100000})
    await browser.maximizeWindow()
})

When (/^Perform web interactions$/, async function () {
    const inputLink = $('=Inputs')
    await inputLink.click()
    const inputField = $('[type=number]')
    await inputField.click()
    await inputField.setValue("29")
    //addValue will NOT clear field before type
    /*Dropdown:
    1. Find element
    2. Element option await element.selectByVisibleText("") or ByAttribute("attribute", "value")
    */
    
    
})