package net.serenity.bdd.junit.cucumber.steps;

import net.serenity.bdd.junit.cucumber.model.ComposeData;
import net.serenity.bdd.junit.cucumber.pages.ComposePage;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.steps.ScenarioSteps;

public class ComposeTestSteps extends ScenarioSteps {

	ComposePage composePageObject;
	
	@Step
	public void performCompose(ComposeData composeDataprovider) {
		// TODO Auto-generated method stub
		composePageObject.composeEmail(composeDataprovider);
	}
@Step
	public void checkForMailStatus() {
		// TODO Auto-generated method stub
		composePageObject.checkForSuccessMail();
	}

}

	
