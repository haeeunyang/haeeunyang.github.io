---
layout: page
permalink: /experience/
title: Experience
description:
nav: true
nav_order: 4
---

<!-- Entries come from the Experience section of _data/cv.yml: positions starting with "Research Assistant"
     go to Research, those starting with "Teaching Assistant" go to Teaching. Projects come from their own section; a project with image/details gets a thumbnail and a link that expand a panel below it. -->
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
        {% assign thumb = e.image | default: e.figures[0].src %}
        {% capture panel_id %}project-detail-{{ forloop.index }}{% endcapture %}
        <li class="project{% if has_detail %} expandable{% endif %}">
          <div class="expand-row">
            <div class="expand-main">
              <div class="project-head">
                <span class="project-title">{{ e.name }}</span>
                <span class="project-date">{{ e.period }}</span>
              </div>
              <p class="project-org">{{ e.summary }}</p>
              {% if e.highlights %}
                <ul class="items">
                  {% for h in e.highlights %}<li>{{ h }}</li>{% endfor %}
                </ul>
              {% endif %}
              {% if has_detail %}
                {% comment %} Link text lists what the panel holds, e.g. "View details, figures & code". {% endcomment %}
                {% assign parts = "" | split: "" %}
                {% if e.details %}{% assign parts = parts | push: "details" %}{% endif %}
                {% if e.figures.size > 1 %}{% assign parts = parts | push: "figures" %}{% elsif e.image or e.figures %}{% assign parts = parts | push: "figure" %}{% endif %}
                {% if e.links %}{% assign parts = parts | push: "code" %}{% endif %}
                {% assign last_part = parts | last %}
                {% if parts.size > 1 %}
                  {% assign head_parts = parts | pop %}
                  {% capture link_label %}View {{ head_parts | join: ", " }} &amp; {{ last_part }}{% endcapture %}
                {% else %}
                  {% capture link_label %}View {{ last_part }}{% endcapture %}
                {% endif %}
                <button class="expand-link" type="button" data-expand aria-expanded="false" aria-controls="{{ panel_id }}">
                  <span class="expand-link-label" data-closed="{{ e.detail_label | default: link_label | strip }}" data-open="Hide details">{{ e.detail_label | default: link_label | strip }}</span>
                  <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                </button>
              {% endif %}
            </div>
            {% if has_detail and thumb %}
              <button class="expand-thumb" type="button" data-expand aria-expanded="false" aria-controls="{{ panel_id }}" aria-label="Show details for {{ e.name }}">
                <img src="{{ thumb | relative_url }}" alt="" loading="lazy">
              </button>
            {% endif %}
          </div>
          {% if has_detail %}
            <div class="expand-panel" id="{{ panel_id }}">
              <div class="expand-panel-inner">
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
                      <figure class="project-figure{% if f.wide %} project-figure--wide{% endif %}">
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
                <button class="expand-collapse" type="button" aria-controls="{{ panel_id }}">
                  Hide details <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
    <script src="{{ '/assets/js/expand.js' | relative_url }}" defer></script>
  </div>
</div>
