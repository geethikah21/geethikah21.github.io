---
layout: page
title: Enabling Block-Stacking Intuition in Robots
description: Robot Learning Course Project
img: assets/img/block_stack.png
importance: 3
category: Course Projects
---

For my robot learning course project, I wanted to investigate how to enable robots to reason about stable block stacking. I wanted to use the block face surface area as a metric to determine the order in which the blocks should be stacked. I created a custom environment in [robosuite](https://robosuite.ai/) in order to generate random sets of five blocks and collect a dataset used for training a model. To aid in surface area estimation, I  fine-tuned a YOLOv8 keypoint detection model using this dataset. Finally, I used the estimated surface areas to formulate a stacking order.

The full report is below:

<iframe src="{{ '/assets/pdf/robot_learning_project_report.pdf' | relative_url }}" 
        width="100%" 
        height="800px" 
        style="border:none;">
</iframe>
