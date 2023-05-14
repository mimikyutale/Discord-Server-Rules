const htmc = document.createElement('div');
const h1 = document.createElement('h1');
const ul = document.createElement("ul");

h1.textContent = "Pages";
document.getElementById("htmc").appendChild(h1);

const names = [
                "v1",
                //"v2",
            ];

names.forEach(name => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = name;
  link.href = `${name}.html`;
  li.appendChild(link);
  ul.appendChild(li);
});

document.getElementById("htmc").appendChild(ul);
