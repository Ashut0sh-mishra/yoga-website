package com.yogastudio.yogawebsite.AllController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class YogaController {
	@GetMapping("/yoga")
    public String index() {
		 return "index";// Return the correct view name
    }
}