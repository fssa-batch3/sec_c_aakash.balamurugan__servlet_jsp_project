package com.fssa.betterme.servlet;

import java.io.IOException;

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

/**
 * Servlet implementation class SignupServlet
 */
@WebServlet("/SignupServlet")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignupServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	 protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        // Get user input from the form
	        String username = request.getParameter("username");
	        long mobileNumber = Long.parseLong(request.getParameter("mobileNumber"));
	        String email = request.getParameter("email");
	        Gender gender = Gender.valueOf( request.getParameter("gender"));
	        String password = request.getParameter("password");

	        // Perform user registration logic here (e.g., store in a database)
	        User user = new User(username, email,password,mobileNumber ,gender);
	        
	     try {
			UserService.addUser(user);
			 response.sendRedirect("login.jsp");
		} catch (UserValidationException | UserServiceException e) {
			response.getWriter().append(e.getMessage());
		}
	 }

}
