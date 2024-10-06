package com.Tekcodes.TekTrack.Model;

import java.time.LocalDate;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*; 

@Entity
@Table(name = "Interview")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class InterviewModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long interviewId;

    @Column(name = "interview_date", nullable = false)
    private LocalDate interviewDate;

    @Column(name = "interview_stage", nullable = false, length = 50)
    private String stage;

    @Column(name = "ty_note")
    private Boolean tyNote;

    @Column(name = "interview_type")
    private String interviewType;

    @Column(name = "interview_link", length = 154)
    private String interviewLink;

    @Column(name = "interview_status")
    private String interviewStatus;

    @Column(name = "interview_contact_name")
    private String interviewContactName;

    @Column(name = "interview_contact_email")
    private String interviewContactEmail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_info_id")
    @JsonBackReference
    private JobModel jobModel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "internship_id")
    @JsonBackReference
    private Internship internship;
}