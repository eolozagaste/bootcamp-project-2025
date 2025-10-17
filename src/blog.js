var Blogs = [
    {
        title: "My Journey into Comp Sci.",
        date: "10-18-2025",
        description: "Read about how my love for computers began at a young age, went into hiding when the world needed it most, and came back 5 years later...",
        image: "/images/compsci_blog.jpg",
        imageAlt: "A picture of my workstation showing a computer, engineering project, and Monster energy drink.",
        slug: "/blogs/comp-sci-journey.html",
    },
    {
        title: "FINALLY! A Creative Hobby: Guitar.",
        date: "10-18-2025",
        description: "Read about how I, a young man who swore he had no creative side of his brain, grew a love for one of the most creativity-requiring hobbies; guitar playing.",
        image: "/images/guitar_blog.jpg",
        imageAlt: "A picture of me playing a baby guitar in guitar center",
        slug: "/blogs/guitar.html",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    Blogs.forEach(function (blog) {
        var blogContainer = document.querySelector("#blog-container");
        var blogPost = document.createElement("div");
        blogPost;
        var title = document.createElement("h1");
        var image = document.createElement("img");
        var description = document.createElement("p");
        title.textContent = blog.title;
        image.src = blog.image;
        image.alt = blog.imageAlt;
        description.textContent = blog.description;
        blogPost.classList.add("blog-post");
        blogPost.append(title, image, description);
        if (blogContainer)
            blogContainer.appendChild(blogPost); // Thanks to Emmy in the Discord for this line of code, without checking first if blogContainer exists, error will pop up.
    });
});
