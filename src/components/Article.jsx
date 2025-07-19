
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // TimeRenderer function is defined to help render ☕️ or 🍱 icons accordingly
  const TimeRenderer = (minutes) => {
  let icon = "";
  let count = 0;

  if (minutes < 30) {
    while (count * 5 < minutes) count++;
    // Add one coffee cup for every 5 minutes read
    icon = "☕️".repeat(count);
  } else {
    while (count * 10 < minutes) count++;
    icon = "🍱".repeat(count);
  }

  return `${icon} ${minutes} min read`;
};

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} · {TimeRenderer(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
