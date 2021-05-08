import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.util.*;

import java.sql.*;

public class CountrySearch extends HttpServlet{
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws ServletException,IOException
		{
			res.setContentType("text/html");
			PrintWriter pw=res.getWriter();

			String inp = req.getParameter("inp");

			try {
				final String url = "jdbc:mysql://localhost:3306/world";
				final String user = "root";
				final String password = "vanathi21";

				Connection con = DriverManager.getConnection(url, user, password);

				Statement stmt = con.createStatement();
				String sql;
				sql = "select * from countries WHERE SUBSTRING(name, 1, "+inp.length()+") = \""+inp+"\"";
				ResultSet rs = stmt.executeQuery(sql);

				while(rs.next())
				{
					String country = rs.getString("name");
					pw.println("<option>"+country+"</option>");
				}

				stmt.close();
				con.close();
				
			}
			catch (Exception e){
				pw.println("Error occured"+e);
				e.printStackTrace();
			}
			pw.close();
			
		}
}
