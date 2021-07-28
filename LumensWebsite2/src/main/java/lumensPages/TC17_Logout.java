package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC17_Logout
{
    WebDriver driver;
	Properties prop;
	lumensConfigReader configfile;
	   
	public TC17_Logout(WebDriver driver) 
	{
	 this.driver=driver;
    }

	public void logout() throws InterruptedException
    {
	  Thread.sleep(5000);
	  configfile = new lumensConfigReader();
	  prop = configfile.init_prop();
	  Actions actions = new Actions(driver); 
	  WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account")));
	  actions.moveToElement(Account).build().perform();
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  WebElement out = driver.findElement(By.xpath(prop.getProperty("logout")));
	  actions.moveToElement(out).click().build().perform();
     //driver.findElement(By.xpath(prop.getProperty("logout"))).click();
	}
}
