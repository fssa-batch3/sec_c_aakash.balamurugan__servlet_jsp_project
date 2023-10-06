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
import com.fssa.betterme.exception.DAOException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.Event;
import com.fssa.betterme.service.UserService;
import com.fssa.betterme.service.VideoService;

/**
 * Servlet implementation class GetVideoForUser
 */
@WebServlet("/GetVideoForUser")
public class GetVideoForUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);
		String user =  (String) session.getAttribute("loggedInUser");
		
		
		
		try {
			int id = UserService.getUserByEmail(user).getId();
		
		    List<String> videoList = VideoService.getVideoByUser(id);
		    JSONArray videosJSonArray = new JSONArray(videoList);
			out.println(videosJSonArray.toString());
			out.flush();
			out.close();

		} catch (     UserServiceException | UserValidationException | DAOException e) {
			out.append(e.getMessage());
		  
		}
	}



}
