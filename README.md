# Lab8_Starter
Author: Richard Yang

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would not use unit testing as "messaging" is the whole major feature of the application which would require other uses of other smaller parts of the app which would be more appropriately tested by unit testing. 

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, I would allow as it's a small enough component of the application this would be okay to use unit testing for. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If headless is set to true, I would expect that the tests would be, however nothing will pop up. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

We could simply use a pushtohistory for settings and it should start from settings.
