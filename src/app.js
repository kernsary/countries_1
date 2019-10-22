import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',
    data: {
      countries: []
    },
    mounted(){
      this.fetchCountries();
      console.log("countries fetched");
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal + country.population;
        }, 0);
      }
    },
    methods: {
      fetchCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }
    }
  })
})
