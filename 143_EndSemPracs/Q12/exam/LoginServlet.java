import java.util.*;
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class LoginServlet extends HttpServlet{
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
    try{
      response.setContentType("text/html");
      PrintWriter pw = response.getWriter();
      String name = request.getParameter("username");
      pw.println("Your email ID is "+name);
      Cookie myCookie = new Cookie("username",name);
      response.addCookie(myCookie);
      pw.println("<html><head><title>Cookie Creation</title><link rel='stylesheet' href='styles.css'></head><body>");
      pw.println("<form action='WelcomeServlet' method='post'>");
      pw.println("<input type='submit' value='Submit'>");
      pw.println("</form>");
      pw.println("</body></html>");
      pw.close();
    } catch(Exception e){
      System.out.println(e);
    }
  }
}
