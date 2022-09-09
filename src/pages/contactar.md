---
layout: "../layouts/Page.astro"
title: "Contactar con Jordi Rivero"
date: 1980-10-26T15:00:00+02:00
slug: "contactar"
---

<form name="contact" method="POST" data-netlify="true">
  <div>
    <label>Your Name: <input type="text" name="name" /></label>
  </div>
  <div>
    <label>Your Email: <input type="email" name="email" /></label>
  </div>
  <div>
    <label>Message: <textarea name="message"></textarea></label>
  </div>
  <div>
    <button type="submit">Send</button>
  </div>
</form>
