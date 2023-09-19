package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;

import com.fssa.betterme.exception.BookDAOException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.User;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class GetUserJson
 */
@WebServlet("/GetUserJson")
public class GetUserJson extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String email = (String) session.getAttribute("loggedInUser");

		try {

			List<User> userList = new ArrayList<>();
			User user = UserService.getUserByEmail(email);
			userList.add(user);
			JSONArray accountsJSonArray = new JSONArray(userList);
			out.println(accountsJSonArray.toString());
			out.flush();
			out.close();

		} catch (UserServiceException | UserValidationException e) {
			out.append(e.getMessage());

		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
