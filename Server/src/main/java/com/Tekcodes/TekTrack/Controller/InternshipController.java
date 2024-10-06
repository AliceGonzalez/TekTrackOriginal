package com.Tekcodes.TekTrack.Controller;

//CLASS DECLARATION
@RestController // Class handles HTTP Requests (Combines @Controller & @ResponseBody)
@RequestMapping("/internship") // Sets base URL for all endpoints in this controller
public class InternshipController {
   private final InternshipService internshipService;

 //DEPENDENCY INJECTION
 @Autowired // Injects Use & Internship service dependencies allowing controller to access business logic
 public InternshipController(InternshipService internshipService){
   this.internshipService = internshipService;
 }

 @GetMapping // Maps GET requests to the method.
 // Method retrieves all internships from the service and returns them wrapped in a ResponseEntity with a 200 OK status
 public ResponseEntity<List<InternshipModel>> getAllInternships() {
   List<InternshipModel> internships = internshipService.findAll();
   return ResponseEntity.ok(internships);
 }

 @GetMapping("/{id}") // Maps GET requests to /internships/{id}
 // Method uses @PathVariable to extract the ID from the URL
 // Retrieves the internship by ID and returns it. If not found, it returns a 404 Not Found status.
 public ResponseEntity<InternshipModel> getInternshipById(@PathVariable Long id) {
   return internshipService.findById(id)
            .map(internship -> ResponseEntity.ok(internship))
            .orElse(ResponseEntity.notFound().build());
 }

 @PostMapping // Maps POST requests to the method.
 // Accepts an InternshipModel object in the request body and creates a new internship.
 // It returns the created internship with a 201 Created status
 public ResponseEntity<InternshipModel> createInternship(@RequestBody InternshipModel internship) {
      InternshipModel createdInternship = internshipService.create(internship);
      return ResponseEntity.status(201).body(createdInternship);
 }

 @PutMapping("/{id}") // Maps PUT requests to /internships/{id}
 // Updates an existing internship. If successful, it returns the updated internship; if not found, it returns a 404 Not Found status.
 public ResponseEntity<InternshipModel> updateInternship(@PathVariable Long id, @RequestBody InternshipModel internship) {
      return internshipService.update(id, internship)
               .map(updatedInternship -> ResponseEntity.ok(updatedInternship))
               .orElse(ResponseEntity.notFound().build());
 }

 @DeleteMapping("/{id}") // Maps DELETE requests to /internships/{id}
// Attempts to delete the internship by ID. If successful, it returns a 204 No Content status; if not found, it returns a 404 Not Found status.
 public ResponseEntity<Void> deleteInternship(@PathVariable Long id) {
      if (internshipService.deleteById(id)) {
         return ResponseEntity.noContent().build();
      }
      return ResponseEntity.notFound().build();
 }
}
