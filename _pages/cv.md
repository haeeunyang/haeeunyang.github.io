---
layout: page
permalink: /cv/
title: CV
description: Last updated November 2026.
nav: true
nav_order: 5
---

<!-- The CV is assets/pdf/cv.pdf: shown inline, with a download button. Replace that file to update it. -->
<div class="cv-actions" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem">
  <a class="btn btn-sm z-depth-0 cv-download" href="{{ '/assets/pdf/cv.pdf' | relative_url }}" download="Haeeun_Yang_CV.pdf">
    <i class="fa-solid fa-download"></i> Download CV
  </a>
  <a class="btn btn-sm z-depth-0 cv-open" href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-up-right-from-square"></i> Open in new tab
  </a>
</div>

<object class="cv-pdf" data="{{ '/assets/pdf/cv.pdf' | relative_url }}#view=FitH" type="application/pdf" width="100%" style="height: 85vh; min-height: 600px; border: 1px solid var(--global-divider-color); border-radius: 6px">
  <p>Your browser cannot display the PDF here. <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}" download="Haeeun_Yang_CV.pdf">Download the CV</a> instead.</p>
</object>
