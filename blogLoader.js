const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

const blog = blogPosts[blogId];

if (blog) {
  document.getElementById("blogImage").src = blog.image;
  document.getElementById("blogImage").alt = blog.title;
  document.getElementById("blogMeta").innerHTML = `${blog.author} • ${blog.time} • ${blog.tag}`;
  document.getElementById("blogTitle").innerText = blog.title;
  document.getElementById("blogContent").innerHTML = blog.content;
} else {
  document.getElementById("blogTitle").innerText = "Blog post not found.";
  document.getElementById("blogContent").innerHTML = `<p>The article you are looking for does not exist.</p>`;
}
