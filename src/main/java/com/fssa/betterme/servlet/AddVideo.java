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
import com.fssa.betterme.service.UserService;
import com.fssa.betterme.service.VideoService;

/**
 * Servlet implementation class AddVideo
 */
@WebServlet("/AddVideo")
public class AddVideo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession(false);
		String user =  (String) session.getAttribute("loggedInUser");
		
		String video = request.getParameter("video");
		int expertId = Integer.parseInt(request.getParameter("expertId"));
		
		PrintWriter out = response.getWriter();
			
		try {
			int id = UserService.getUserByEmail(user).getId();
			boolean res = VideoService.AddVideo(expertId, id, video);
			
			out.print(res);
			out.flush();
			out.close();
		} catch (BookDAOException | UserServiceException | UserValidationException e) {
			
			out.append(e.getMessage());
		}
		

	}

}
