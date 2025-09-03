---
layout: page
title: RoboCup Standard Platform League
description: Soccer Robot League
img: assets/img/nao_robot.jpg
importance: 3
category: Research
related_publications: true
---

I was part of the RoboCup soccer league competition team at UT Austin for two years. The [RoboCup Standard Platform League](https://spl.robocup.org/) is an annual competition. The aim of this competition is to advance the capabilities of robots to play soccer. This competition provides a testbed for a variety of problems including (but not limited to): multi-agent coordination, perception, localization, and motion.

The robots used for the competition are [Nao humanoid robots](https://aldebaran.com/en/nao6/). The processor hardware does not include a GPU, so an underlying challenge is developing effective software that can run on the CPU alone.

During my first year on the team, I worked on enhancing the field line detection module. Detecting and locating the lines on the field helps with robot localization. I utilized the the Hough transform provided by OpenCV to detect lines, then applied some additional distance/angle based heuristics to the output in order to produce more accurate detections.

Here are some images showing the results:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hough-1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hough-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of applying the Hough transform to sample field images
</div>

During my second year on the team, the UT Austin team collaborated with the team at the University of Wisconsin, Madison. Our joint team worked to develop reinforcement learning policies for each of the soccer-playing agents (goalie, defender, attacker, etc.). I worked on developing a policy for the goalie, which involved tuning the reward function and deciding on the appropriate observation space. I also added functionality to randomly initialize the ball position at the beginning of each episode so that the goalie agent was exposed to a variety of scenarios.

Below is a rendering of the trained policy. The reward function included several terms to guide goalie behavior, notably encourage the agent to face the ball, stay in the penalty box, and align itself between the ball and the goal.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/goalie_policy.mp4" class="img-fluid rounded z-depth-1" controls=true muted=true %}
    </div>
</div>

As seen in the video, there are several scenarios where the agent positioning could have been better (e.g., when the ball is nearer to the corners of the field, the agent should have positioned itself to be closer to the goal post nearest to the ball in order to maximize the blocking potential).

After further discussion, the team agreed that it was better to use an analytical policy to position the goalie since this seemed to achieve a behavior more consistent than what could be described with a reward function. 

[Here](https://www.youtube.com/live/JDZ6wihyELQ?si=i11QGg7V2soFw4gh&t=8101) is a recording of the finals of the Challenge Shield division during the 2024 competition, which the team won.

Using reinforcement learning would be better for decision-making aspects that isn't as clear-cut. If I had more time to improve the goalie behavior, I would work on training a policy to guide the goalie's attacking behavior when the ball is near the goal.

The team's work during the second year was published to the ICRA 2025 conference, {% cite labiosa2024reinforcement %}.