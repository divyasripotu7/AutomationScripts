package lumensPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import lumensDataProvider.lumensConfigReader;

public class TC12_Promo_Code {
	
	   WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC12_Promo_Code(WebDriver driver) {
		   this.driver=driver;
	   }

	   public void Promocode() throws InterruptedException {
		   Thread.sleep(5000);
		   configfile = new lumensConfigReader();
	       prop = configfile.init_prop();
	       try
	       {
	    	   driver.findElement(By.xpath(prop.getProperty("viewingcart"))).click();  
	       }
	       catch(org.openqa.selenium.StaleElementReferenceException ex)
	       {
	    	   driver.findElement(By.xpath(prop.getProperty("viewingcart"))).click();  
	       }
	       
	       Thread.sleep(2000);
	       driver.findElement(By.xpath(prop.getProperty("promocode"))).sendKeys("123");  
	       driver.findElement(By.xpath(prop.getProperty("addcoupons"))).click();
	       Thread.sleep(2000);
	   }
}





