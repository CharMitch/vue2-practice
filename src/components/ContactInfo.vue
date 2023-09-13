<template>
    <div>
      <h2>{{ sectionHeader }}</h2>
          <ul>
              <li>Phone: 867-5309</li>
              <li>618 Gopher Road, Gravity Falls, Oregon</li>
              <li>Zip code: 90210</li>
          </ul>
    </div>
  </template>
  
  <script>
  
  export default {
      props: [ 'section-header' ]
  
  }
  </script>
  
  <style>
  
  </style>