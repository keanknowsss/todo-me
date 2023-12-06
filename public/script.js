document.addEventListener("DOMContentLoaded", function () {
	let editBtn = document.querySelectorAll(".edit-btn");
	let closeBtn = document.querySelectorAll(".close-btn");
	let checkBox = document.querySelectorAll(".checkbox");

	editBtn.forEach((button) => {
		button.addEventListener("click", function () {
			const index = this.getAttribute("data-index");
			const taskContainer = document.getElementById(`task-${index}`);
			const editForm = document.getElementById(`edit-form-${index}`);

			taskContainer.style.display = "none";
			editForm.style.display = "flex";
		});
	});

	closeBtn.forEach((button) => {
		button.addEventListener("click", function () {
			const index = this.getAttribute("data-index");
			const taskContainer = document.getElementById(`task-${index}`);
			const editForm = document.getElementById(`edit-form-${index}`);

			taskContainer.style.display = "flex";
			editForm.style.display = "none";
		});
	});

	checkBox.forEach((box) => {
		box.addEventListener("change", function () {
			const index = this.getAttribute("data-index");
			const taskText = document.getElementById(`task-name-${index}`);
			console.log("checked");

			if (this.checked) {
				taskText.style.textDecoration = "line-through";
			} else {
				taskText.style.textDecoration = "none";
			}
		});
	});
});
