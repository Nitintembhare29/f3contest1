let employees = [];
		let id = 0;

		function addEmployee() {
			const name = document.getElementById("name").value.trim();
			const profession = document.getElementById("profession").value.trim();
			const age = parseInt(document.getElementById("age").value.trim());

			if (!name || !profession || !age) {
				document.getElementById("errorMessage").textContent = "Error : Please Make sure All the fields are filled before adding in an Employee!";
				document.getElementById("errorMessage").style.display = "block";
				document.getElementById("successMessage").style.display = "none";
				return;
			}
           
			id++;
           
			const newEmployee = { id, name, profession, age };
			employees.push(newEmployee);

			document.getElementById("employeeList").innerHTML = "";
			employees.forEach(employee => {
				const employeeDiv = document.createElement("div");
                employeeDiv.setAttribute("id", "added-employees");
				// employeeDiv.innerHTML = `<p style="color: white">${id}.  ${"Name"}: ${employee.name}    ${"Profession"}: ${employee.profession}     ${"Age"}: ${employee.age}</p>
				// 						<button type="button" class="deleteButton"  data-id="${employee.id}">Delete</button>`;
                employeeDiv.innerHTML = `<div class="employee-card"><span> ${employee.id}</span><span> ${"Name"}: ${employee.name}</span><span> ${"Profession"}: ${employee.profession} </span><span> ${"Age"}: ${employee.age}</span><button type="button" class="deleteButton"  data-id="${employee.id}">Delete</button></div>`
				document.getElementById("employeeList").appendChild(employeeDiv);
			});

			document.getElementById("name").value = ""; 
			document.getElementById("profession").value = "";
			document.getElementById("age").value = "";

			document.getElementById("successMessage").textContent = "Success : Employee Added!";
			document.getElementById("successMessage").style.display = "block";
			document.getElementById("errorMessage").style.display = "none";
		}

		document.getElementById("addEmployee").addEventListener("click", addEmployee);

		document.addEventListener("click", function(event) {
			if (event.target.classList.contains("deleteButton")) {
				const employeeId = parseInt(event.target.getAttribute("data-id"));
				employees = employees.filter(employee => employee.id !== employeeId);
				event.target.parentElement.remove();
                
			}
		});

  

        