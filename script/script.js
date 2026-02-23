let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let totalJob = document.getElementById("total-job")


const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allcardsection");

const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filterd-section");
const filterSection2 = document.getElementById("filterd-section-2")

function updateDashboard() {
  total.innerText = allCardSection.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
 
  
}
updateDashboard();

function updatedashbord2(){
 
  totalJob.innerText = filterSection.children.length
  

}
function updatedashbord3(){
totalJob.innerText = filterSection2.children.length


}
function updateDashboard4(){
  totalJob.innerText = allCardSection.children.length
}


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
    filterSection.classList.remove('hidden');
    allCardSection.classList.add('hidden');
    filterSection2.classList.add('hidden');

    updatedashbord2()

  }
  else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
    filterSection2.classList.add('hidden');

    updateDashboard4()
  }
  else if (id == 'rejected-filter-btn'){
    filterSection.classList.add('hidden');
    allCardSection.classList.add('hidden');
    filterSection2.classList.remove('hidden');

    updatedashbord3()

  }
}

mainContainer.addEventListener("click", function (event) {

  // interview btn set
  if (event.target.classList.contains('interviewbtn')) {
    const parentNodes = event.target.parentNode;
    // console.log(parentNodes)

    const jobName = parentNodes.querySelector(".jobname").innerText;
    const jobTitle = parentNodes.querySelector(".jobtitle").innerText;
    const jobSalary = parentNodes.querySelector(".jobsalary").innerText;
    const status = parentNodes.querySelector(".status").innerText;
    const notes = parentNodes.querySelector(".notes").innerText;

    // console.log(jobName,
    //   jobSalary,
    //   jobTitle,
    //   status,
    //   notes,)

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

  // reject btn set

  else if (event.target.classList.contains('rejectbtn')) {
    const parentNodes = event.target.parentNode;
    // console.log(parentNodes)

    const jobName = parentNodes.querySelector(".jobname").innerText;
    const jobTitle = parentNodes.querySelector(".jobtitle").innerText;
    const jobSalary = parentNodes.querySelector(".jobsalary").innerText;
    const status = parentNodes.querySelector(".status").innerText;
    const notes = parentNodes.querySelector(".notes").innerText;

    // console.log(jobName,
    //   jobSalary,
    //   jobTitle,
    //   status,
    //   notes,)

    parentNodes.querySelector(".status").innerText = 'Rejected'

    const cardInfo = {
      jobName,
      jobSalary,
      jobTitle,
      status:"Rejected",
      notes,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }
    renderreject()
    updateDashboard();


  }

  // delete card

else if (event.target.closest('.delete-btn')) {

  const card = event.target.closest('.jobCard');
  const jobName = card.querySelector(".jobname").innerText;

  const allCards = document.querySelectorAll("#allcardsection .jobCard");

  allCards.forEach(item => {
    const name = item.querySelector(".jobname").innerText;
    if (name === jobName) {
      item.remove();
    }
  });

  interviewList = interviewList.filter(item => item.jobName !== jobName);

  rejectedList = rejectedList.filter(item => item.jobName !== jobName);


  card.remove();


  renderinterview();
  renderreject();


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
            <div class="jobCard py-4 px-6 shadow-md mb-7 relative">
                <h2 class="jobname font-bold text-xl text-[#002C5C]">${job.jobName}</h2>
                <h2 class=" text-gray-500 mb-4">${job.jobTitle}</h2>
                <h3 class=" text-gray-500 mb-4">${job.jobSalary}</h3>

                <button class="px-10 py-3 status btn text-[#002C5C]">${job.status}</button>
                <p class=" text-[#323B49] mb-4">${job.notes}</p>
                <button class="interviewbtn btn border-2 border-green-500 bg-transparent text-green-500">INTERVIEW</button>
                <button class="rejectbtn btn border-2 border-red-600  bg-transparent text-red-500">REJECTED</button>
                <button  class=" delete-btn hover:cursor-pointer hover:bg-pink-300 hover:border-pink-300 bg-gray-200 border-6 border-gray-200 rounded-full absolute bottom-55 right-10"><img  src="./images/Trash.png" alt="" /></button>
          </div>
        `;

        filterSection.appendChild(div);
  }
}



// rejecte div


function renderreject() {
  filterSection2.innerHTML = "";

  for (let job of rejectedList) {
    // console.log(rejectedList);

    const div = document.createElement("div");
    div.className = "py-4";
    div.innerHTML = `
            <div class="jobCard py-4 px-6 shadow-md mb-7 relative">
                <h2 class=" jobname font-bold text-xl text-[#002C5C]">${job.jobName}</h2>
                <h2 class=" text-gray-500 mb-4">${job.jobTitle}</h2>
                <h3 class=" text-gray-500 mb-4">${job.jobSalary}</h3>

                <button class="px-10 py-3 status btn text-[#002C5C]">${job.status}</button>
                <p class=" text-[#323B49] mb-4">${job.notes}</p>
                <button class="interviewbtn btn border-2 border-green-500 bg-transparent text-green-500">INTERVIEW</button>
                <button class="rejectbtn btn border-2 border-red-600  bg-transparent text-red-500">REJECTED</button>

                <button  class=" delete-btnhover:cursor-pointer hover:bg-pink-300 hover:border-pink-300 bg-gray-200 border-6 border-gray-200 rounded-full absolute bottom-55 right-10"><img  src="./images/Trash.png" alt="" /></button>
          </div>
        `;

        filterSection2.appendChild(div);
  }
}
