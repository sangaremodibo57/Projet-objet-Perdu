package com.example.NTA.Service;

import com.example.NTA.Model.Profile;
import com.example.NTA.Repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
@Service
@Transactional
public class ProfileServiceImp implements  ProfileService{
    @Autowired
    ProfileRepository profilerepos;

    @Override
    public void addprofile(Profile profile) {
    profilerepos.save(profile);
    }

    @Override
    public List<Profile> getallprofile() {
        return profilerepos.findAll();
    }

    @Override
    public void uploadpicture(MultipartFile profile)  {
        try{
            if (profile.isEmpty()){
                throw  new Exception("This file does not exist");
            }
            Path path = Paths.get("C:/Users/modibo.samake/Documents/Objet_Perdu_Trouve/NTA/src/main/resources/image/" + profile.getOriginalFilename());
            Files.copy(profile.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);
        }catch (Exception e){
            e.printStackTrace();
        }

    }

}
