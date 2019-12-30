var containerEl = document.querySelector("#grids-homepage");
var targetSelector = ".grid";
var activeHash = "";

/**
 * Deserializes a hash segment (if present) into in an object.
 *
 * @return {object|null}
 */

function deserializeHash() {
  var hash = window.location.hash.replace(/^#/g, "");
  var obj = null;
  var groups = [];

  if (!hash) return obj;

  obj = {};
  groups = hash.split("&");

  groups.forEach(function(group) {
    var pair = group.split("=");
    var groupName = pair[0];

    obj[groupName] = pair[1].split(",");
  });

  return obj;
}

/**
 * Serializes a uiState object into a string.
 *
 * @param   {object}    uiState
 * @return  {string}
 */

function serializeUiState(uiState) {
  var output = "";

  for (var key in uiState) {
    var values = uiState[key];

    if (!values.length) continue;

    output += key + "=";
    output += values.join(",");
    output += "&";
  }

  output = output.replace(/&$/g, "");

  return output;
}

/**
 * Constructs a `uiState` object using the
 * `getFilterGroupSelectors()` API method.
 *
 * @return {object}
 */

function getUiState() {
  // NB: You will need to rename the object keys to match the names of
  // your project's filter groups – these should match those defined
  // in your HTML.

  var uiState = {
    ssg: mixer.getFilterGroupSelectors("ssg").map(getValueFromSelector),
    cms: mixer.getFilterGroupSelectors("cms").map(getValueFromSelector),
  };

  return uiState;
}

/**
 * Updates the URL hash whenever the current filter changes.
 *
 * @param   {mixitup.State} state
 * @return  {void}
 */

function setHash(state) {
  var selector = state.activeFilter.selector;

  // Construct an object representing the current state of each
  // filter group

  var uiState = getUiState();

  // Create a URL hash string by serializing the uiState object

  var newHash = "#" + serializeUiState(uiState);

  if (selector === targetSelector && window.location.href.indexOf("#") > -1) {
    // Equivalent to filter "all", and a hash exists, remove the hash

    activeHash = "";

    history.replaceState(null, document.title, window.location.pathname);
  } else if (newHash !== window.location.hash && selector !== targetSelector) {
    // Change the hash

    activeHash = newHash;

    history.replaceState(
      null,
      document.title,
      window.location.pathname + newHash
    );
  }
}

/**
 * Updates the mixer to a previous UI state.
 *
 * @param  {object|null}    uiState
 * @param  {boolean}        [animate]
 * @return {Promise}
 */

function syncMixerWithPreviousUiState(uiState, animate) {
  var ssg = uiState && uiState.ssg ? uiState.ssg : [];
  var cms = uiState && uiState.cms ? uiState.cms : [];

  mixer.setFilterGroupSelectors("ssg", ssg.map(getSelectorFromValue));
  mixer.setFilterGroupSelectors("cms", cms.map(getSelectorFromValue));

  // Parse the filter groups (passing `false` will perform no animation)

  return mixer.parseFilterGroups(animate ? true : false);
}

/**
 * Converts a selector (e.g. '.green') into a simple value (e.g. 'green').
 *
 * @param   {string} selector
 * @return  {string}
 */

function getValueFromSelector(selector) {
  return selector.replace(/^./, "");
}

/**
 * Converts a simple value (e.g. 'green') into a selector (e.g. '.green').
 *
 * @param   {string} selector
 * @return  {string}
 */

function getSelectorFromValue(value) {
  return "." + value;
}

var uiState = deserializeHash();

// Instantiate MixItUp

var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
    logicWithinGroup: "or",
    logicBetweenGroups: "and"
  },
  animation: {
    enable: false,
  },
  selectors: {
    target: ".grid"
  },
  callbacks: {
    onMixStart: function(state, futureState) {
      let total = futureState.totalShow;
      let count = document.querySelector(".count-number");
      count.textContent = total;
      // updateFilterCounts(state, futureState);
    },
    onMixEnd: setHash // Call the setHash() method at the end of each operation
  }
});

if (uiState) {
  // If a valid uiState object is present on page load, filter the mixer

  syncMixerWithPreviousUiState(uiState);
}
