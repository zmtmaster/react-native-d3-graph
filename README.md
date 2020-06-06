# React Native & D3 DemoGraph Application

Demo [expo link]().

## Features

The project demonstrate the usage of React with D3 liberty for React-Native. The base project is [React & D3](https://github.com/zmtmaster/react-d3-graph). The challenge here is that D3 is DOM based, so some features would have to implemented in another way.
The following demo application presents a bar chart. The Y axis represent an amount of some productivity while the X axis represents a month. The chart also displays average line while interactive by the user. It also has dragging features. Once the data is ready to be displayed a fade animation is used. Another feature is that on press of a single bar the color opacity should be changed to focus the user on the column. The user can always click on a bar to show the data.

![alt text](./docs/images/captured.gif 'Sample 1')

## Stack

In the project project the following technologies have been used.

##### Code

- [D3](https://d3js.org/) (scaleLinear, path etc')
- [SVG](https://github.com/react-native-community/react-native-svg) The SVG support
- React Hooks (useEffect, useState, Custom Hooks)
- React Context - USed to store the common parts (scales, data)
- [Animations](https://www.react-spring.io/) Used react-spring animations (animated.rect, useSpring etc');

##### Style

- The styling here is minimal, the containers and text nodes are styled using [styled-components](https://styled-components.com/)
