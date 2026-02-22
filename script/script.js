let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allcardsection");

const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filterd-section");

function updateDashboard() {
  total.innerText = allCardSection.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}
updateDashboard();

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-700");
  interviewFilterBtn.classList.remove("bg-blue-700");
  rejectedFilterBtn.classList.remove("bg-blue-700");

  allFilterBtn.classList.add("bg-gray-400");
  interviewFilterBtn.classList.add("bg-gray-400");
  rejectedFilterBtn.classList.add("bg-gray-400");

  const selected = document.getElementById(id);

  selected.classList.remove("bg-gray-400");
  selected.classList.add("bg-blue-700");
  
  if(id == 'interview-filter-btn'){
    filterSection.classList.remove('hidden')
    allCardSection.classList.add('hidden')
  }
  else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains('interviewbtn')) {
    const parentNodes = event.target.parentNode;
    // console.log(parentNodes)

    const jobName = parentNodes.querySelector(".jobname").innerText;
    const jobTitle = parentNodes.querySelector(".jobtitle").innerText;
    const jobSalary = parentNodes.querySelector(".jobsalary").innerText;
    const status = parentNodes.querySelector(".status").innerText;
    const notes = parentNodes.querySelector(".notes").innerText;

    console.log(jobName,
      jobSalary,
      jobTitle,
      status,
      notes,)

    parentNodes.querySelector(".status").innerText = 'Interview'

    const cardInfo = {
      jobName,
      jobSalary,
      jobTitle,
      status:"interview",
      notes,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    

    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    renderinterview();
    updateDashboard();

  }
});

function renderinterview() {
  filterSection.innerHTML = "";

  for (let job of interviewList) {
    // console.log(interviewList);

    const div = document.createElement("div");
    div.className = "py-4";
    div.innerHTML = `
            <div class="jobCard py-4 px-6 shadow-md mb-7">
                <h2 class="${job.jobname} font-bold text-xl text-[#002C5C]">Mobile First Corp</h2>
                <h2 class="${job.jobtitle} text-gray-500 mb-4">React Native Developer</h2>
                <h3 class="${job.jobsalary} text-gray-500 mb-4">Remote • Full-time • $130,000 - $175,000</h3>

                <button class="status btn text-[#002C5C]">Not Applied</button>
                <p class="${job.notes} text-[#323B49] mb-4">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <button class="interviewbtn btn border-2 border-green-500 bg-transparent text-green-500">INTERVIEW</button>
                <button class="rejectbtn btn border-2 border-red-600  bg-transparent text-red-500">REJECTED</button>
          </div>
        `;

        filterSection.appendChild(div);
  }
}
