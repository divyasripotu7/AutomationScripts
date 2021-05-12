package Test;
import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Pages.Home;
import Pages.Register;
import Test.HomeTest;
@Test
public class RegisterTest {

    String driverPath = "C:\\Users\\Lenovo\\Desktop\\chromedriver_win32\\chromedriver.exe";
    
    WebDriver driver;
    //HomeTest hometestobj;
    Register objregister;
    @BeforeTest

    public void setup(){

	System.setProperty("webdriver.chrome.driver", driverPath);
        
        driver =  new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("https://demo.opencart.com/");

    }
   // public void registerToDemocart1( )
   // {
   
   
    //hometestobj.LaunchingDemocart();
   // }
    	
    

    

   
    /**

     * This test case will login in http://demo.guru99.com/V4/

     * Verify login page title as guru99 bank

     * Login to application

     * Verify the home page using Dashboard message

     */

    public void registerToDemocart( )
    {
    	objregister = new Register(driver);
    	objregister.clcikMyaccount();
    	objregister.clickRegister(); 
    	objregister.setFirstName("Dileep");
    	objregister.setlasttName("Kumar");
    	objregister.setEmail("dileepkumar.potu@gmail.com"); 
    	objregister.setTelephone("7997060192");
    	objregister.setPassword("Test@123");
    	objregister.setConfirm("Test@123");
    	objregister.setPrivacy();
    	objregister.clickContinue();    
       }
}