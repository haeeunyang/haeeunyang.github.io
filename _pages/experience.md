---
layout: page
permalink: /experience/
title: Experience
description:
nav: true
nav_order: 4
---

<!-- Entries come from the Experience section of _data/cv.yml: positions starting with "Research Assistant"
     go to Research, those starting with "Teaching Assistant" go to Teaching. Projects and Skills come from their own sections; a project with image/details gets an expandable panel. -->
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
    <ul class="projects-list">
      {% assign projects = site.data.cv.cv.sections.Projects | al_cv_sort_by_date %}
      {% for e in projects %}
        {% assign has_detail = false %}
        {% if e.image or e.details or e.figures %}{% assign has_detail = true %}{% endif %}
        <li class="project{% if has_detail %} has-detail{% endif %}">
          <div class="project-head">
            {% if has_detail %}
              <button class="project-toggle" type="button" aria-expanded="false" aria-controls="project-detail-{{ forloop.index }}">
                <i class="fa-solid fa-chevron-right project-chevron" aria-hidden="true"></i>
                <span class="project-title">{{ e.name }}</span>
              </button>
            {% else %}
              <span class="project-title">{{ e.name }}</span>
            {% endif %}
            <span class="project-date">{{ e.period }}</span>
          </div>
          <p class="project-org">{{ e.summary }}</p>
          {% if e.highlights %}
            <ul class="items">
              {% for h in e.highlights %}<li>{{ h }}</li>{% endfor %}
            </ul>
          {% endif %}
          {% if has_detail %}
            <div class="project-detail" id="project-detail-{{ forloop.index }}">
              <div class="project-detail-inner">
                {% if e.details %}<p class="project-detail-text">{{ e.details }}</p>{% endif %}
                {% if e.image %}
                  <figure class="project-figure">
                    <a href="{{ e.image | relative_url }}" target="_blank" rel="noopener" title="Open full size">
                      <img src="{{ e.image | relative_url }}" alt="{{ e.image_alt | default: e.name }}" loading="lazy">
                    </a>
                    {% if e.image_caption %}<figcaption>{{ e.image_caption }}</figcaption>{% endif %}
                  </figure>
                {% endif %}
                {% if e.figures %}
                  <div class="project-figures">
                    {% for f in e.figures %}
                      <figure class="project-figure">
                        <a href="{{ f.src | relative_url }}" target="_blank" rel="noopener" title="Open full size">
                          <img src="{{ f.src | relative_url }}" alt="{{ f.alt | default: f.caption }}" loading="lazy">
                        </a>
                        {% if f.caption %}<figcaption>{{ f.caption }}</figcaption>{% endif %}
                      </figure>
                    {% endfor %}
                  </div>
                {% endif %}
                {% if e.links %}
                  <div class="project-links">
                    {% for l in e.links %}
                      <a class="profile-btn" href="{{ l.url }}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> {{ l.label }}</a>
                    {% endfor %}
                  </div>
                {% endif %}
                <button class="project-collapse" type="button" aria-controls="project-detail-{{ forloop.index }}">
                  Hide details <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
    <script>
      // Expand/collapse project details; the chevron rotates via [aria-expanded].
      function setOpen(project, open) {
        project.classList.toggle("is-open", open);
        project.querySelector(".project-toggle").setAttribute("aria-expanded", String(open));
      }
      document.querySelectorAll(".project-toggle").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var project = btn.closest(".project");
          setOpen(project, !project.classList.contains("is-open"));
        });
      });
      // "Hide details" at the bottom of an open panel: collapse and bring the title back into view.
      document.querySelectorAll(".project-collapse").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var project = btn.closest(".project");
          setOpen(project, false);
          project.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
      });
    </script>
  </div>

  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Skills</h3>
    {% assign entries = site.data.cv.cv.sections.Skills %}
    {% include cv/skills.liquid %}
  </div>
</div>
