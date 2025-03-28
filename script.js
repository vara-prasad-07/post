const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');



menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})


const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', // Type of chart (line, bar, etc.)
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // X-axis labels
        datasets: [{
          label: 'Total Deliveries',
          data: [50, 100, 150, 200, 250, 300, 350], // Data points for total deliveries
          borderColor: 'rgba(255, 99, 132, 1)', // Line color
          borderWidth: 2, // Line width
          fill: false // No filling under the line
        },
        {
          label: 'Total Complaints Resolved',
          data: [10, 40, 30, 80, 50, 90, 100], // Data points for total complaints resolved
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true, // Responsive to screen size
        scales: {
          y: {
            beginAtZero: true // Y-axis starts at 0
          }
        }
      }
    });




let dashboardbtn=document.getElementById("dashboard");
let aitreatmentbtn=document.getElementById("aitreatment");    
let reportsbtn=document.getElementById("reports");
let dashboardblock=document.getElementById("dashboardmain");
let aitreatmentblock=document.getElementById("aitreatmentmain");
let reportsblock=document.getElementById("reportsmain");

dashboardbtn.addEventListener("click",function(){
    dashboardblock.style.display="block";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="none";
   
})
aitreatmentbtn.addEventListener("click",function(){
    dashboardblock.style.display="none";
    aitreatmentblock.style.display="block";
    reportsblock.style.display="none";
})
reportsbtn.addEventListener("click",function(){
    dashboardblock.style.display="none";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="block";
})