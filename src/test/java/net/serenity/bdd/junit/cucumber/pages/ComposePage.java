package net.serenity.bdd.junit.cucumber.pages;

import org.openqa.selenium.By;

import net.serenity.bdd.junit.cucumber.model.ComposeData;
import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class ComposePage extends GenericPageObject {

	
	// below fields we need to switch to iframe id thirdPartyFrame_mail

	@FindBy(xpath="//a[@title='Compose E-mail']")
	private WebElementFacade composeLink;

	@FindBy(xpath="//li[@class='select2-search-field']/input")
	private WebElementFacade toField;
	
	@FindBy(xpath="//input[@class='mailobjectpanel-textfield_input']")
	private WebElementFacade subjectField;

	
	@FindBy(xpath="//button[@name='composeHeader:buttonSend']")
	private WebElementFacade sendButton;

	@FindBy(xpath="//iframe[@class='cke_wysiwyg_frame cke_reset']")
	private WebElementFacade bodyField;
	


		public void composeEmail(ComposeData composeDataprovider) {
			// TODO Auto-generated method stub
			
		    composeLink.click();
		    getDriver().switchTo().defaultContent();
			getDriver().switchTo().frame(2);
			toField.click();
			toField.sendKeys(composeDataprovider.getToAddress());
			subjectField.click();
			subjectField.sendKeys(composeDataprovider.getSubject());
			bodyField.click();
			bodyField.click();
			bodyField.sendKeys(composeDataprovider.getBody());
			sendButton.isCurrentlyEnabled();
			sendButton.click();
			
			
		}



		public void checkForSuccessMail() {
			// TODO Auto-generated method stub
			waitForAnyTextToAppear("E-mail sent");
		}






		
}

