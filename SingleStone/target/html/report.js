$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("singleStoneProject.feature");
formatter.feature({
  "line": 2,
  "name": "SingleStone Test",
  "description": "",
  "id": "singlestone-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "The user should search for \"hygieia\"",
  "description": "",
  "id": "singlestone-test;the-user-should-search-for-\"hygieia\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003csearchingItem\u003e\" in the search input box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should see \"\u003ccount\u003e\" or more number of repos",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects CapitalOne/Hygieia repository",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should see following headers with following counts:",
  "rows": [
    {
      "cells": [
        "commits",
        "1000"
      ],
      "line": 13
    },
    {
      "cells": [
        "branches",
        "4"
      ],
      "line": 14
    },
    {
      "cells": [
        "releases",
        "8"
      ],
      "line": 15
    },
    {
      "cells": [
        "contributors",
        "48"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "singlestone-test;the-user-should-search-for-\"hygieia\";",
  "rows": [
    {
      "cells": [
        "searchingItem",
        "count"
      ],
      "line": 18,
      "id": "singlestone-test;the-user-should-search-for-\"hygieia\";;1"
    },
    {
      "cells": [
        "hygieia",
        "3"
      ],
      "line": 19,
      "id": "singlestone-test;the-user-should-search-for-\"hygieia\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3118176848,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on GitHub home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_Step_Def.User_is_on_GitHub_home_page()"
});
formatter.result({
  "duration": 2905547256,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The user should search for \"hygieia\"",
  "description": "",
  "id": "singlestone-test;the-user-should-search-for-\"hygieia\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"hygieia\" in the search input box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should see \"3\" or more number of repos",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects CapitalOne/Hygieia repository",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should see following headers with following counts:",
  "rows": [
    {
      "cells": [
        "commits",
        "1000"
      ],
      "line": 13
    },
    {
      "cells": [
        "branches",
        "4"
      ],
      "line": 14
    },
    {
      "cells": [
        "releases",
        "8"
      ],
      "line": 15
    },
    {
      "cells": [
        "contributors",
        "48"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hygieia",
      "offset": 13
    }
  ],
  "location": "Search_Step_Def.I_should_enter_in_the_search_input_box(String)"
});
formatter.result({
  "duration": 1154636352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Search_Step_Def.User_should_see_or_more_number_of_repos(int)"
});
formatter.result({
  "duration": 98134150,
  "status": "passed"
});
formatter.match({
  "location": "Search_Step_Def.User_should_select_CapitalOne_Hygieia_repository()"
});
formatter.result({
  "duration": 1444520904,
  "status": "passed"
});
formatter.match({
  "location": "Search_Step_Def.User_should_see_following_headers(String,Integer\u003e)"
});
formatter.result({
  "duration": 193027767,
  "status": "passed"
});
formatter.after({
  "duration": 214465863,
  "status": "passed"
});
});