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