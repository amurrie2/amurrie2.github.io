const form = document.getElementById("intro-form");
const coursesContainer = document.getElementById("courses-container");
const addCourseBtn = document.getElementById("addCourseBtn");
const clearCoursesBtn = document.getElementById("clearCoursesBtn");

addCourseBtn.addEventListener("click", function () {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");

    courseDiv.innerHTML = `
        <input type="text" placeholder="Course Name" required>
        <input type="text" placeholder="Reason for taking this course" required>
        <button type="button" class="delete-course">Delete</button>
    `;

    coursesContainer.appendChild(courseDiv);
});

clearCoursesBtn.addEventListener("click", function () {
    coursesContainer.innerHTML = "";
});

coursesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-course")) {
        event.target.parentElement.remove();
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const nickname = document.getElementById("nickname").value;
    const mascot = document.getElementById("mascot").value;
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personalBackground").value;
    const professional = document.getElementById("professionalBackground").value;
    const academic = document.getElementById("academicBackground").value;
    const webdev = document.getElementById("webdev").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funny").value;
    const anything = document.getElementById("anything").value;
    const quote = document.getElementById("quote").value;

    const image = document.getElementById("image").files[0];
    const imageURL = URL.createObjectURL(image);

    const courses = document.querySelectorAll(".course");
    let courseList = "";

    courses.forEach(function (course) {
        const inputs = course.querySelectorAll("input");
        const courseName = inputs[0].value;
        const courseReason = inputs[1].value;

        courseList += `<li><strong>${courseName}:</strong> ${courseReason}</li>`;
    });

    document.querySelector("main").innerHTML = `
        <h2>${firstName} ${middleName} ${lastName}${nickname ? ` (${nickname})` : ""}'s Introduction</h2>

        <figure>
            <img src="${imageURL}" alt="${firstName} ${lastName}" style="max-width: 300px;">
            <figcaption>${caption}</figcaption>
        </figure>

        <ul>
            <li><strong>Mascot:</strong> ${mascot}</li>
            <li><strong>Personal Background:</strong> ${personal}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Background in this Subject:</strong> ${webdev}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses I’m Taking & Why:</strong>
                <ul>
                    ${courseList}
                </ul>
            </li>
            <li><strong>Funny/Interesting Item:</strong> ${funny}</li>
            <li><strong>Anything Else:</strong> ${anything}</li>
            <li><strong>Favorite Quote:</strong> ${quote}</li>
        </ul>
    `;
});