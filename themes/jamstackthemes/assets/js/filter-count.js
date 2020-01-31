let filters = {}
let initialFilters = {}

const mixer = mixitup('#grids-homepage', {
  multifilter: {
    enable: true,
    logicWithinGroup: 'or',
    logicBetweenGroups: 'and'
  },
  animation: {
    enable: false,
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
    },
    onMixClick: function(state, originalEvent) {
    }
  }
});

function updateFilterCounts(state, futureState) {
  
  let emptyGroups = Object.keys(filters).filter((filterGroup) => {
    return groupEmpty(filterGroup);
  })

  console.log("emptyGroups", emptyGroups)
  let parent = futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13)
  console.log("parent", parent)

  if (parent === "ssg") {
    emptyGroups.forEach((group) => {
      if (group === "cms") {
        updateFilterGroup("cms", futureState);
        resetFilterGroup("ssg");
      }
      if (group === "ssg") {
        updateFilterGroup("ssg", futureState);
        resetFilterGroup("cms");
      }
    })
    if (!emptyGroups.length) {
      updateFilterGroup("cms", futureState);
      updateFilterGroup("ssg", futureState);
    }
  }

  if (parent === "cms") {
    emptyGroups.forEach((group) => {
      if (group === "ssg") {
        updateFilterGroup("ssg", futureState);
        resetFilterGroup("cms");
      }
      if (group === "cms") {
        updateFilterGroup("cms", futureState);
        resetFilterGroup("ssg");
      }
    })
    if (!emptyGroups.length) {
      updateFilterGroup("cms", futureState);
      updateFilterGroup("ssg", futureState);
    }
  }

  if (parent === "css") {
    emptyGroups.forEach((group) => {
      console.log("filters", filters);
      if (group === "css") {
        updateFilterGroup("css", futureState);
        resetFilterGroup("cms");
        resetFilterGroup("ssg");
        resetFilterGroup("archetype");
      }
      if (group === "ssg") {
        updateFilterGroup("ssg", futureState);
        resetFilterGroup("css");
        resetFilterGroup("cms");
        resetFilterGroup("archetype");
      }
      if (group === "cms") {
        updateFilterGroup("cms", futureState);
        resetFilterGroup("ssg");
        resetFilterGroup("css");
        resetFilterGroup("archetype");
      }
    })

    if (!emptyGroups.length) {
      updateFilterGroup("cms", futureState);
      updateFilterGroup("ssg", futureState);
      updateFilterGroup("css", futureState);
      updateFilterGroup("archetype", futureState);
    }
  }

  if (emptyGroups.length >= 4) {
    emptyGroups.forEach((group) => {
      resetFilterGroup(group);
    })
  }
 
}

function listSelected(filterGroup) {
  let selected = []
  document.querySelectorAll(`#filter-group-${filterGroup} .filter-button`).forEach((filter)=> {
    let classArray = [...filter.classList];
    classArray.forEach((item) =>{
      if (item === 'mixitup-control-active') {
        selected.push(item)
      }
    });
  });
  return selected
}

function groupEmpty(filterGroup) {
  let empty = []
  document.querySelectorAll(`#filter-group-${filterGroup} .filter-button`).forEach((filter)=> {
    let classArray = [...filter.classList];
    classArray.forEach((item) =>{
      if (item === 'mixitup-control-active') {
        empty.push(item)
      }
    });
  });
  if (empty.length) {
    return false
  }
  return true
}

function updateFilters(state, futureState) {

  let parent = futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13)
  let grid = futureState.matching;

  Object.keys(filters).forEach((filterGroup) => {
    console.log("updateFilters", filterGroup)
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

  console.log("filters", filters);

  Object.keys(filters).forEach((filterGroup) => {
    Object.keys(filters[filterGroup]).forEach((filter) => {
      document.querySelector(`#filter-count-${filter}`).innerText = filters[filterGroup][filter]
    })
  })
}

function updateFilterGroup(filterGroup, futureState) {

  let parent = futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13)
  let grid = futureState.matching;

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

  Object.keys(filters[filterGroup]).forEach((filter) => {
    document.querySelector(`#filter-count-${filter}`).innerText = filters[filterGroup][filter]
  })
}

function resetFilterGroup(filterGroup) {
  Object.keys(initialFilters[filterGroup]).forEach((filter) => {
    document.querySelector(`#filter-count-${filter}`).innerText = initialFilters[filterGroup][filter]
  })
  filters[filterGroup] = JSON.parse(JSON.stringify(initialFilters[filterGroup]))
}

function initFilters() {
  console.log("initFilters")
  document.querySelectorAll('.filter').forEach((filterGroup)=> {
    let filterGroupName = filterGroup.classList[1].slice(13);
    filters[filterGroupName] = {}
    let filterCounts = filterGroup.querySelectorAll('.filter-count');
  
    filterCounts.forEach((item) => {
      let name = item.id.slice(13);
      let count = item.innerHTML;
      filters[filterGroupName][name] = count
    });
    initialFilters = JSON.parse(JSON.stringify(filters))
  })
}

initFilters();
