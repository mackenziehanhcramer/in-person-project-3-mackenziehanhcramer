// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Mackenzie",        // TODO: Add your name
        title: "MIMS Student",      // TODO: Add your professional title
        email: "mackenzie.hanh@berkeley.edu", // TODO: Add your email
        location: "San Francisco, CA",  // TODO: Add your location
        bio: "I hope to be employed. I am passionate about ethical and meaningful data analysis." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Python",   // TODO: Replace with your actual skills
        "Data analytics",  // TODO: Add more skills
        "Data science"    // TODO: Students should have at least 5 skills
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Measuring People's Body Parts in Novels",
            description: "Honors Thesis",
            technologies: ["Python"], // Array of technologies used
            completionDate: "2024-12-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Narrativity in Song Lyrics", 
            description: "Research paper",
            technologies: ["Annotating"],
            completionDate: "2026-12-01",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:

console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// Create summary statistics
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

// Convert to JSON for storage/debugging
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);

// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);