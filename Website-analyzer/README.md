<!-- # devtools.inspectedWindow

This sample demonstrates using the `inspectedWindow` API to collect and use data on the resouces used in a webpage.

## Overview

`devtools.inspectedWindow.getResources()` is used to collect information about the webpage. A devtools panel is then created to display the amount of resources of each type used on the page.

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Navigate to a webpage and open the devtools window.
4. Navigate to the new devtools panel named "demo panel", and click on the button. -->
# Web Performance Monitoring Chrome Extension

## Overview

This Chrome Extension is a comprehensive tool designed for monitoring and analyzing web page performance. It provides real-time insights into web resources, offering actionable information to optimize page efficiency. This extension is especially beneficial for web developers and educational purposes in web performance.

### Key Features

- **Data Capture Engine**: Monitors web objects like scripts, images, and stylesheets in real-time without affecting page performance.
- **Resource Analysis Module**: Computes performance metrics like DOM Content Loading Time, Total Page Loading Time, Overall Memory Usage, Total Size Downloaded, Total Number of Resources, and Total Time Since Page Open.
- **Dependency Visualization System**: Graphically represents the distribution and interrelation of web page elements.
- **Page Resource Distribution**: Breaks down various types of assets on a web page, including HTML, CSS, JavaScript scripts, images, fonts, and other media files.
- **Resource Attributes**: Provides insights into resource types, sizes, and dependencies.

### Installation

1. Download the extension from [Extension Download Link].
2. In Chrome, navigate to `chrome://extensions/`.
3. Enable Developer Mode.
4. Click on "Load unpacked" and select the downloaded extension folder.

### Usage

- Open the Chrome Developer Tools while browsing.
- Navigate to the "Performance Monitor" tab to view real-time analytics.
- Interact with various charts and graphs for detailed resource analysis.

### Development

- **Technologies Used**: JavaScript, HTML, CSS.
- **Libraries**: jQuery, Chartist.js, Mustache.js.
- **Browser Compatibility**: Primarily designed for Google Chrome.

### Contribution

This project is open for contributions. Please read `CONTRIBUTING.md` for guidelines on how to submit your contributions.

### Authors

- Sahil Chowkekar - schow064@ucr.edu
- Amrutha Alewoor - aalew002@ucr.edu

### License

This project is licensed under [Specify License Type] - see the `LICENSE.md` file for details.

### Acknowledgments

- Thanks to the University of California Riverside and the CS204 course for the guidance and resources provided for this project.
