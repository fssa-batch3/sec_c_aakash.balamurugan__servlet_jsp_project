package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
	        Gender gender = Gender.fromString( request.getParameter("gender"));
	        String password = request.getParameter("password");
	        
	        String pass = null;
			try {
				
				pass = PasswordHash.hashPass(password);
				
			} catch (Exception e) {
			
			}
	       
	

	   
	        User user = new User(username, email,pass,mobileNumber ,gender);
	        PrintWriter out = response.getWriter();
	     try {
			boolean res =UserService.addUser(user);HttpSession session = request.getSession();
			session.setAttribute("loggedInUser", user.getEmail());

	
			
			out.print(res);
			out.flush();
			out.close();
			 
		} catch (UserValidationException | UserServiceException e) {
			
			out.print(e.getMessage());
			out.flush();
			out.close();
			response.getWriter().append(e.getMessage());
		}
	 }

}
