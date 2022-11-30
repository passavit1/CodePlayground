const url = "https://randomuser.me/api/?results=24";
const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const json = await (await fetch(url)).json();
      resolve(json);
    } catch (error) {
      reject(error.message);
    }
  });
};

const App = async () => {
  const data = await getUser();
  if (data?.results) {
    getList(data.results);
    let rawData = data.results;
    let get_word = document.getElementById("search-box-input");
    get_word.addEventListener("input", (x) => {
      let value = x.target.value;
      let list_container = document.getElementById("user_list");
      list_container.innerHTML = "";
      let newData = rawData.filter((x) => {
        let name = `${x.name.title}.${x.name.first} ${x.name.last}`;
        return name.toLowerCase().includes(value.toLowerCase());
      });
      getList(newData);
    });
  }
};

App();

const getList = (x) => {
  const list_container = document.getElementById("user_list");
  x.forEach((x) => {
    let li = document.createElement("li");
    li.className = "user_list_detail";
    li.innerHTML = `<img src = '${x.picture.large}'/><div class = 'user_list_detail_contact'><div>${x.name.title}.${x.name.first} ${x.name.last} </div><div>${x.email}</div></div> `;
    list_container.appendChild(li);
    li.addEventListener("click", () => show_profile(x));
  });
};

const show_profile = (x) => {
  const show_profile = document.getElementById("chat_container");
  console.log(x);
  show_profile.innerHTML = `<img src = '${x.picture.large}'/>`;
  show_profile.innerHTML += `<h2> ${x.name.title}.${x.name.first} ${x.name.last}</h2>`;
  show_profile.innerHTML += `<p>Gender: ${x.gender}, Age: ${x.dob.age}</p>`;
  show_profile.innerHTML += `<p>Email: ${x.email}</p>`;
  show_profile.innerHTML += `<p>Tel: ${x.phone}</p>`;
  show_profile.innerHTML += `<p>Address: ${x.location.state}, ${x.location.country}</p>`;
};
