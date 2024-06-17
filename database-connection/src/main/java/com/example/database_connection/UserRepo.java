package com.example.database_connection;

//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<Employee, Integer> {

}
