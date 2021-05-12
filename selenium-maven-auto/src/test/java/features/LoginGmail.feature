Feature: Login Feature File
@selenium
Scenario: Login scenario test for Flipkart

Given navigate to Flipkart page
When user logged in using username as “username” and password as “password”
Then home page should be displayed