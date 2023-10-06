package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
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
import com.fssa.betterme.util.PasswordHash;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		request.setAttribute("email", email);
		request.setAttribute("password", password);

		String pass = null;
		try {
			pass = PasswordHash.hashPass(password);
		} catch (UserValidationException e) {

		}
		PrintWriter out = response.getWriter();

		if (email != null || password != null) {

			if (email.equals("admin@gmail.com") && password.equals("password")) {
				HttpSession session = request.getSession();
				session.setAttribute("loggedInUser", "admin@gmail.com");
				response.sendRedirect("./Admin/index.jsp");

			} else {

				try {
					User currentUser = UserService.getUserByEmail(email);

					if (currentUser != null && currentUser.getPassword().equals(pass)) {

						HttpSession session = request.getSession();
						session.setAttribute("loggedInUser", currentUser.getEmail());

						response.sendRedirect("./index.jsp");
					} else {
						request.setAttribute("Error", "Invalid email or password");
						RequestDispatcher rd = request.getRequestDispatcher("./pages/html_pages/user_module/login.jsp");
						rd.forward(request, response);

					}
				} catch (UserValidationException | UserServiceException e) {
					request.setAttribute("Error", e.getMessage()+" Try SignUp");
					RequestDispatcher rd = request.getRequestDispatcher("./pages/html_pages/user_module/login.jsp");
					rd.forward(request, response);

				}
			}
		} else {
			request.setAttribute("Error", "email or password is null");
			RequestDispatcher rd = request.getRequestDispatcher("./pages/html_pages/user_module/login.jsp");
			rd.forward(request, response);
		}


	}

}
