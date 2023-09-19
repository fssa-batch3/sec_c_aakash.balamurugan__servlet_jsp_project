package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;

import com.fssa.betterme.exception.BookDAOException;
import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.Event;
import com.fssa.betterme.service.BookingService;
import com.fssa.betterme.service.EventService;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class BookingForUser
 */
@WebServlet("/BookingForUserJSON")
public class BookingForUserJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String user =  (String) session.getAttribute("loggedInUser");
		
		
		
		try {
			int id = UserService.getUserByEmail(user).getId();
		
		    List<Event> eventList = BookingService.getBookingForUser(id);
		    JSONArray accountsJSonArray = new JSONArray(eventList);
			out.println(accountsJSonArray.toString());
			out.flush();
			out.close();

		} catch (   BookDAOException | UserServiceException | UserValidationException e) {
			out.append(e.getMessage());
		  
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
