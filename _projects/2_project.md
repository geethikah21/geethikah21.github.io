---
layout: page
title: Spot Social Navigation
description: Understanding Human Perceptions of Quadruped Robots
img: assets/img/spot_social_nav_conditions.jpg
importance: 2
category: Research
related_publications: true
---

This research project sought to gain an understanding of human perceptions of quadruped robots. The study culminated in two publications, {% cite chonkar2022look %} and {% cite hauser2023s %}.

My primary role on this project was in implementing a custom perception-action software for the Boston Dynamics Spot that would run during the studies. The software detected participants in hallway using the [Azure Kinect Body Tracking SDK](https://microsoft.github.io/Azure-Kinect-Body-Tracking/release/1.1.x/index.html) and sent control commands to enable the robot to navigate around the participant once they were in close proximity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spot_social_nav_conditions.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The five conditions. For {% cite chonkar2022look %}, all five conditions were used. For {% cite hauser2023s %}, only the Autonomous and Leashed conditions were used so that a more conscise hypothesis could be tested.
</div>

View demo of the software below - this was taken with an Azure Kinect camera that we mounted for an overhead view of the hallway:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/spot_hallway_passing_vid.mp4" class="img-fluid rounded z-depth-1" controls=true muted=true %}
    </div>
</div>

I prepared a poster and presented this work at the Undergraduate Research Forum at the University of Texas at Austin.