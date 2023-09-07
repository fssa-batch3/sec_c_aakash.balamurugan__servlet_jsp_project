package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.exception.EventValidationException;
import com.fssa.betterme.service.EventService;

/**
 * Servlet implementation class DeleteEventServlet
 */
@WebServlet("/DeleteEventServlet")
public class DeleteEventServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       


	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        int eventId = Integer.parseInt(request.getParameter("event_id"));
	        PrintWriter out = response.getWriter();
	       
	        try {
				EventService.deleteEvent(EventService.getEventById(eventId));
				out.print("<h1>Sucess</h1>");
				response.sendRedirect("/Admin/ReadEvent.jsp");
			} catch ( EventValidationException | ServiceException e) {
				out.print(e.getMessage());
			
			}
	    }

}
