package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import lumensDataProvider.lumensConfigReader;

public class TC009_UserAbleToLoginLiveChat{
	WebDriver driver;
	Properties prop;
	lumensConfigReader configfile;

	public TC009_UserAbleToLoginLiveChat(WebDriver driver) {
		this.driver = driver;
	}

	public void livechat() {

		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		WebElement LiveChat = driver.findElement(By.xpath(prop.getProperty("Livechat")));
		LiveChat.click();

		WebElement validemail = driver.findElement(By.xpath(prop.getProperty("EnterEmail")));
		validemail.sendKeys(prop.getProperty("emailId"));
		WebElement submit = driver.findElement(By.xpath(prop.getProperty("ChatSubmit")));
		submit.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	public void LiveChatNameandEmail() {

		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		WebElement name = driver.findElement(By.xpath(prop.getProperty("Name")));
		name.sendKeys(prop.getProperty("ValidUserName"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		WebElement validemail = driver.findElement(By.xpath(prop.getProperty("EnterEmail")));
		validemail.sendKeys(prop.getProperty("emailId"));

	}

	public void LiveChatsubmit() {

		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		WebElement submit = driver.findElement(By.xpath(prop.getProperty("ChatSubmit")));
		submit.click();
	}
}
