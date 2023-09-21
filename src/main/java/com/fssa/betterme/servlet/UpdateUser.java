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
 * Servlet implementation class UpdateUser
 */
@WebServlet("/UpdateUser")
public class UpdateUser extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String name = request.getParameter("name");
		String mobileParameter = request.getParameter("mobile");
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String email = (String) session.getAttribute("loggedInUser");

		if (name != null) {

			name = name.trim();
		}

		if (mobileParameter != null) {
			try {
				Long mobileNumber = Long.parseLong(mobileParameter);
				User logged = UserService.getUserByEmail(email);
				logged.setPhoneNumber(mobileNumber);
				logged.setUsername(name);
				boolean res = UserService.updateUser(logged);
				out.print(res);

			} catch (NumberFormatException | UserServiceException | UserValidationException e) {
				System.out.println(e.getMessage());
				e.printStackTrace();
				out.print(e.getMessage());
			}
		}

		out.flush();
		out.close();

	}

}
