const info = JSON.parse(localStorage.getItem("info"));

for (let i = 0; i < info.length; i++) {
 
    const redirect = document.createElement("a");
    redirect.setAttribute(
      "href",
      `../events/event_update.html?name=${info[i].title}`
    );
    document.body.append(redirect);

    const div_event = document.createElement("div");
    div_event.setAttribute("class", "event");
    redirect.append(div_event);

    const div_event_box = document.createElement("div");
    div_event_box.setAttribute("class", "eventbox");
    div_event.append(div_event_box);

    const div_onuila = document.createElement("div");
    div_onuila.setAttribute("class", "");
    div_event_box.append(div_onuila);

    const img_photo = document.createElement("img");
    img_photo.setAttribute("src", info[i].images.link);
    img_photo.setAttribute("alt", info[i].images.alt);
    div_onuila.append(img_photo);

    const div_none = document.createElement("div");
    div_none.setAttribute("class", "title_para");
    div_event_box.append(div_none);

    const h2_title = document.createElement("h2");
    h2_title.innerHTML = info[i].title;
    div_none.append(h2_title);

    const p_para = document.createElement("p");

    p_para.innerText = info[i].para;
    div_none.append(p_para);

    const div_nothing = document.createElement("div");
    div_nothing.setAttribute("class", "");
    div_event_box.append(div_nothing);

    const venue = document.createElement("h4");
    venue.innerHTML = `Date :  ${info[i].date.date} <br><br>
    Time : ${info[i].date.Time}<br> <br>
    Venue :${info[i].date.venue}`;
    // venue.innerText = info[i].date.Time +`<br>` info[i].date.date `<br>`+  ${info[i].date.Time };
    div_nothing.append(venue);
  }

