
// Init Isotope
var $container = $('.grids').isotope({
  itemSelector: '.grid',
  getSortData: {
    name: '.theme-title',
    stars: '.star-count parseInt',
    lastmod: '.theme-lastmod-date'
  },
  sortAscending: {
    name: true,
    stars: false,
    lastmod: false
  }
});

// Images Loaded prevents cards stacking
$container.imagesLoaded().progress( function() {
  $container.isotope('layout');
});

var filters = {};
var data = $container.data('isotope');
var $filterCount = $('.count-number');

// Sorting
$('.sort').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  console.log(sortValue)
  $container.isotope({ sortBy: sortValue });
  $('.sort button').removeClass('selected');
  $(this).addClass('selected');
});


// Filters
$('.filters').on('change', function(event) {
  var checkbox = event.target;
  var $checkbox = $(checkbox);
  var group = $checkbox.parents('.filter-items').attr('data-group');
  // create array for filter group, if not there yet
  var filterGroup = filters[group];
  if (!filterGroup) {
    filterGroup = filters[group] = [];
  }
  // add/remove filter
  if (checkbox.checked) {
    // add filter
    filterGroup.push(checkbox.value);
  } else {
    // remove filter
    var index = filterGroup.indexOf(checkbox.value);
    filterGroup.splice(index, 1);
  }

  var comboFilter = getComboFilter();
  $container.isotope({ filter: comboFilter });
  updateFilterCount();
});

function getComboFilter() {
  var combo = [];
  for (var prop in filters) {
    var group = filters[prop];
    if (!group.length) {
      // no filters in group, carry on
      continue;
    }
    // add first group
    if (!combo.length) {
      combo = group.slice(0);
      continue;
    }
    // add additional groups
    var nextCombo = [];
    // split group into combo: [ A, B ] & [ 1, 2 ] => [ A1, A2, B1, B2 ]
    for (var i = 0; i < combo.length; i++) {
      for (var j = 0; j < group.length; j++) {
        var item = combo[i] + group[j];
        nextCombo.push(item);
      }
    }
    combo = nextCombo;
  }
  var comboFilter = combo.join(', ');
  return comboFilter;
}

function updateFilterCount() {
  $filterCount.text( data.filteredItems.length );
}


timeago().render(document.querySelectorAll('.relativetime'));
timeago.cancel();