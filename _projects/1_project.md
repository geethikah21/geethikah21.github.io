---
layout: page
title: Spot Simulator
description: Summer Fellowship Project - Simulating Spot gRPC Protocols
img: assets/img/spotsim.png
importance: 1
category: Research
related_publications: false
---

I was awarded a summer fellowship during the summer after my freshman year (Summer 2020) at UT Austin. As part of this fellowship, I and others in the lab during the summer developed a simulator for the Boston Dynamics Spot.

This was especially needed at the time due to the COVID-19 lockdown; access to physical robots in the lab was limited, so the team needed a tool to enable rapid testing/iteration of software involving the Spot.

The software consists of a library of gRPC services that are implemented in a similar manner to those on the physical Spot. This gRPC server interfaces with a Gazebo simulator to visualize the results of invocations of the gRPC services.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spot_gazebo_viz.png" title="spot_sim" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Webviz (left), developed by the AMRL labratory at UT Austin, and the Spot Gazebo simulation (right), developed by my team.
</div>

View a video with the details of this project below:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/m4vXEsBSaEc?si=VfiMEDxLSnEBgEAz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>

This work was presented at the Undergraduate Research Forum at the University of Texas at Austin.