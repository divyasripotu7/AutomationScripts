package runner;
import java.io.*;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import managers.FileReaderManager;
 
@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\Lenovo\\eclipse-workspace\\selenium-maven-auto\\src\\test\\java\\features\\LoginGmail.feature",
 glue= {"seleniumgluecode"},
 plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
 monochrome = true
 )
 
 
public class TestRunner1 {
// @AfterClass
 //public static void writeExtentReport() 
 //{ Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
// }
}
