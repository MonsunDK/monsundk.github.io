---
layout: page
label: Kontakt
title: >
  Ring, skriv eller kig forbi
manchet: >
  Vi er nemmest at træffe på telefonen i tidsrummet 10.00 - 16.00 i hverdagene.
  Du er også velkommen til at indtale en besked eller sende en mail, så vender vi hurtigt tilbage.
permalink: /kontakt/
image:
iframe:
---


<div class="address-field">

    <p>{{ site.title | escape }}<br>
    {% if site.address %}
    {{ site.address | escape }}<br>{{ site.address2 | escape }}<br>
    {% endif %}
    {% if site.email %}
    <a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
    {% endif %}
    {% if site.phone %}
    {{ site.phone }}
    {% endif %}</p>
</div>
<div style="overflow:hidden;margin:40px 0px -60px;"><iframe class="custom-google-map lazy" style="position:relative; top:-50px; border:none;" src="https://www.google.com/maps/d/embed?mid=1SNiSN10GqAzlEqqBoWFGUHrZU_U" width="100%" height="350"></iframe></div>
<hr>

  <form class="mycontactform" accept-charset="UTF-8" action="https://formspree.io/layout@monsun.dk" method="POST">
      <div class="form-group">
        <label class="sr-only" for="name">Name</label>
        <input class="form-control" type="text" id="name" name="name" placeholder="Navn">
      </div>
    <div class="form-group">
      <label class="sr-only" for="emne">emne</label>
      <input class="form-control" type="text" id="emne" name="subject" placeholder="Emne">
    </div>
    <div class="form-group">
      <label class="sr-only" for="besked">Besked</label>
      <textarea class="form-control" id="besked" rows="8" name="message" placeholder="Besked"></textarea>
    </div>
    <div class="form-inline">
      <div class="form-group">
        <label class="sr-only" for="email">Email</label>
        <input class="form-control" type="email" id="email" name="replyto" placeholder="Email">
      </div>
      <div class="form-group">
        <label class="sr-only" for="telefon">Telefon</label>
        <input class="form-control" type="phone" id="telefone" name="phone" placeholder="Telefon">
      </div>
    </div>

    <button type="submit" class="btn btn-lg btn-primary mb-2">Send</button>
    <p class="help-block">Vi bruger alene e-mail og telefonnummer så vi kan vende tilbage på din henvendelse. Dine kontaktoplysninger behandles naturligvis fortroligt og i henhold til persondataloven.</p>

    <input type="hidden" name="utf8" value="✓">
    <input type="text" name="gotcha" style="display:none">
    <input type="hidden" name="_next" value="http://127.0.0.1:4000/tak/">

    </form>
