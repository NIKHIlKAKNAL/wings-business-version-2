// script.js

// toggle botton script 
 document.addEventListener("DOMContentLoaded", function () {
    const drawer = document.getElementById("sideDrawer");
    const toggleBtn = document.getElementById("drawerToggle");
    const closeBtn = document.getElementById("closeDrawer");
    const drawerLinks = document.querySelectorAll(".drawer-nav a");
    const backdrop = document.getElementById("drawerBackdrop");

    const openDrawer = () => {
      drawer.classList.add("open");
      backdrop.classList.add("active");
    };

    const closeDrawer = () => {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
    };

    toggleBtn.addEventListener("click", openDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener("click", closeDrawer);
    });
  });



  // flying bird animation 
const canvas = document.getElementById("birdCanvas");
const ctx = canvas.getContext("2d");

let width, height;
function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = document.querySelector(".hero").offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Define the bird colors
const birdColors = [
  "blue", "orange", "yellow", "cream", "red", "black", "violet", "green"
];

class Bird {
  constructor(color) {
    this.color = color;
    this.reset();
  }

  reset() {
    this.x = -50;
    this.y = Math.random() * height * 0.5;
    this.size = 10 + Math.random() * 10;
    this.speed = 1 + Math.random() * 2;
    this.wingAngle = 0;
    this.angleSpeed = 0.2 + Math.random() * 0.1;
  }

  update() {
    this.x += this.speed;
    this.wingAngle += this.angleSpeed;
    if (this.x > width + 50) this.reset();
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.beginPath();

    // Left wing
    ctx.moveTo(0, 0);
    ctx.lineTo(
      -this.size,
      -this.size * Math.sin(this.wingAngle)
    );

    // Right wing
    ctx.moveTo(0, 0);
    ctx.lineTo(
      this.size,
      -this.size * Math.sin(this.wingAngle)
    );

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }
}

// Create birds using the defined colors (repeat if needed)
const birds = Array.from({ length: 12 }, (_, i) =>
  new Bird(birdColors[i % birdColors.length])
);

function animate() {
  ctx.clearRect(0, 0, width, height);
  birds.forEach((bird) => {
    bird.update();
    bird.draw(ctx);
  });
  requestAnimationFrame(animate);
}
animate();


document.addEventListener("DOMContentLoaded", () => {
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const serviceDetails = {
  "Printing Services": {
    title: "Printing services",
    description: `The printing business involves creating
                  physical copies of documents or other
                  materials using printing equipment such as
                  printers, presses, and copiers. The materials
                  that are printed can include books,
                  newspapers, brochures, business cards,
                  packaging, and other promotional materials.`,
    image: "images/wb2.jpeg"
  },

  "Branding Services": {
    title: "Printing services",
    description: `The printing business involves creating
                  physical copies of documents or other
                  materials using printing equipment such as
                  printers, presses, and copiers. The materials
                  that are printed can include books,
                  newspapers, brochures, business cards,
                  packaging, and other promotional materials.`,
    image: "images/branding.jpeg"
  },

  "Recruitment": {
    title: "Recruitment",
    description: `At Wings, we offer a streamlined hiring
                  solution that connects you with top-tier
                  talent quickly and efficiently. Our end-toend
                   recruitment services ensure that
                  every step of the process, from candidate
                  sourcing to onboarding, is handled with
                  precision, so you can focus on growing
                  your business while we handle the rest`,
    image: "images/hr1.jpeg"
  },

   "Hr & Payroll": {
    title: "Hr & Payroll",
    description: `At Wings, we offer a streamlined hiring
                  solution that connects you with top-tier
                  talent quickly and efficiently. Our end-toend
                   recruitment services ensure that
                  every step of the process, from candidate
                  sourcing to onboarding, is handled with
                  precision, so you can focus on growing
                  your business while we handle the rest`,
    image: "images/hr.jpeg"
  },

  "web and app development": {
    title: "web and app development",
    description: `At Wings, we specialize in crafting dynamic and user-centric 
                  websites and mobile applications tailored to your business needs. 
                  Whether you're looking to build a sleek, responsive website or an 
                  intuitive mobile app, our team of expert developers uses the latest 
                  technologies to bring your vision to life. We focus on seamless 
                  functionality, innovative design, and exceptional user experience, 
                  ensuring that your digital presence not only stands out but performs 
                  flawlessly. Ready to take your business to the next level? Let’s talk 
                  about how we can turn your ideas into reality!`,
    image: "images/web.jpeg"
  },

  "CRM": {
    title: "CRM",
    description: `At Wings, we understand the power of customer relationships. 
                  Our CRM solutions are designed to streamline and enhance your 
                  customer interactions, helping you build stronger, more personalized
                   connections. From managing leads and tracking communications to 
                   automating processes and improving team collaboration, our CRM 
                   systems are fully customizable to meet the unique needs of your 
                   business. With the right tools at your fingertips, you'll be able 
                   to make data-driven decisions, increase efficiency, and ultimately 
                   drive growth. Ready to enhance your customer experience and optimize 
                   your workflow? Let’s explore how our CRM solutions can work for you!`,
    image: "images/CRM.jpeg"
  },

  "Digital Marketing": {
    title: "Digital Marketing",
    description: `At Wings, we offer data-driven digital marketing strategies 
                  that drive real results. From SEO and PPC to social media 
                  campaigns, we help you reach your target audience and boost 
                  online visibility. Our tailored solutions increase traffic, 
                  improve conversions, and maximize ROI. Ready to grow your brand 
                  online?`,
    image: "images/digital.jpeg"
  },

  "BTL": {
    title: "BTL Training",
    description: `At Wings, we specialize in BTL activities that create engaging, 
                  on-ground experiences for your brand. From events and activations 
                  to experiential marketing, we design strategies that connect with 
                  your audience directly. Our hands-on approach ensures memorable 
                  experiences that drive customer loyalty and increase brand awareness. 
                  Are you ready to make your brand stand out with impactful BTL activities?`,
    image: "images/act.jpeg"
  },

  "Training": {
    title: "Training & Development",
    description: `Training and development (T&D) are
                organizational processes that help
                employees improve their skills,
                knowledge, and capabilities
                Focuses on improving job-related skills
                and competencies. Training can be used
                to help employees perform better in their
                current role or prepare for future changes`,
    image: "images/wb2.jpeg"
  },

  "Business Consulting": {
    title: "Business Consulting",
    description: `At Wings, we offer expert business consulting services that help you
                  optimize your operations, strategy, and growth potential. 
                  Whether you're a startup or an established business, we work 
                  closely with you to identify opportunities, overcome challenges, 
                  and implement solutions that drive success. Ready to take your 
                  business to the next level?`,
    image: "images/business.jpeg"
  },

   "Corporate Gifting": {
    title: "Corporate Gifting",
    description: `Corporate gifting can be defined as the
                  practice of giving gifts to a range of
                  organizational stakeholders, including
                  but not limited to employees, clients,
                  new prospects, partners, suppliers, and
                  others. Its ultimate purpose is to build
                  relationships and show appreciation`,
    image: "images/cop.jpeg"
  },

   "Interior Design": {
    title: "Interior Design",
    description: `Transform your space into a reflection of your style and 
                  functionality with our expert interior design services. 
                  From residential to commercial projects, we specialize in 
                  creating environments that are both beautiful and practical. 
                  Let us help you design spaces that inspire, motivate, 
                  and enhance your lifestyle or business. Ready to redefine your 
                  space?`,
    image: "images/inter.jpeg"
  }
};

window.showModal = (serviceName) => {
  const data = serviceDetails[serviceName];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;

  const modalImg = modal.querySelector(".modal-image img");
  modalImg.src = data.image;
  modalImg.alt = data.title;

  modal.classList.add("show"); // 👈 Use class instead of display
};

window.closeModal = () => {
  modal.classList.remove("show"); // 👈 Use class instead of display
};

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});


});


// contact us form details js 
let submitted = false;

document.querySelector("form").addEventListener("submit", function () {
  const loadingMessage = document.getElementById("loadingMessage");
  const successMessage = document.getElementById("successMessage");
  const form = document.querySelector("form");

  loadingMessage.style.display = "block";

  setTimeout(function () {
    loadingMessage.style.display = "none";
    form.style.display = "none";
    successMessage.style.display = "block";
  }, 2000);
});


  
