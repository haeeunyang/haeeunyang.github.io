---
layout: about
title: About
permalink: /
subtitle: M.S. Student in Management Information Systems · <a href='https://gsb.snu.ac.kr/'>Seoul National University</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <div class="profile-links">
      <a class="profile-btn" href="mailto:yanghe@snu.ac.kr"><i class="fa-solid fa-envelope"></i> Email</a>
      <a class="profile-btn" href="https://github.com/haeeeeuni" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
      <a class="profile-btn" href="/cv/"><i class="fa-solid fa-file-lines"></i> CV</a>
    </div>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # contact buttons sit under the photo instead (profile.more_info)

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

I am an M.S. student in Management Information Systems at the Graduate School of Business, Seoul National University, advised by Prof. Wooje Cho. My research examines how firms' IT and interorganizational relationships shape their cybersecurity risk and value. My current work asks when strategic alliances, and R&D alliances in particular, affect firms' data breach risk.

What I enjoy most is measurement: turning unstructured data into variables for constructs that are hard to observe directly. My undergraduate training in software alongside business administration lets me build these measures myself, such as using LLMs to match patent assignee records to firm names and quantifying firms' digital activity from the text of their annual reports, and then test them with econometric methods for observational data.

<div class="research-interests">
  <h2 class="research-interests-title">Research Interests</h2>
  <ul class="interest-cards interest-cards--topics">
    <li>
      <strong>Cybersecurity, Privacy, and Information Risk</strong>
      <span>Organizational and governance factors behind corporate cyber risk, information security practices, and how security incidents shape stakeholder and user behavior.</span>
    </li>
    <li>
      <strong>IT Strategy and Interorganizational Relationships</strong>
      <span>How firms' digital activities, strategic alliances, and inter-firm arrangements create business value and reshape organizational risk.</span>
    </li>
    <li>
      <strong>Digital Platforms and User Behavior</strong>
      <span>Cross-platform usage dynamics, ecosystem spillovers, and user heterogeneity across mobile apps and digital commerce.</span>
    </li>
  </ul>
  <div class="interest-methods">
    <span class="interest-methods-label">Methods</span>
    <ul class="method-chips">
      <li>Empirical econometrics</li>
      <li>Causal inference</li>
      <li>Econometrics at the intersection with machine learning</li>
      <li>Unstructured text analysis</li>
    </ul>
  </div>
</div>

<script>
  // Center the photo + buttons vertically against the bio paragraphs (wide screens, where the photo floats right).
  (function () {
    function place() {
      var profile = document.querySelector(".post .profile");
      var bio = document.querySelector(".post article > .clearfix");
      if (!profile || !bio) return;
      profile.style.marginTop = "0px";
      if (window.innerWidth < 576) {
        profile.style.marginTop = "";
        return;
      }
      var paras = [];
      for (var el = bio.firstElementChild; el && el.tagName === "P"; el = el.nextElementSibling) paras.push(el);
      if (!paras.length) return;
      // Moving the photo changes how the text wraps around it, so repeat until the centers settle.
      for (var i = 0; i < 4; i++) {
        var top = paras[0].getBoundingClientRect().top;
        var bottom = paras[paras.length - 1].getBoundingClientRect().bottom;
        var box = profile.getBoundingClientRect();
        var delta = (top + bottom) / 2 - (box.top + box.bottom) / 2;
        if (Math.abs(delta) < 1) break;
        profile.style.marginTop = Math.round(parseFloat(profile.style.marginTop) + delta) + "px";
      }
    }
    window.addEventListener("load", place);
    window.addEventListener("resize", place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  })();
</script>
