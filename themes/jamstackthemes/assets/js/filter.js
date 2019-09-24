let filters = {}
let initialFilters = {}

const mixer = mixitup('.grids', {
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
  let parent = futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13)
  // let trigger = futureState.triggerElement.id.slice(14)

  // let selected = Object.keys(filters).filter((filterGroup) => {
  //   listSelected(filterGroup);
  // })

  // console.log("emptyGroups", emptyGroups);
  // console.log("parent", parent);
  // console.log("trigger", trigger);
  // console.log("selected");

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

  if (emptyGroups.length >= 2) {
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
  // console.log("groupEmpty", filterGroup, empty)
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

  // console.log("update filter group", filterGroup);

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
  // console.log("reset", filterGroup)
  // console.log("reset filters", initialFilters)
  Object.keys(initialFilters[filterGroup]).forEach((filter) => {
    document.querySelector(`#filter-count-${filter}`).innerText = initialFilters[filterGroup][filter]
  })
  filters[filterGroup] = JSON.parse(JSON.stringify(initialFilters[filterGroup]))
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
    initialFilters = JSON.parse(JSON.stringify(filters))
  })
}

initFilters();
