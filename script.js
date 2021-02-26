// Json Data

const card = [
  {
    id: "1",
    batchName: "SCI 8A",
    subjectName: "Mathematics, 11th CBSE",
    students: "100 Students",
    time: "12:00 PM",
  },
  {
    id: "2",
    batchName: "SCI 8A",
    subjectName: "Physics, 11th CBSE",
    students: "100 Students",
    time: "12:40 PM",
  },
  {
    id: "3",
    batchName: "SCI 8A",
    subjectName: "Chemistry, 11th CBSE",
    students: "100 Students",
    time: "1:20 PM",
  },
  {
    id: "4",
    batchName: "COM 8B",
    subjectName: "Economics, 11th CBSE",
    students: "150 Students",
    time: "12:00 PM",
  },
  {
    id: "5",
    batchName: "COM 8B",
    subjectName: "Accountancy, 11th CBSE",
    students: "150 Students",
    time: "12:40 PM",
  },
  {
    id: "6",
    batchName: "COM 8B",
    subjectName: "Management, 11th CBSE",
    students: "150 Students",
    time: "1:20 PM",
  },
];

document.getElementById("card").innerHTML = `
${card
  .map(function (data) {
    return `
   <div class="card-wrap mb-4 mt-4">
    <div class="card ml-5 rounded-corner mr-4 bg-color-card" style="width: 24rem; height:16rem;">
      <span class="circle d-flex justify-content-center align-items-center mt-2 px-1">12</span>
    
    <div class="card-body d-flex ">
        <div>
          <h5 class="card-title">Batch Name ${data.batchName}</h5>
          <h6 class="mb-2">
           <i class="fas fa-clone mr-2"></i>
          ${data.subjectName}
          </h6>
         
          <h6 class="mb-4">
            <i class="fas fa-user-circle mr-2"></i>${data.students}
          </h6>
          <p class="card-text card-subtitle mb-2 text-muted">Upcoming Class</p>
          <p class="card-subtitle mb-2 text-muted">
            Mon, 28th May, <span class="text-dark">${data.time}</span>
          </p>
          <div class="d-flex justify-content-left mt-4">
            <li class="mr-1 text-light bg-color-blue px-1 py-1 rounded-circle">
              Mo
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Tu
            </li>
            <li class="mr-1 text-dark bg-color-grey px-1 py-1 rounded-circle">
              We
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Th
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Fr
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Sa
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Su
            </li>
          </div>
        </div>
        <div class="d-flex flex-column ml-5 mt-4">
          <i class="fas fa-book mb-3 mt-2" aria-hidden="true"></i>
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </div>
      </div>
      </div>
       
   </div>

  `;
  })
  .join("")}
`;

const card2 = [
  {
    id: "7",
    batchName: "ART 8C",
    subjectName: "History, 11th CBSE",
    students: "200 Students",
    time: "12:00 PM",
  },
  {
    id: "7",
    batchName: "ART 8B",
    subjectName: "Geography, 11th CBSE",
    students: "200 Students",
    time: "12:40 PM",
  },
  {
    id: "8",
    batchName: "ART 8B",
    subjectName: "Psychology, 11th CBSE",
    students: "200 Students",
    time: "1:20 PM",
  },
];

// Show More Card
document.getElementById("card2").innerHTML = `
${card2
  .map(function (data2) {
    return `
   <div class="card-wrap mb-4 mt-4">
    <div class="card ml-5 rounded-corner mr-4 bg-color-card" style="width: 24rem; height:16rem;">
     <span class="circle d-flex justify-content-center align-items-center mt-2 px-1">12</span>  
    <div class="card-body d-flex ">
        <div>
          <h5 class="card-title">Batch Name ${data2.batchName}</h5>
          <h6 class="mb-2">
            <i class="fas fa-clone mr-2"></i>${data2.subjectName}
          </h6>
          <h6 class="mb-4">
            <i class="fas fa-user-circle mr-2"></i>${data2.students}
          </h6>
          <p class="card-text card-subtitle mb-2 text-muted">Upcoming Class</p>
          <p class="card-subtitle mb-2 text-muted">
            Mon, 28th May, <span class="text-dark">${data2.time}</span>
          </p>
          <div class="d-flex justify-content-left mt-4">
            <li class="mr-1 text-light bg-color-blue px-1 py-1 rounded-circle">
              Mo
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Tu
            </li>
            <li class="mr-1 text-dark bg-color-grey px-1 py-1 rounded-circle">
              We
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Th
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Fr
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Sa
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Su
            </li>
          </div>
        </div>
        <div class="d-flex flex-column ml-5 mt-4">
          <i class="fas fa-book mb-3 mt-2" aria-hidden="true"></i>
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </div>
      </div>
      </div>
   </div>

  `;
  })
  .join("")}
`;

/////////////////////////////// ------------------------------------ //////////////////////////////////

const card3 = [
  {
    id: "1",
    batchName: "SCI 8A",
    subjectName: "Mathematics, 11th CBSE",
    students: "100 Students",
    time: "12:00 PM",
  },
  {
    id: "2",
    batchName: "SCI 8A",
    subjectName: "Physics, 11th CBSE",
    students: "100 Students",
    time: "12:40 PM",
  },
  {
    id: "3",
    batchName: "SCI 8A",
    subjectName: "Chemistry, 11th CBSE",
    students: "100 Students",
    time: "1:20 PM",
  },
];

const dynamo = (document.querySelector(".card3").innerHTML = `
${card3
  .map(function (data3) {
    return `
   <div class="card-wrap mb-4">
    <div class="card ml-5 rounded-corner bg-color-card mr-4" style="width: 24rem; height:16rem;">
     <span class="circle d-flex justify-content-center align-items-center mt-2 px-1">12</span>  
    <div class="card-body d-flex ">
        <div>
          <h5 class="card-title">Batch Name ${data3.batchName}</h5>
          <h6 class="mb-2">
            <i class="fas fa-clone mr-2"></i>${data3.subjectName}
          </h6>
          <h6 class="mb-4">
            <i class="fas fa-user-circle mr-2"></i>${data3.students}
          </h6>
          <p class="card-text card-subtitle mb-2 text-muted">Upcoming Class</p>
          <p class="card-subtitle mb-2 text-muted">
            Mon, 28th May, <span class="text-dark">${data3.time}</span>
          </p>
          <div class="d-flex justify-content-left mt-4">
            <li class="mr-1 text-light bg-color-blue px-1 py-1 rounded-circle">
              Mo
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Tu
            </li>
            <li class="mr-1 text-dark bg-color-grey px-1 py-1 rounded-circle">
              We
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Th
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Fr
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Sa
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Su
            </li>
          </div>
        </div>
        <div class="d-flex flex-column ml-5 mt-4">
          <i class="fas fa-book mb-3 mt-2" aria-hidden="true"></i>
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </div>
      </div>
      </div>
       
   </div>

  `;
  })
  .join("")}
`);

const card4 = [
  {
    id: "7",
    batchName: "ART 8C",
    subjectName: "History, 11th CBSE",
    students: "200 Students",
    time: "12:00 PM",
  },
  {
    id: "7",
    batchName: "ART 8B",
    subjectName: "Geography, 11th CBSE",
    students: "200 Students",
    time: "12:40 PM",
  },
  {
    id: "8",
    batchName: "ART 8B",
    subjectName: "Psychology, 11th CBSE",
    students: "200 Students",
    time: "1:20 PM",
  },
];

// Show More Card
const dynamo2 = (document.querySelector(".card4").innerHTML = `
${card4
  .map(function (data4) {
    return `
   <div class="card-wrap mb-4 mt-4">
    <div class="card ml-5 rounded-corner mr-4 bg-color-card" style="width: 24rem; height:16rem;">
     <span class="circle d-flex justify-content-center align-items-center mt-2 px-1">12</span>  
    <div class="card-body d-flex ">
        <div>
          <h5 class="card-title">Batch Name ${data4.batchName}</h5>
          <h6 class="mb-2">
            <i class="fas fa-clone mr-2"></i>${data4.subjectName}
          </h6>
          <h6 class="mb-4">
            <i class="fas fa-user-circle mr-2"></i>${data4.students}
          </h6>
          <p class="card-text card-subtitle mb-2 text-muted">Upcoming Class</p>
          <p class="card-subtitle mb-2 text-muted">
            Mon, 28th May, <span class="text-dark">${data4.time}</span>
          </p>
          <div class="d-flex justify-content-left mt-4">
            <li class="mr-1 text-light bg-color-blue px-1 py-1 rounded-circle">
              Mo
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Tu
            </li>
            <li class="mr-1 text-dark bg-color-grey px-1 py-1 rounded-circle">
              We
            </li>
            <li class="mr-1 text-light bg-color-blue px-2 py-1 rounded-circle">
              Th
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Fr
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Sa
            </li>
            <li class="mr-1 text-dark bg-color-grey px-2 py-1 rounded-circle">
              Su
            </li>
          </div>
        </div>
        <div class="d-flex flex-column ml-5 mt-4">
          <i class="fas fa-book mb-3 mt-2" aria-hidden="true"></i>
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </div>
      </div>
      </div>
   </div>

  `;
  })
  .join("")}
`);

const headings = [
  {
    name: "Morning Batch, 9th std, CBSE",
  },
  {
    name: "Evening Batch, 9th std, CBSE",
  },
  //   {
  //     name: "Group3, 9th std, CBSE",
  //   },
];

document.getElementById("dynamicData").innerHTML = `
${headings
  .map(function (heading) {
    return `
      <div class="d-flex sub-heading sub mb-4 ">
                    <h4 class=" mt-0 ml-5 heading-content">${heading.name}
                    </h4>
                    <hr class= "rule2" style="width: 420px;" class="mt-5 ml-2 mr-2" />
                     <div class=" border border-primary d-flex rounded-corner mt-4 ml-5" style="width:150px; height:35px">
                    <i class=" fas fa-plus icon-sr mt-2 ml-2 mr-3"></i>
                    <h6 class="text-primary mt-2">New Branch</h6>
                </div>
                </div>

                <div class="row margin card3">${dynamo}
                </div>
                <!-- Show Functionality -->
                <div class="panel-wrapper">
                    <a href="#show2" class="show btn s-margin ml-4" id="show2">Show More</a>
                    <a href="#hide2" class="hide btn s-margin mb-0 " id="hide2">Show Less</a>
                    <div class="panel row margin card4">
                       ${dynamo2}
                    </div>
                </div>
           
`;
  })
  .join("")}
`;
