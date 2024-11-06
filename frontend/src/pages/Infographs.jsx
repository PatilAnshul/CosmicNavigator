import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';  // Import d3

const ScatterPlot = ({ data, xParam, yParam, colorParam }) => {
  useEffect(() => {
    // Clear previous plot
    d3.select('#scatterplot').selectAll('*').remove();

    // Set dimensions
    const width = 600;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    // Create svg canvas
    const svg = d3
      .select('#scatterplot')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Filter and prepare data
    const filteredData = data.filter(
      d => !isNaN(d[xParam]) && !isNaN(d[yParam]) && d[xParam] && d[yParam]
    );

    filteredData.forEach(d => {
      d[xParam] = +d[xParam];
      d[yParam] = +d[yParam];
    });

    // Set scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, d => d[xParam])])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, d => d[yParam])])
      .range([height, 0]);

    // Add color scale
    const colorScale = d3
      .scaleSequential(d3.interpolatePlasma) // You can choose other color scales like Viridis, Blues, etc.
      .domain([0, d3.max(filteredData, d => d[colorParam])]);

    // Add axes
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));

    // Add axis labels
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + margin.bottom - 5)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text(xParam);

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 10)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text(yParam);

    // Add gridlines
    const makeXGridlines = () => d3.axisBottom(xScale).ticks(5);
    const makeYGridlines = () => d3.axisLeft(yScale).ticks(5);

    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height})`)
      .call(makeXGridlines().tickSize(-height).tickFormat(''));

    svg.append('g')
      .attr('class', 'grid')
      .call(makeYGridlines().tickSize(-width).tickFormat(''));

    // Plot points with color and tooltips
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'lightgray')
      .style('border-radius', '4px')
      .style('padding', '5px');

    svg.selectAll('circle')
      .data(filteredData)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[xParam]))
      .attr('cy', d => yScale(d[yParam]))
      .attr('r', 5)
      .attr('fill', d => colorScale(d[colorParam]))
      .on('mouseover', function (event, d) {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(
          `<strong>Exoplanet:</strong> ${d.Name}<br/>` + // Display Exoplanet name
          `<strong>Distance (ly):</strong> ${d['Distance (ly)']}<br/>` + // Display distance
          `${xParam}: ${d[xParam]}<br/>` +
          `${yParam}: ${d[yParam]}<br/>` +
          `${colorParam}: ${d[colorParam]}`
        )
          .style('left', (event.pageX + 5) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function () {
        tooltip.transition().duration(500).style('opacity', 0);
      });

  }, [data, xParam, yParam, colorParam]);

  return <div id="scatterplot" />;
};

const Infographs = () => {
  const [data, setData] = useState([]);
  const [xParam, setXParam] = useState('Mass (MJ)');
  const [yParam, setYParam] = useState('Mass (MJ)');
  const [colorParam, setColorParam] = useState('Mass (MJ)');

  const columns = [
    'Mass (MJ)', // Numeric, can be used for X or Y axis in scatterplot
    'Period (days)', // Numeric, potential for X or Y axis
    'Semi-major axis (AU)', // Numeric, can be plotted against another value
    'Distance (ly)', // Numeric, can be used in scatterplot
    'Host star mass (M☉)', // Numeric, good for X or Y axis
    'Host star temp (K)', // Numeric, can be plotted against another numeric value
  ];
  
  
  useEffect(() => {
    // Fetch the dataset from public folder
    if (xParam && yParam) {
      // Fetch data from the backend API with selected parameters
      fetch(`http://localhost:4000/exoplanets/`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [[xParam, yParam]]);

  return (
    <div>
      <h1>Exoplanet Scatter Plot</h1>
      <div>
        <label>
          X-axis:
          <select value={xParam} onChange={e => setXParam(e.target.value)}>
            {columns.map(col => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </label>
        <label>
          Y-axis:
          <select value={yParam} onChange={e => setYParam(e.target.value)}>
            {columns.map(col => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </label>
        <label>
          Color:
          <select value={colorParam} onChange={e => setColorParam(e.target.value)}>
            {columns.map(col => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ScatterPlot data={data} xParam={xParam} yParam={yParam} colorParam={colorParam} />
    </div>
  );
};

export default Infographs;
