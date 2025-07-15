function toggleEducation(button) {
      const eduSection = document.getElementById("education");
      eduSection.classList.toggle("d-none");

      if (eduSection.classList.contains("d-none")) {
        button.textContent = "Know My Education Background";
      } else {
        button.textContent = "Hide Education Background";
        eduSection.scrollIntoView({ behavior: "smooth" });
      }
    }

function toggleResumeDropdown() {
    const menu = document.getElementById("resumeMenu");
    menu.classList.toggle("d-none");
  }

  // Optional: hide the dropdown if user clicks outside
  window.addEventListener("click", function (e) {
    const menu = document.getElementById("resumeMenu");
    const btn = document.querySelector(".btn.btn-warning");
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add("d-none");
    }
  });
function openGitHub() {
    const githubURL = "https://github.com/Saiphani2105/Sign-Language-Recognition-System-";
    window.open(githubURL, "_blank"); // Opens in new tab
  }


function openHuggingFace() {
    window.open("https://huggingface.co/spaces/Phaneendrabayi/Zero_To_Hero_Machine_Learning", "_blank");
  }

function openMediumHF() {
    window.open("https://huggingface.co/spaces/Phaneendrabayi/Medium_Tag_Prediction", "_blank");
  }

 function openGitHub1() {
    window.open("https://github.com/Saiphani2105/", "_blank");
  }

  function openHuggingFace1() {
    window.open("https://huggingface.co/spaces/Phaneendrabayi", "_blank");
  }



fetch("certificates.json")
  .then(response => {
    if (!response.ok) throw new Error("File not found");
    return response.json();
  })
  .then(data => {
    const tableBody = document.getElementById("tableBody");
    data.forEach((cert, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${cert.name}</td>
        <td>${cert.course}</td>
        <td>${cert.skills}</td>
        <td>
          <a href="${cert.link}" class="btn btn-sm btn-outline-light" target="_blank">View</a>
              <button class="btn btn-sm btn-outline-danger ms-2 delete-btn" title="Delete">
                <i class="bi bi-trash"></i>
              </button>
        </td>
      `;

      // Append the row
      tableBody.appendChild(row);
    });

    // Attach event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
      button.addEventListener("click", function () {
        const row = this.closest("tr");
        row.remove();
      });
    });
  })
  .catch(err => {
    document.getElementById("tableBody").innerHTML = `
      <tr><td colspan="5" class="text-danger text-center">Error: ${err.message}</td></tr>
    `;
    console.error("Fetch failed:", err);
  });
