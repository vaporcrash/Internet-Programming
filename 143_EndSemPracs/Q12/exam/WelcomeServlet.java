import java.util.*;
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class WelcomeServlet extends HttpServlet{
  public void doPost(HttpServletRequest request, HttpServletResponse response){
    try{
      response.setContentType("text/html");
      PrintWriter pw = response.getWriter();
      Cookie ck[] = request.getCookies();
      pw.println("<h1>Welcome to webpage, "+ck[0].getValue() + "</h1>");
      pw.close();
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
