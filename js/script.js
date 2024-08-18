const ques = document.querySelectorAll(".ques");

ques.forEach((q) => {
  q.addEventListener("click", () => {
    if (!q.classList.contains("active")) {
        ques.forEach((item) => {
            item.classList.remove("active");
        });
        q.classList.add("active");
    } else {
      q.classList.remove("active");
    }
  });
});
