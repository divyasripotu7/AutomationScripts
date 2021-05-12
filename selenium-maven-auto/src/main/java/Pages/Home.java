package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

public class Home {
	WebDriver driver;
	 By myAccountClick = By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a");
	 By registerClick = By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[1]/a");
	 By LoginClick = By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a");
	 public Home(WebDriver driver){
		 this.driver = driver;
		}
		public void clcikMyaccount(){
		driver.findElement(myAccountClick).click();
		}
		public void clickRegister(){
		driver.findElement(registerClick).click();
		}
		public void clickLogin(){
			driver.findElement(LoginClick).click();
			}
		public void LaunchingDemocart()
		{
			
			this.clcikMyaccount();
			this.clickRegister(); 
			this.clickLogin();
			
		   }
}
