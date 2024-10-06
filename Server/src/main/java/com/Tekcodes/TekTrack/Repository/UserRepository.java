package com.Tekcodes.TekTrack.Repository;

@Repository
public interface UserRepository extends CrudRepository <User, Long>{
    User findUserName(String username);
}
