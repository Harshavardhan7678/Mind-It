import { fontSize, fontWeight } from "@mui/system";
import React from "react";
import "./First.css";

export default function First() {
  return (
    <>
      <div id="home" className="bg-color-land">
        <div className="title">
          Anxio Talks
          <p>
            Facing Difficulties to deal with your own life? Don't worry, we and
            our team have come forward to help you out.
          </p>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="mydiv btn btn-success mx-2">
            <a href="https://meet.google.com/">
              click on this link to join a meet
            </a>
            <style>.mydiv{fontWeight}</style>
          </button>
          <div className="conatiner">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=rqljsipkktjj83e0207pg3mhqg%40group.calendar.google.com&ctz=Asia%2FKolkata"
              // style="border: 0"
              width="400"
              height="300"
              frameborder="1"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <footer>
        <div className="mydiv"> &copy; made for mental health!!</div>
      </footer>
    </>
  );
}
