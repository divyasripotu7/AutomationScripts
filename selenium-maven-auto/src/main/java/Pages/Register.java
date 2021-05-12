package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;


public class Register {
	WebDriver driver;
	

	By myAccountClick = By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a");
	By registerClick = By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[1]/a");
    By firstName =By.xpath("//*[@id=\"input-firstname\"]");
    By lastName = By.xpath("//*[@id=\"input-lastname\"]");
    By email = By.xpath("//*[@id=\"input-email\"]");
    By telephone = By.xpath("//*[@id=\"input-telephone\"]");
    By password = By.xpath("//*[@id=\"input-password\"]");
    By confirmPasssword = By.xpath("//*[@id=\"input-confirm\"]");
    By privacyCheck = By.xpath("//*[@id=\"content\"]/form/div/div/input[1]");
    By continueButton = By.xpath("//*[@id=\"content\"]/form/div/div/input[2]");


public Register(WebDriver driver){
 this.driver = driver;
}
public void clcikMyaccount(){
driver.findElement(myAccountClick).click();
}
public void clickRegister(){
driver.findElement(registerClick).click();
}
//Fill all textboxes
public void setFirstName(String strFirstName){
driver.findElement(firstName).sendKeys(strFirstName);
 }
public void setlasttName(String strLastName){
driver.findElement(lastName).sendKeys(strLastName);
}
public void setEmail(String strEmail){
driver.findElement(email).sendKeys(strEmail);
}
public void setTelephone(String string){
driver.findElement(telephone).sendKeys(string);
}
public void setPassword(String strPassword){
driver.findElement(password).sendKeys(strPassword);
}
public void setConfirm(String strConfirm){
driver.findElement(confirmPasssword).sendKeys(strConfirm);
}
public void setPrivacy(){
driver.findElement(privacyCheck).click();
}
public void clickContinue(){
driver.findElement(continueButton).click();
}

public void registerToDemocart(String strFirstName,String strLastName,String strEmail,String string,String strPassword,String strConfirm)
{
	
	this.clcikMyaccount();
	this.clickRegister(); 
	this.setFirstName(strFirstName);
	this.setlasttName(strLastName);
	this.setEmail(strEmail); 
	this.setTelephone(string);
	this.setPassword(strPassword);
	this.setConfirm(strConfirm);
	this.setPrivacy();
	this.clickContinue();    
   }

}
