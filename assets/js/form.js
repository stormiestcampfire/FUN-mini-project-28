const projectNameEl = $("#project-name");
const projectTypeEl = $("#project-type");
const hourlyWageEl = $("#project-wage");
const dueDateEl = $("#project-due-date");
const submitButtonEl = $("#project-form");

submitButtonEl.on("submit", function(event)
{
    event.preventDefault(); // Default behavior is to reload page
    var newProject = collectProjectFormData();
    //printProjectDataToTable(newProject, $("<tr>")); // Example usage
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

/**
 * Adds a project to a given table row element
 * @param {*} project The project element to add to the table
 * @param {*} tableRow The row of the table element to receive the project
 */
function printProjectDataToTable(project, tableRow)
{
    var cell = $("<td>");
    cell.text(project.name);
    tableRow.append(cell);

    cell = $("<td>");
    cell.text(project.type);
    tableRow.append(cell);

    cell = $("<td>");
    cell.text(project.wage);
    tableRow.append(cell);

    cell = $("<td>");
    cell.text(project.dueDate);
    tableRow.append(cell);

    cell = $("<td>");
    var daysUntilDue = moment(project.dueDate, "MM DD YYYY").diff(moment(), "days", true);
    daysUntilDue = Math.ceil(daysUntilDue);
    cell.text(daysUntilDue + " day(s)"); // Days until due
    tableRow.append(cell);

    cell = $("<td>");
    var totalEarned = project.wage * daysUntilDue * 8;
    cell.text(totalEarned); // Estimated total earned
    tableRow.append(cell);
}
