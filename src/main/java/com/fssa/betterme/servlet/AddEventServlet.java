package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.betterme.exception.EventValidationException;
import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.model.Event;
import com.fssa.betterme.model.Trainer;
import com.fssa.betterme.service.TrainerService;
import com.fssa.betterme.service.EventService;

@WebServlet("/AddEventServlet")
public class AddEventServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String eventName = request.getParameter("event_name").trim();
		String eventDescription = request.getParameter("event_description").trim();
		String eventAddress = request.getParameter("event_address").trim();
		String imgUrl = request.getParameter("img_url").trim();
		String dateStr = request.getParameter("date");
		String timeStr = request.getParameter("time");
		double price = Double.parseDouble(request.getParameter("price"));
		String eventabt = request.getParameter("event_About").trim();
		String email = request.getParameter("HostEmail").trim();
		try {

			DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			LocalDate date = LocalDate.parse(dateStr, dateFormatter);

			DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
			LocalTime time = LocalTime.parse(timeStr, timeFormatter);
			TrainerService ser = new TrainerService();
			Trainer host = ser.findTrainerByEmail(email);
			Event validEvent = new Event(eventName, eventabt, eventDescription, eventAddress, date, time, price, imgUrl,
					host);
			EventService eventSer = new EventService(); 
			eventSer.addEvent(validEvent);
			response.sendRedirect("ReadAllEvent");

		} catch (EventValidationException | ServiceException | IOException e) {
			
			request.setAttribute("error", e.getMessage());
			request.setAttribute("event_name", eventName);
			request.setAttribute("event_About", eventabt);
			request.setAttribute("event_description", eventDescription);
			request.setAttribute("event_address", eventAddress);
			request.setAttribute("img_url", imgUrl);
			request.setAttribute("date", dateStr);
			request.setAttribute("time", timeStr);
			request.setAttribute("price", price);
			request.setAttribute("HostEmail", email);

			RequestDispatcher dispatcher = request.getRequestDispatcher("Admin/AddEvent.jsp");
			dispatcher.forward(request, response);
		}

	}

}
