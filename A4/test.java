import java.sql.*;
class test{
public static void main(String args[]){
try{
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con=DriverManager.getConnection(
"jdbc:mysql://localhost:3306/patient_details","root","crashgoku17");
//here sonoo is database name, root is username and password
Statement stmt=con.createStatement();
ResultSet rs=stmt.executeQuery("select * from patient_details");
while(rs.next())
System.out.println(rs.getString(1)+"  "+rs.getInt(2)+"  "+rs.getInt(3)+" "+rs.getString(4)+"  "+rs.getString(5)+"  "+rs.getString(6)+"  "+rs.getString(7));
con.close();
}catch(Exception e){ System.out.println(e);}
}
}
