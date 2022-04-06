const projectNameEl = $("#project-name");
const projectTypeEl = $("#project-type");
const hourlyWageEl = $("#project-wage");
const dueDateEl = $("#project-due-date");
const submitButtonEl = $("#project-form");

submitButtonEl.on("submit", function(event)
{
    event.preventDefault(); // Default behavior is to reload page
    alert(projectNameEl.val());
});
