// Init Isotope
var $container = $('.grids').isotope({
  itemSelector: '.grid',
  getSortData: {
    name: '.theme-title',
    stars: '.star-count parseInt',
    lastmod: '.theme-lastmod-date',
    lastcommit: function(element) {
      return Date.parse($(element).find('.last-commit-date').text());
    }
  },
  sortAscending: {
    name: true,
    stars: false,
    lastmod: false,
    lastcommit: false
  }
});

// Images Loaded prevents cards stacking
$container.imagesLoaded().progress( function() {
  $container.isotope('layout');
});

var filters = {};
var data = $container.data('isotope');
var $totalCount = $('.count-number');

// Sorting Radio Inputs
$('.sort').on( 'click', 'input', function() {
  var sortValue = $(this).attr('data-sort-value');
  $container.isotope({ sortBy: sortValue });
});

// Sorting Buttons
$('.sort').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  $container.isotope({ sortBy: sortValue });
  $('.sort button').removeClass('selected');
  $(this).addClass('selected');
});

// Filters
$('.filters').on('change', function(event) {
  var checkbox = event.target;
  var group = $(checkbox).parents('.filter-group').attr('data-group');

  var filterGroup = filters[group];
  if (!filterGroup) {
    filterGroup = filters[group] = [];
  }

  // add/remove filter
  if (checkbox.checked) {
    filterGroup.push(checkbox.value);
  } else {
    var index = filterGroup.indexOf(checkbox.value);
    filterGroup.splice(index, 1);
  }

  // Return a string of classes which Isotope will filter ie: '.gatsby.datocms'
  var filter = concatValues(filters);
  $container.isotope({ filter: filter });
  
  updateTotalCount();
  updateFilterCounts();

  $(window).scrollTop(0);
});

function concatValues( obj ) {
  
  var keys = Object.keys(obj);

  const filterString = keys.map((key) => {
    return filters[key].map((value) => {
      return value;
    }).join("");
  }).join("");

  console.log("Filter Result", filterString);

  return filterString;
}

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

function updateTotalCount() {
  $totalCount.text( data.filteredItems.length );
}

function updateFilterCounts()  {
  var filteredItems = $container.isotope('getFilteredItemElements');
  var $cmsCheckboxes = $('.filter-group').find('input[type="checkbox"]')

  $cmsCheckboxes.each( function( i, checkbox ) {
    var filterValue = checkbox.value;
    var filterCount = $(filteredItems).filter( filterValue ).length;
    var $count = $(checkbox).parent().siblings('.filter-count')
    if (filterCount === parseInt($count.text())) {
    } else {
      $count.text(filterCount).hide().fadeIn()
    }
  });
}
