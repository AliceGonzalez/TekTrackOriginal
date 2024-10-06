package com.Tekcodes.TekTrack.Model;

import java.util.Date;
import java.util.Objects;
import jakarta.persistence.*;
import org.apache.catalina.User;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import lombok.*; 

@Entity
@Table(name = "Job")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Data /
@NoArgsConstructor 
@AllArgsConstructor 
public class JobModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long jobInfoId;

    @Column(name = "company_name", length = 100, nullable = false)
    private String company;

    @Column(name = "job_title", length = 100, nullable = false)
    private String jobTitle;

    @Column(name = "job_link", length = 254)
    private String jobUrlLink;

    @Column(name = "job_description", length = 254)
    private String jobDesc;

    @Column(name = "date_applied", length = 50, nullable = false)
    private Date dateApplied;

    @Column(name = "contact_name", length = 100)
    private String contactName;

    @Column(name = "contact_email", length = 150)
    private String contactEmail;

    @Column(name = "contact_number", length = 50)
    private String contactNumber;

    @Column(name = "referral_name", length = 100)
    private String referral;

    @Column(name = "remote")
    private Boolean remote;

    @Column(name = "got_response")
    private Boolean gotResponse;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}