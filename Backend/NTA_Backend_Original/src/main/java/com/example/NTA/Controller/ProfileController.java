package com.example.NTA.Controller;

import com.example.NTA.Model.Profile;
import com.example.NTA.Repository.ProfileRepository;
import com.example.NTA.Service.ProfileServiceImp;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/nta/api/v1")
@Api("/nta/api/v1")
public class ProfileController {
    @Autowired
    ProfileServiceImp profileservImp;

    @PostMapping("/upload")
    public ResponseEntity<Profile> uploadpicture(@RequestParam("profile") MultipartFile file) {
        Profile profile= new Profile();
        profile.setNom(file.getOriginalFilename());
        profileservImp.uploadpicture(file);
        profileservImp.addprofile(profile);
        return  new ResponseEntity<>(profile, HttpStatus.OK);
    }

    @GetMapping("/getallprofile")
    public List<Profile> getallprofile() {
        return profileservImp.getallprofile();
    }


}
