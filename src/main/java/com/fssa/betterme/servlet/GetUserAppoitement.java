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

import com.fssa.betterme.exception.DAOException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.Appoitement;
import com.fssa.betterme.service.AppoitementService;
import com.fssa.betterme.service.UserService;

/**
 * Servlet implementation class GetUserAppoitement
 */
@WebServlet("/GetUserAppoitement")
public class GetUserAppoitement extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	PrintWriter out = response.getWriter();
	try {	
	HttpSession session = request.getSession(false);
	String email = (String) session.getAttribute("loggedInUser");
	int id = UserService.getUserByEmail(email).getId();
		AppoitementService ser = new AppoitementService();
		List<Appoitement> mAppoitementList = new ArrayList<>();
    	mAppoitementList = ser.getAppoitementsByUser(id);;
			JSONArray mAppoitementJSonArray = new JSONArray(mAppoitementList);
			out.println(mAppoitementJSonArray.toString());
		
			
        } catch (DAOException|UserServiceException | UserValidationException e) {
 
            out.println("Error: " + e.getMessage());
        } finally {
            out.close();
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
