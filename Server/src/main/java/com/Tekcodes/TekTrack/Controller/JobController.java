package com.Tekcodes.TekTrack.Controller;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;
    private final UserService userService;

    @Autowired
    public JobController(JobService jobService, UserService userService) {
        this.jobService = jobService;
        this.userService = userService;
    }

    @GetMapping("/authjobs")
    public ResponseEntity<List<JobInfo>> getJobsForAuthenticatedUser() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        User user = userService.findByUserName(username);
        Long userId = user.getUserId();

        return ResponseEntity.ok(jobService.findJobsByUserId(userId));
    }

    @GetMapping
    public ResponseEntity<List<JobInfo>> getAllJobs() {
        return ResponseEntity.ok(jobService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobInfo> getJob(@PathVariable Long id) {
        return jobService.findById(id)
                .map(jobInfo -> ResponseEntity.ok(jobInfo))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/new_job")
    public ResponseEntity<JobInfo> create(@RequestBody JobInfo jobInfo) {
        JobInfo createdJob = jobService.create(jobInfo);
        return ResponseEntity.status(201).body(createdJob);
    }

    @PutMapping("/update_job/{id}")
    public ResponseEntity<JobInfo> update(@PathVariable Long id, @RequestBody JobInfo jobInfo) {
        return jobService.update(id, jobInfo)
                .map(updatedJob -> ResponseEntity.ok(updatedJob))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete_job/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        if (jobService.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}