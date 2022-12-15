import { events } from "./DB.js";

const eventIds = JSON.parse(
  new URLSearchParams(window.location.search).get("events")
);

const eventsTable = document.getElementById("eventsTable");
for (const eventId of eventIds) {
  const event = events.find(event => event.id ===eventId)
  const association = document.createElement("div");
  association.className = "association";
  association.innerHTML = event["association"];
  eventsTable.appendChild(association);

  const description = document.createElement("div");
  description.className = "description";
  description.innerHTML = `${event["date"]}<br>${event["hours"]}<br>${event["type"]}<br>${event["description"]}`;
  eventsTable.appendChild(description);

  const linkContainer = document.createElement("div");
  linkContainer.className = "link";
  const link = document.createElement("a");
  link.href = event["link"];
  link.innerText = "LINK";
  linkContainer.appendChild(link);
  eventsTable.appendChild(linkContainer);
}
