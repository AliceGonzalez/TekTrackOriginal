package com.Tekcodes.TekTrack.Repository;

@Repository
public interface JobRepository extends CrudRepository <Job, Long>{
    List<Job> findById(Long userId);
}
