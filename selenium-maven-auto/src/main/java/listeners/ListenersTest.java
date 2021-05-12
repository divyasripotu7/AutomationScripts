package listeners;
import org.testng.Assert;
import org.testng.annotations.Test;
public class ListenersTest {
    @Test
	 void setup()
	 {
	  System.out.println("Setup");
	  Assert.assertEquals("pavan","pavan");
	 }
	 
	 @Test
	 void loginByEmail()
	 {
		 System.out.println("Login by mail");
		  Assert.assertEquals("pavan","pavan");
	 }
	 
	 @Test
	 void loginByFacebook()
	 {
		 System.out.println("Login by mail");
		  Assert.assertEquals("pavan","kumar");
	 }
	 
	}

