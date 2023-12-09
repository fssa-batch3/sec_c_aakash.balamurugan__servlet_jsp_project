package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.betterme.exception.DAOException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.exception.ValidationException;
import com.fssa.betterme.model.Appoitement;
import com.fssa.betterme.model.User;
import com.fssa.betterme.service.AppoitementService;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class CreateApoitement
 */
@WebServlet("/CreateAppoitement")
public class CreateAppoitement extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("hi");
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String email =  (String) session.getAttribute("loggedInUser");
		
		
		int trainer  = Integer.parseInt(request.getParameter("exp_id"));
		String dateStr = request.getParameter("date");
		DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate date = LocalDate.parse(dateStr, dateFormatter);
		String time = request.getParameter("time");;
		String category = request.getParameter("catagory");
		String type = request.getParameter("type");
		User user;
		
			user = UserService.getUserByEmail(email);
			int id = user.getId();
			String number =""+ user.getPhoneNumber();
			
			Appoitement app = new Appoitement(trainer , id, date, time, number, category, type); 
			
			AppoitementService ser = new AppoitementService();
		
			try {
				boolean res = ser.addAppoitement(app);
				out.print(res);
			} catch (ValidationException | DAOException e) {
				out.print(e.getMessage());
			}finally {
				out.close();
			}
			
			
			

		} catch (UserServiceException | UserValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}

}
