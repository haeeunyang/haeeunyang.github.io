---
layout: page
permalink: /education/
title: Education
description:
nav: true
nav_order: 3
---

<!-- Entries come from the Education and Awards sections of _data/cv.yml, rendered with the theme's CV templates. -->
<div class="cv">
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Degrees</h3>
    {% assign entries = site.data.cv.cv.sections.Education %}
    {% include cv/education.liquid %}
  </div>

  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Honors &amp; Awards</h3>
    {% assign entries = site.data.cv.cv.sections.Awards | al_cv_sort_by_date %}
    {% include cv/awards.liquid %}
  </div>
</div>
