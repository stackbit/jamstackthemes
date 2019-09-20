var mixer = mixitup('.grids', {
  multifilter: {
    enable: true,
    logicWithinGroup: 'or',
    logicBetweenGroups: 'and'
  },
  animation: {
    enable: false,
    duration: 500,
    nudge: true,
    reverseOut: false,
    effects: "fade scale"
  },
  selectors: {
    target: '.grid'
  },
  callbacks: {
    onMixEnd: function(state) {
      console.log(state);
      let total = state.totalShow;
      let count = document.querySelector('.count-number');
      count.textContent = total
      updateFilterCounts(state);
    }
  }
});


function updateFilterCounts(state) {

  let themes = state.matching;
  let active = state.activeFilter.selector.split(' ').map((classes) => classes.slice(1));
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')

  checkboxes.forEach((checkbox) => {
    var filterValue = checkbox.value.slice(1);
    var filterCount = themes.reduce((sum, theme) => {
      let themeClasses = theme.className.trim().split(' ');
      let matchedClasses = themeClasses.filter((className) => {
        return filterValue == className;
      });
      if (matchedClasses.length > 0) {
        return sum += 1
      }
      return sum;
    }, 0);
    document.querySelector(`#filter-count-${filterValue}`).innerText = filterCount
  });
}