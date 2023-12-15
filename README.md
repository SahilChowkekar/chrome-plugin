# Chrome Plugin



## Overview

This Chrome Plugin is a comprehensive tool designed for monitoring and analyzing web page performance. It provides real-time insights into web resources, offering actionable information to optimize page efficiency. This extension is especially beneficial for web developers and educational purposes in web performance.

### Key Features

- **Data Capture Engine**: Monitors web objects like scripts, images, and stylesheets in real-time without affecting page performance.
- **Resource Analysis Module**: Computes performance metrics like DOM Content Loading Time, Total Page Loading Time, Overall Memory Usage, Total Size Downloaded, Total Number of Resources, and Total Time Since Page Open.
- **Dependency Visualization System**: Graphically represents the distribution and interrelation of web page elements.
- **Page Resource Distribution**: Breaks down various types of assets on a web page, including HTML, CSS, JavaScript scripts, images, fonts, and other media files.
- **Resource Attributes**: Provides insights into resource types, sizes, and dependencies.

### Installation

Follow these steps to install and use the Chrome Extension:

#### Cloning the Repository
1. Open your terminal or command prompt.

2. Clone the repository using Git:
   ```bash
   git clone https://github.com/SahilChowkekar/chrome-plugin.git

    ```
2. Navigate to the project directory:
```bash
cd chrome-plugin
```

#### Loading the Extension in Chrome

1. Open Google Chrome.
2. Navigate to the extensions page by entering `chrome://extensions/` in the address bar.
3. Enable Developer Mode by toggling the switch in the top right corner.

### Adding the Extension Components

1. Click on "Load unpacked".
2. Navigate to the `chrome-plugin` directory.
3. Select both folders: `Web-Performace-analyzer` and `Website-analyzer` to load them into Chrome.

### Using the Extension

1. Open any webpage where you wish to analyze web performance.
2. For the `Web-Performace-analyzer`:
  - Click on the extension icon in the Chrome toolbar.
  - Select the "Web Performance Indicator" from the dropdown menu to start the analysis.

3. For the `Website-analyzer`:
  - Open Chrome Developer Tools by right-clicking on the webpage and selecting "Inspect" or pressing `Ctrl+Shift+I` (`Cmd+Option+I` on Mac).
  - Navigate to the "Demo Panel" tab in the Developer Tools.
  - Click on the provided button to initiate the website analysis.


### Usage

- Open the Chrome Developer Tools while browsing.
- Navigate to the Extension to view real-time analytics.
- Interact with various charts and graphs for detailed resource analysis.

### Development

- **Technologies Used**: JavaScript, HTML, CSS.
- **Libraries**: jQuery, Chartist.js, Mustache.js.
- **Browser Compatibility**: Primarily designed for Google Chrome.


## Preview of Chrome Plugin in Action
Here's a preview of the Chrome Plugin in action:

![Dom](https://github.com/SahilChowkekar/chrome-plugin/blob/master/Images/Dom.png)

![Piechart Screenshot](https://github.com/SahilChowkekar/chrome-plugin/blob/master/Images/Piechart.png)

![Web Screenshot](https://github.com/SahilChowkekar/chrome-plugin/blob/master/Images/web2.png)

