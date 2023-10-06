package com.fssa.betterme.servlet;

import java.io.IOException;



import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.fssa.betterme.model.Event;
import com.fssa.betterme.service.EventService;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("event_id"));

		try {
			Event event = EventService.getEventById(id);
			
			
			
//			 request.setAttribute("error", e.getMessage());
				request.setAttribute("event_id", event.getId());
			    request.setAttribute("event_name", event.getEventName());
			    request.setAttribute("event_About", event.getEventAbout());
			    request.setAttribute("event_description", event.getEventDescription());
			    request.setAttribute("event_address", event.getEventAddress());
			    request.setAttribute("img_url", event.getImageUrl());
			    request.setAttribute("date", event.getEventDate());
			    request.setAttribute("time", event.getEventTime());
			    request.setAttribute("price", event.getPrice());
			    request.setAttribute("isActive", event.isActive());
			    
			    request.setAttribute("HostEmail", event.getTrainner().getEmail());

			    RequestDispatcher dispatcher = request.getRequestDispatcher("Admin/AddEvent.jsp");
			    dispatcher.forward(request, response);
			
		} catch (Exception e) {
			
			e.printStackTrace();
			response.getWriter().append(e.getMessage());
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		doGet(request, response);
	}

}
