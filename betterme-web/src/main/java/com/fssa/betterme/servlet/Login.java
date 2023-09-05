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
import com.fssa.betterme.model.User;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    String email = request.getParameter("email");
	    String password = request.getParameter("password");
	    PrintWriter out = response.getWriter();
	    
	    try {
	        User currentUser = UserService.getUserByEmail(email);
	        
	        if (currentUser != null && currentUser.getPassword().equals(password)) {
	
	            out.println("Email and password are valid");
	            
	          
	            HttpSession session = request.getSession();
	            session.setAttribute("loggedInUser", currentUser); 
	            
	            response.sendRedirect("index.jsp"); 
	        } else {
	            out.println("Invalid email or password");
	        }
	    } catch (UserValidationException | UserServiceException e) {
	        out.println( e.getMessage()); 
	    }
	}


}
