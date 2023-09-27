// Get the div element by its ID
const downloadDiv = document.getElementById("downloadDiv");

// Define the file URL of your resume
const resumeUrl = "resume.pdf"; // Change to your actual resume file URL

// Add a click event listener to the div
downloadDiv.addEventListener("click", () => {
    // Create an anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = "resume.pdf"; // Change to your desired download filename

    // Trigger a click event on the anchor element
    anchor.click();

    // Clean up the anchor element
    anchor.remove();
});
