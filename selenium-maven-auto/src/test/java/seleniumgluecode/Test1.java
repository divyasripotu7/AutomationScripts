package seleniumgluecode;
//import java.io.*;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Test1 {
	WebDriver driver;
	@Given("^navigate to Flipkart page$")
	public void navigate_to_Flipkart_page()   {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Lenovo\\Desktop\\chromedriver_win32\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.flipkart.com");}
		
	    @When("^user logged in using username as “username” and password as “password”$")
	    public void user_logged_in_using_username_as_username_and_password_as_password()  {
	    	
	    	driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys("9640661588");
	        driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[2]/input")).sendKeys("Divyachow7#");
	        driver.findElement(By.xpath("//button[@class=\"_2KpZ6l _2HKlqd _3AWRsL\"]")).click();
	        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	        
	    }

	    @Then("^home page should be displayed$")
	    public void home_page_should_be_displayed()  
	    {
	    	System.out.println("Successful");
	      
	    }


	}






