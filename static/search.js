import { events } from "./DB.js";

var today = new Date();
const searchButton = document.getElementById("search_btn");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("spinner").classList.remove("hidden");

  const eventType = document.getElementById("search_type").value;
  const location = document.getElementById("search_location").value;

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if(!loggedInUser){
    alert('Please login')
    return
  }

  const filteredEvents = events.filter(
    (event) => event.type === eventType && event.cityId == location && new Date(event.date).getTime() > today.getTime()
  );

  const filteredOver18 =
    loggedInUser.age >= 18
      ? filteredEvents
      : filteredEvents.filter((event) => event.over18 === false);

  console.log("filteredOver18", filteredOver18);
  if (filteredOver18.length === 0) {
    alert("No events found");
    document.getElementById("spinner").classList.add("hidden");
    return;
  }

  setTimeout(() => {
    window.location.replace(
      "result_page.html?events=" +
        JSON.stringify(filteredOver18.map((event) => event.id))
    );
  }, 1500);
});
