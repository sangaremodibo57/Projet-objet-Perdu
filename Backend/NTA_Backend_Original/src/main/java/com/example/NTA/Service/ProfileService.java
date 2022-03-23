package com.example.NTA.Service;

import com.example.NTA.Model.Profile;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProfileService {
    public void addprofile(Profile profile);
    public List<Profile> getallprofile();
    public void  uploadpicture(MultipartFile profile) throws Exception;
}
