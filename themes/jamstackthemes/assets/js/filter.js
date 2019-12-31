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
      count.textContent = total;
      window.scrollTo(0,0);
      updateFilterCounts(state, futureState);
    },
    onMixClick: function(state, originalEvent) {
    },
    onMixEnd: setHash
  }
});

const ssgGroup = ["brunch", "eleventy", "gatsby", "gridsome", "hexo", "hugo", "jekyll", "middleman", "mkdocs", "nuxt", "pelican", "vuepress"]
const cmsGroup = ["airtable", "contentful", "datocms", "firebase", "forestry", "ghost", "netlifycms", "no-cms", "sanity", "wordpress"]
const cssGroup = ["bootstrap"]
const archetypeGroup = ["business", "multipurpose"]

const groups = {
  ssg: ssgGroup,
  cms: cmsGroup,
  css: cssGroup,
  archetype: archetypeGroup
}

function updateFilterCounts(state, futureState) {
  
  // console.log("state", state)
  // console.log("futureState", futureState)

  let triggerGroup = futureState.triggerElement ? futureState.triggerElement.parentNode.parentNode.parentNode.id.slice(13) : null
  let totalMatching = futureState.targets.map(theme => theme.className.trim().split(" "));
  let matching = futureState.matching.map(theme => theme.className.trim().split(" "));

  // console.log("triggerGroup", triggerGroup);

  let activeGroupsLength = Object.keys(groups).map(group => {
    return mixer.getFilterGroupSelectors(group).length;
  }).reduce((a, b) => a + b, 0) 

  let hasMultipleActiveGroups = activeGroupsLength >= 2;

  // console.log("hasMultipleActiveGroups", hasMultipleActiveGroups);
  // console.log("matching", matching)
  // console.log("groups", groups)
  // console.log("activeGroups", activeGroups);

  // Update Filter Counts 
  Object.keys(groups).forEach((group) => {
    if (hasMultipleActiveGroups) {
      resetCount(totalMatching);
      updateCount(matching);
    } else {
      if (group === triggerGroup) {
        resetCount(totalMatching);
      } else {
        updateCount(matching);
      } 
    }
  })
}

function updateCount(matches) {
  Object.keys(groups).forEach((group) => {
    groups[group].forEach(term => {
      let count = matches.filter(match => {
        return match.includes(term);
      })
      document.querySelector(`#filter-count-${term}`).innerText = count.length
    })
  })
}

function resetCount(matches) {
  Object.keys(groups).forEach((group) => {
    groups[group].forEach(term => {
      let count = matches.filter(match => {
        return match.includes(term);
      })
      document.querySelector(`#filter-count-${term}`).innerText = count.length
    })
  })
}

var uiState = deserializeHash();

if (uiState) {
  // If a valid uiState object is present on page load, filter the mixer
  syncMixerWithPreviousUiState(uiState);
}
