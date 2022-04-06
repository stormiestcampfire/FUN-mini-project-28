const projectNameEl = $("#project-name");
const projectTypeEl = $("#project-type");
const hourlyWageEl = $("#project-wage");
const dueDateEl = $("#project-due-date");
const submitButtonEl = $("#project-form");

submitButtonEl.on("submit", function(event)
{
    event.preventDefault(); // Default behavior is to reload page
    alert(collectProjectFormData());
});

/**
 * Collects input from the project form and saves it to an object
 * @returns an object with the form data as its properties
 */
function collectProjectFormData()
{
    var projectData = {};
    projectData.name = projectNameEl.val();
    projectData.type = projectTypeEl.val();
    projectData.wage = hourlyWageEl.val();
    projectData.dueDate = dueDateEl.val();
    return projectData;
}