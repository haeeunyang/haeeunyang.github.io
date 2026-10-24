---
layout: page
permalink: /experience/
title: Experience
description:
nav: true
nav_order: 4
---

<!-- Entries come from the Experience section of _data/cv.yml: positions starting with "Research Assistant"
     go to Research, those starting with "Teaching Assistant" go to Teaching. Projects come from the Projects section. -->
{% assign all = site.data.cv.cv.sections.Experience | al_cv_sort_by_date %}
{% assign research = all | where_exp: "e", "e.position contains 'Research Assistant'" %}
{% assign teaching = all | where_exp: "e", "e.position contains 'Teaching Assistant'" %}

<div class="cv">
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Research Experience</h3>
    {% assign entries = research %}
    {% include cv/experience.liquid %}
  </div>

  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Teaching Experience</h3>
    {% assign entries = teaching %}
    {% include cv/experience.liquid %}
  </div>

  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Projects</h3>
    {% assign entries = site.data.cv.cv.sections.Projects | al_cv_sort_by_date %}
    {% include cv/projects.liquid %}
  </div>
</div>
