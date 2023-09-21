package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.betterme.exception.BookDAOException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;

import com.fssa.betterme.service.BookingService;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class DeleteBook
 */
@WebServlet("/DeleteBook")
public class DeleteBook extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    
        int eventId = Integer.parseInt(request.getParameter("event"));
        

        PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String user =  (String) session.getAttribute("loggedInUser");
		
		
		
		try {
			int Userid = UserService.getUserByEmail(user).getId();
		
		boolean res = BookingService.DeleteBooking(eventId, Userid);
		out.print(res);
		out.flush();
		 
	} catch (UserValidationException | UserServiceException | BookDAOException e) {
		response.getWriter().append(e.getMessage());
	}
	}

}
