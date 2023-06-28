const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyag Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    text: 'Working with Syntax Ninja was an absolute pleasure. Their expertise in web development and attention to detail ensured that our website was not only visually stunning but also fully functional. They were responsive to our needs and delivered the project on time and within budget. We highly recommend Syntax Ninja for any web development needs.',
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Syntax Ninja is a true professional in the field of web development. They possess an exceptional understanding of design principles and coding languages, which translated into a sleek and user-friendly website for our business. Their ability to effectively communicate complex concepts to us as clients was impressive. We are extremely satisfied with the end result and would gladly work with Syntax Ninja again.',
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: `We couldn't be happier with the services provided by Syntax Ninja. From the initial consultation to the final implementation, they demonstrated a high level of technical proficiency and creativity. Their problem-solving skills were evident when they tackled challenges and found innovative solutions. The website they built for us has significantly enhanced our online presence and exceeded our expectations.`,
  },
  {
  name: 'Sasha Ho',
  position: 'Accountant',
  photo: 'https://randomuser.me/api/portraits/women/47.jpg',
  text: 'I had the pleasure of collaborating with Syntax Ninja on a website development project. Their ability to translate our vision into a functional website was exceptional. They exhibited strong project management skills, keeping us informed throughout the process and promptly addressing any concerns or questions we had. The result was a visually appealing and highly intuitive website that has been instrumental in driving our online business growth.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'Working with Syntax Ninja was an absolute game-changer for our business. Their technical expertise and proficiency in web development were evident from the outset. They took the time to understand our specific requirements and delivered a website that not only met but exceeded our expectations. Their commitment to delivering high-quality work, coupled with their excellent communication skills, made the entire experience seamless and enjoyable. We highly recommend Syntax Ninja to anyone seeking top-notch web development services.',
  },
]

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length -1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
