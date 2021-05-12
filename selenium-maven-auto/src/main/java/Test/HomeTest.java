package Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import Pages.Home;
public class HomeTest {

    String driverPath = "C:\\Users\\Lenovo\\Desktop\\chromedriver_win32\\chromedriver.exe";
    
    WebDriver driver;

    Home objhome;

    public HomeTest(WebDriver driver2) {
		// TODO Auto-generated constructor stub
	}

	

	@BeforeTest

    public void setup(){

	System.setProperty("webdriver.chrome.driver", driverPath);
        
        driver =  new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("https://demo.opencart.com/");

    }

    /**

     * This test case will login in http://demo.guru99.com/V4/

     * Verify login page title as guru99 bank

     * Login to application

     * Verify the home page using Dashboard message

     */

    @Test(priority=0)

    public void LaunchingDemocart( )
    {
    	objhome = new Home(driver);
    	objhome.clcikMyaccount();
    	objhome.clickRegister(); 
    	objhome.clickLogin();
    	
    	   
       }
}
