package vp.advancedjava.bookDepo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.advancedjava.bookDepo.model.SecurityUser;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<SecurityUser, Long> {
    Optional<SecurityUser> findByUsername(String username);
}