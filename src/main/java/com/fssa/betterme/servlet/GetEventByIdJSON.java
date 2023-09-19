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

import org.json.JSONArray;

import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.model.Event;
import com.fssa.betterme.service.EventService;

/**
 * Servlet implementation class GetEventById
 */
@WebServlet("/GetEventByIdJSON")
public class GetEventByIdJSON extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id =Integer.parseInt( request.getParameter("id"));
//		int id =1;
		PrintWriter out = response.getWriter();
		try {
			
			 List<Event> eventList = new ArrayList<>();
		eventList.add(EventService.getEventById(id));
		   JSONArray accountsJSonArray = new JSONArray(eventList);
					out.println(accountsJSonArray.toString());
					out.flush();
					out.close();
	} catch (ServiceException e) {
		response.getWriter().append(e.getMessage());
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
