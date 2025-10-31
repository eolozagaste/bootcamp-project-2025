var Blogs = [
    {
        title: "My Journey into Comp Sci.",
        date: "10-18-2025",
        description: "Read about how my love for computers began at a young age, went into hiding when the world needed it most, and came back 5 years later...",
        image: "/bootcamp-milestone-1/images/compsci_blog.jpg",
        imageAlt: "A picture of my workstation showing a computer, engineering project, and Monster energy drink.",
        slug: "comp-sci-journey",
    },
    {
        title: "FINALLY! A Creative Hobby: Guitar.",
        date: "10-18-2025",
        description: "Read about how I, a young man who swore he had no creative side of his brain, grew a love for one of the most creativity-requiring hobbies; guitar playing.",
        image: "/bootcamp-milestone-1/images/guitar_blog.jpg",
        imageAlt: "A picture of me playing a baby guitar in guitar center",
        slug: "guitar",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    Blogs.forEach(function (blog) {
        var blogContainer = document.querySelector("#blog-container");
        var currContainer = document.querySelector("#".concat(blog.slug, "-curr-container"));
        var blogPost = document.createElement("div");
        var currBlogPost = document.createElement("div");
        var title = document.createElement("h1");
        var image = document.createElement("img");
        var description = document.createElement("p");
        var slug = document.createElement("a");
        title.textContent = blog.title;
        image.src = blog.image;
        image.alt = blog.imageAlt;
        description.textContent = blog.description;
        slug.href = "blogs/".concat(blog.slug, ".html");
        slug.textContent = "Click here to see full post!";
        blogPost.classList.add("blog-post");
        currBlogPost.classList.add("blog-post");
        blogPost.append(title, image, description, slug);
        if (blogContainer)
            blogContainer.appendChild(blogPost);
        var currTitle = document.createElement("h1");
        var currImage = document.createElement("img");
        var currDescription = document.createElement("p");
        currTitle.textContent = blog.title;
        currImage.src = blog.image;
        currImage.alt = blog.imageAlt;
        currDescription.textContent = blog.description;
        currBlogPost.append(currTitle, currImage, currDescription);
        if (currContainer)
            currContainer.appendChild(currBlogPost);
    });
});
