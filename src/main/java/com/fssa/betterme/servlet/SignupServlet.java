package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.Gender;
import com.fssa.betterme.model.User;
import com.fssa.betterme.service.UserService;
import com.fssa.betterme.util.PasswordHash;


/**
 * Servlet implementation class SignupServlet
 */
@WebServlet("/SignupServlet")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doPost(request, response);
//	}


	 protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        // Get user input from the form
	        String username = request.getParameter("username");
	        long mobileNumber = Long.parseLong(request.getParameter("mobileNumber"));
	        String email = request.getParameter("email");
	        Gender gender = Gender.valueOf( request.getParameter("gender"));
	        String password = request.getParameter("password");
	        
	        String pass = null;
			try {
				System.out.println(PasswordHash.hashPass(password));
				pass = PasswordHash.hashPass(password);
				
			} catch (Exception e) {
				
				System.out.println(e.getMessage());
			}
	       
	

	   
	        User user = new User(username, email,pass,mobileNumber ,gender);
	        
	     try {
			boolean res =UserService.addUser(user);
			PrintWriter out = response.getWriter();
			out.print(res);
			out.flush();
			out.close();
			 
		} catch (UserValidationException | UserServiceException e) {
			response.getWriter().append(e.getMessage());
		}
	 }

}
