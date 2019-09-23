let filters = {}

const mixer = mixitup('.grids', {
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
    onMixStart: function(state, futureState) {
      let total = futureState.totalShow;
      let count = document.querySelector('.count-number');
      count.textContent = total
      updateFilterCounts(state, futureState);
    }
  }
});


function updateFilterCounts(state, futureState) {
  let parent = futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13)
  let grid = futureState.matching;

  Object.keys(filters).forEach((filterGroup) => {
    // update the count on all filter groups except the selected group.
    if (filterGroup === parent) {
      return false;
    }

    // update the count on individual filters if they are in the grid
    Object.keys(filters[filterGroup]).forEach(filter => {
      filters[filterGroup][filter] = grid.reduce((sum, grid) => {
        let gridClasses = grid.className.trim().split(' ');
        let matchedClasses = gridClasses.filter((className) => {
          return filter == className;
        });
        if (matchedClasses.length > 0) {
          return sum += 1
        }
        return sum;
      }, 0);
    })
  })

  // console.log(filters)

  // Update filter counts in the DOM
  Object.keys(filters).forEach((filterGroup) => {
    Object.keys(filters[filterGroup]).forEach((filter) => {
      document.querySelector(`#filter-count-${filter}`).innerText = filters[filterGroup][filter]
    })
  })
}

function initFilters() {
  document.querySelectorAll('.filter').forEach((filterGroup)=> {
    let filterGroupName = filterGroup.classList[1].slice(13);
    filters[filterGroupName] = {}
    let filterCounts = filterGroup.querySelectorAll('.filter-count');
  
    filterCounts.forEach((item) => {
      let name = item.id.slice(13);
      let count = item.innerHTML;
      filters[filterGroupName][name] = count
    });

  })
}

initFilters();
