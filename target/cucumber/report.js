$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Compose/composeMail.feature");
formatter.feature({
  "name": "Compose an Email via  Mail.com",
  "description": "  As a Valid User\n  I want to compose an mail\n  So that I can ccommincate with my mates",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ComposeMail"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@issue:SER-2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Success compose",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have All Test Data \"\u003cuserName\u003e\" \"\u003cpassword\u003e\" \"\u003cToAddress\u003e\" \"\u003cSubject\u003e\" \"\u003cBody\u003e\" for Compose Sceanrio",
  "keyword": "Given "
});
formatter.step({
  "name": "I use Valid \"\u003cuserName\u003e\" and Valid \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I perform Login Action",
  "keyword": "And "
});
formatter.step({
  "name": "I should see my Account Mails",
  "keyword": "And "
});
formatter.step({
  "name": "I compose an email to \"\u003cToAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I Should see a successful mail sent.",
  "keyword": "Then "
});
formatter.examples({
  "name": "Valid Data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "ToAddress",
        "Subject",
        "Body"
      ]
    },
    {
      "cells": [
        "serenitytraining@mail.com",
        "Password01",
        "serenitytraining1@mail.com",
        "TestMail",
        "Hello Udemy .."
      ]
    }
  ],
  "tags": [
    {
      "name": "@issue:SER-3"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.scenario({
  "name": "Success compose",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ComposeMail"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@issue:SER-2"
    },
    {
      "name": "@issue:SER-3"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have All Test Data \"serenitytraining@mail.com\" \"Password01\" \"serenitytraining1@mail.com\" \"TestMail\" \"Hello Udemy ..\" for Compose Sceanrio",
  "keyword": "Given "
});
formatter.match({
  "location": "ComposeTestStepDef.i_have_All_Test_Data_for_Compose_Sceanrio(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I use Valid \"serenitytraining@mail.com\" and Valid \"Password01\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.i_use_Valid_and_Valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform Login Action",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDef.i_perform_Login_Action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my Account Mails",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeTestStepDef.i_should_see_my_Account_Mails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I compose an email to \"serenitytraining1@mail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "ComposeTestStepDef.i_compose_an_email_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see a successful mail sent.",
  "keyword": "Then "
});
formatter.match({
  "location": "ComposeTestStepDef.i_Should_see_a_successful_mail_sent()"
});
formatter.result({
  "status": "passed"
});
});