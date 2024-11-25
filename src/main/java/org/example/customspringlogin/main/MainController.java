package org.example.customspringlogin.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String forward() {
        return "forward:/index.html";
    }
}
