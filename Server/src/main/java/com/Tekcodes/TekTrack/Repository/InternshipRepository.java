package com.Tekcodes.TekTrack.Repository;

@Repository
public interface InternshipRepository extends CrudRepository <Internship, Long>{
    List<Internship> findById(Long userId);
}
