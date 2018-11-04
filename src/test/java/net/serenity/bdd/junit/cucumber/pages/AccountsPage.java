package net.serenity.bdd.junit.cucumber.pages;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class AccountsPage extends GenericPageObject{
	
	
	@FindBy(xpath="//a[@title='E-mail']")
	private WebElementFacade InboxLink;

	
	//thirdPartyFrame_home
	
	
	public boolean isInBoxLinkPresent(){
		
	//	getDriver().switchTo().frame("thirdPartyFrame_home");
		getDriver().switchTo().frame(1);
		return(InboxLink.isCurrentlyVisible());
	}
}
