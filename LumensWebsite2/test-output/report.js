$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("lumens.feature");
formatter.feature({
  "line": 1,
  "name": "lumensApplication TestCases (End to End validation)",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC016uantity",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User_is_able_to_go_with_count",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 11,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 12,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7357400,
  "status": "passed"
});
formatter.before({
  "duration": 4857231300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "TC016uantity",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User_is_able_to_go_with_count",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 56471936800,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 5878529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "LumensStepdefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 6000437400,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 16446592700,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.User_is_able_to_go_with_count()"
});
formatter.result({
  "duration": 51718685400,
  "status": "passed"
});
formatter.after({
  "duration": 152000,
  "status": "passed"
});
formatter.after({
  "duration": 979017800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#Scenario Outline:  TC001 Register Account"
    },
    {
      "line": 17,
      "value": "#Given user should open link"
    },
    {
      "line": 18,
      "value": "#Then click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 19,
      "value": "#And click on submit"
    },
    {
      "line": 20,
      "value": "#Examples:"
    },
    {
      "line": 21,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 22,
      "value": "#|Accountcreation|0|"
    },
    {
      "line": 24,
      "value": "#Scenario Outline: TC002 Account Login and TC003 Verify title"
    },
    {
      "line": 27,
      "value": "#Given User enters the URL"
    },
    {
      "line": 28,
      "value": "#Then User click on My account and Login"
    },
    {
      "line": 29,
      "value": "#And User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 30,
      "value": "#Then User should be logged in successfully"
    },
    {
      "line": 31,
      "value": "#Examples:"
    },
    {
      "line": 32,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 33,
      "value": "#|login|0|"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: TC004 Verify User is able to select ceiling lights from Lighting tab"
    },
    {
      "line": 37,
      "value": "#Given User navigates to the URL"
    },
    {
      "line": 38,
      "value": "#Then enter credetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 39,
      "value": "#And Navigate to lighting tab and select ceiling lights"
    },
    {
      "line": 40,
      "value": "#Then Select the product Chandeliers and large chandeliers"
    },
    {
      "line": 41,
      "value": "#Examples:"
    },
    {
      "line": 42,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 43,
      "value": "#|login|0|"
    },
    {
      "line": 45,
      "value": "#Scenario Outline: TC005  Verify user is able to select the specific product by applying  filter and add to cart"
    },
    {
      "line": 47,
      "value": "#Given User navigates to the application"
    },
    {
      "line": 48,
      "value": "#Then User enters the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 49,
      "value": "#And Select the filter Ready to ship and style"
    },
    {
      "line": 50,
      "value": "#Examples:"
    },
    {
      "line": 51,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 52,
      "value": "#|login|0|"
    },
    {
      "line": 54,
      "value": "#Scenario Outline: TC006 Verify User is able to select ceiling lights from Lighting tab and Add to cart \u0026 Checout"
    },
    {
      "line": 56,
      "value": "#Given User navigates to the URL"
    },
    {
      "line": 57,
      "value": "#Then enter credentials from the given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 58,
      "value": "#And Navigate to lighting tab and select ceiling lights and Select the product Chandeliers and large chandeliers"
    },
    {
      "line": 59,
      "value": "#Then Add the product to cart"
    },
    {
      "line": 60,
      "value": "#Examples:"
    },
    {
      "line": 61,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 62,
      "value": "#|login|0|"
    },
    {
      "line": 64,
      "value": "#Scenario Outline: TC007 Verify user is able to select the specific product by applying  filter and View cart"
    },
    {
      "line": 66,
      "value": "#Given User navigates to the URL"
    },
    {
      "line": 67,
      "value": "#Then enter valid credetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 68,
      "value": "#And Add the item to the cart"
    },
    {
      "line": 69,
      "value": "#Then  View the cart details by clicking on cart link"
    },
    {
      "line": 70,
      "value": "#Examples:"
    },
    {
      "line": 71,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 72,
      "value": "#|login|0|"
    },
    {
      "line": 74,
      "value": "#Scenario Outline: TC008 Verify user is able to search for product"
    },
    {
      "line": 76,
      "value": "#Given User navigates to the URL"
    },
    {
      "line": 77,
      "value": "#Then enter logincredetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 78,
      "value": "#And User is able to enter the specific product details in search field  and click on search icon"
    },
    {
      "line": 79,
      "value": "#Examples:"
    },
    {
      "line": 80,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 81,
      "value": "#|login|0|"
    },
    {
      "line": 83,
      "value": "#Scenario: TC009 Verify user is able to login Live chat by entering valid credentials"
    },
    {
      "line": 84,
      "value": "#Given User enters the URL"
    },
    {
      "line": 85,
      "value": "#Given User able to click on live chat"
    },
    {
      "line": 86,
      "value": "#When user able to enter name and valid email Id"
    },
    {
      "line": 87,
      "value": "#Then User able to click on submit"
    },
    {
      "line": 90,
      "value": "#Scenario: TC010 Verify user is not able to login Live chat by entering Invalid credentials"
    },
    {
      "line": 91,
      "value": "#Given User enters the URL"
    },
    {
      "line": 92,
      "value": "#Given User able to click on live chat"
    },
    {
      "line": 93,
      "value": "#When user able to enter name and Invalid email Id"
    },
    {
      "line": 94,
      "value": "#Then User able to click on submit"
    },
    {
      "line": 97,
      "value": "#Scenario Outline: TC011 User able remove product from cart"
    },
    {
      "line": 100,
      "value": "#Given User enters the URL"
    },
    {
      "line": 101,
      "value": "#Then User click on My account and Login"
    },
    {
      "line": 102,
      "value": "#And User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 103,
      "value": "#Then User should be logged in successfully"
    },
    {
      "line": 104,
      "value": "#Then user shold able remove product from cart"
    },
    {
      "line": 105,
      "value": "#Examples:"
    },
    {
      "line": 106,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 107,
      "value": "#|extralogin|0|"
    },
    {
      "line": 110,
      "value": "#Scenario Outline: TC012 verify user is able to apply promocode"
    },
    {
      "line": 111,
      "value": "#Given User able to enter url"
    },
    {
      "line": 112,
      "value": "#And User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 113,
      "value": "#Then User is able to enter promocode"
    },
    {
      "line": 114,
      "value": "#Examples:"
    },
    {
      "line": 115,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 116,
      "value": "#|login|0|"
    },
    {
      "line": 118,
      "value": "#Scenario Outline: TC013 verify user to scroll up and down"
    },
    {
      "line": 119,
      "value": "#Given User able to enter url"
    },
    {
      "line": 120,
      "value": "#And User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 121,
      "value": "#Then User is able to scroll up and scroll down"
    },
    {
      "line": 122,
      "value": "#Examples:"
    },
    {
      "line": 123,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 124,
      "value": "#|login|0|"
    },
    {
      "line": 126,
      "value": "#Scenario Outline: TC014 verify Navigation back"
    },
    {
      "line": 127,
      "value": "#Given User able to enter url"
    },
    {
      "line": 128,
      "value": "#And User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 129,
      "value": "#Then User is able to click product and navigate to home page"
    },
    {
      "line": 130,
      "value": "#Examples:"
    },
    {
      "line": 131,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 132,
      "value": "#|login|0|"
    },
    {
      "line": 135,
      "value": "#Scenario Outline: TC015zipcode"
    },
    {
      "line": 137,
      "value": "#Given User enters the URL"
    },
    {
      "line": 138,
      "value": "#Then User click on My account and Login"
    },
    {
      "line": 139,
      "value": "#And User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e"
    },
    {
      "line": 140,
      "value": "#Then User should be logged in successfully"
    },
    {
      "line": 141,
      "value": "#Then User is not able to go with incorrect zipcode"
    },
    {
      "line": 142,
      "value": "#Examples:"
    },
    {
      "line": 143,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 144,
      "value": "#|Quantity|0|"
    }
  ],
  "line": 152,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 154,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "User logins the application form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.examples({
  "line": 157,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 158,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 159,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 697300,
  "status": "passed"
});
formatter.before({
  "duration": 2839330200,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 154,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "User logins the application form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_launches_the_application()"
});
