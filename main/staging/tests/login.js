// original import needed for webdriver.io
import { expect } from '@wdio/globals'
import LoginPage from '../classes/login.js'
import fs from 'fs';
const loginData = await JSON.parse(fs.readFileSync('main/staging/data/login.json'))
import * as functions from './../functions.js';


// Test example with manual data input not using data file

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()
//         await LoginPage.login('25853@goramp.dev', 'goramp')
//     })
// })

// Test example with data input from json file
describe("Login",async()=>{
    loginData.forEach(({username,password})=>{
        it("Login test",async()=>{
            await LoginPage.open()
            await LoginPage.login(username,password)
        })
    })
})