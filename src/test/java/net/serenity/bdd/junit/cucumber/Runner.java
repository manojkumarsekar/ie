package net.serenity.bdd.junit.cucumber;

import net.serenitybdd.cucumber.CucumberWithSerenity;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features/Compose", plugin = {
		"pretty", "html:target/cucumber", "json:target/json/cucumber.json" }, tags = { "@Smoke","@prod" }    )
public class Runner {

}
