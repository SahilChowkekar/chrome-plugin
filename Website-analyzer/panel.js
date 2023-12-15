function processResources() {
  const resourcesInfo = [];
  const typeCounts = {};
  const types = {}; // For counting resource types
  const dependencyMap = {}; // Map to store dependencies
  const dependenciesMap = {
    'script': ['stylesheet', 'image'],
    'document': ['script', 'stylesheet', 'image']
    // Add other dependency rules as needed
  };

  // Get resources from the Chrome DevTools API
  chrome.devtools.inspectedWindow.getResources((resources) => {
    resources.forEach((resource, index) => {
      const urlParts = resource.url.split('/');
      const fileName = urlParts[urlParts.length - 1];

      // Initialize dependency map and type count
      if (!dependencyMap[resource.type]) {
        dependencyMap[resource.type] = new Set();
      }
      if (!(resource.type in types)) {
        types[resource.type] = 0;
      }
      types[resource.type] += 1;

      // Create initial resource info object
      const resourceInfo = {
        type: resource.type,
        name: fileName,
        size: getResourceSize(resource),
        order: index, // Use index as the order
        insights: getResourceInsights(resource.type),
        dependencies: [] // Placeholder for dependencies
      };

      resourcesInfo.push(resourceInfo);

      // Update dependency map with this resource
      resourcesInfo.forEach(info => {
        if (info.type !== resource.type) {
          dependencyMap[info.type].add(fileName);
        }
      });

      typeCounts[resource.type] = (typeCounts[resource.type] || 0) + 1;
    });

    // Update resourcesInfo with dependencies from the map
    resourcesInfo.forEach(info => {
      info.dependencies = Array.from(dependencyMap[info.type]).join(', ');
    });

    // Sort resources by the order they were processed
    resourcesInfo.sort((a, b) => a.order - b.order);

    // Display summary of resource types
    let summaryDiv = document.createElement('div');
    summaryDiv.innerText = `Resources on this page: \n${Object.entries(types)
      .map(([type, count]) => `${type}: ${count}`)
      .join('\n')}`;
    summaryDiv.style.fontWeight = 'bold'; // Make the text bold
    document.body.appendChild(summaryDiv);

    // Display resource information in a table
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    // Create table header
    let headerRow = table.insertRow();
    ['Type', 'Name', 'Order', 'Insights', 'Dependencies'].forEach(headerText => {
      let th = document.createElement('th');
      th.style.border = '1px solid #ddd';
      th.style.padding = '8px';
      th.style.backgroundColor = '#989898';
      th.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(th);
    });

    // Create table rows with resource information
    resourcesInfo.forEach((info) => {
      let row = table.insertRow();
      ['type', 'name', 'order', 'insights', 'dependencies'].forEach((key) => {
        let cell = row.insertCell();
        cell.style.border = '1px solid #ddd';
        cell.style.padding = '8px';
        cell.appendChild(document.createTextNode(info[key] || ''));
      });

      // Add alternating row colors
      row.style.backgroundColor = info.order % 2 === 0 ? '#ffffff' : '#8e80e1';
    });

    document.body.appendChild(table);
  });
}

// Provides insights based on the type of the resource
function getResourceInsights(resourceType) {
  switch(resourceType) {
    case 'script':
      return 'Critical for functionality';
    case 'stylesheet':
      return 'Affects rendering';
    case 'image':
      return 'May affect layout';
    case 'font':
      return 'Affects text rendering';
    default:
      return 'Miscellaneous';
  }
}

// Determines if a resource type is a common web page dependency
function isWebPageDependency(resourceType) {
  const dependencyTypes = new Set(['script', 'stylesheet', 'image', 'font']);
  return dependencyTypes.has(resourceType) ? 'Yes' : 'No';
}

// Gets the size of the resource, or 'N/A' if not available
function getResourceSize(resource) {
  return resource.size || 'N/A';
}

// Call the function to process resources
processResources();
