type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const Blogs: Blog[] = [
  {
    title: "My Journey into Comp Sci.",
    date: "10-18-2025",
    description:
      "Read about how my love for computers began at a young age, went into hiding when the world needed it most, and came back 5 years later...",
    image: "/images/compsci_blog.jpg",
    imageAlt:
      "A picture of my workstation showing a computer, engineering project, and Monster energy drink.",
    slug: "path",
  },
  {
    title: "FINALLY! A Creative Hobby: Guitar.",
    date: "10-18-2025",
    description:
      "Read about how I, a young man who swore he had no creative side of his brain, grew a love for one of the most creativity-requiring hobbies; guitar playing.",
    image: "/images/guitar_blog.jpg",
    imageAlt: "A picture of me playing a baby guitar in guitar center",
    slug: "path",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  Blogs.forEach((blog) => {
    const blogContainer = document.querySelector("#blog-container");

    const blogPost = document.createElement("div");
    blogPost
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const description = document.createElement("p");

    title.textContent = blog.title;
    image.src = blog.image;
    image.alt = blog.imageAlt;
    description.textContent = blog.description;

    blogPost.append(title, image, description);
    if (blogContainer) blogContainer.appendChild(blogPost); // Thanks to Emmy in the Discord for this line of code, without checking first if blogContainer exists, error will pop up.
  });
});
