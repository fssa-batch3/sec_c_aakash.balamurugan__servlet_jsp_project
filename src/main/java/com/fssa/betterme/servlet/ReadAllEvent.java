package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.model.Event;
import com.fssa.betterme.service.EventService;

/**
 * Servlet implementation class ReadEvent
 */
@WebServlet("/ReadAllEvent")
public class ReadAllEvent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       


	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
	
		try {
		    List<Event> eventList = EventService.getAllEvents();
		    request.setAttribute("eventList", eventList);  
		    RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/Admin/ReadEvent.jsp");
		    dispatcher.forward(request, response);
		} catch ( ServiceException e) {
			out.append(e.getMessage());
		  
		}

	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
