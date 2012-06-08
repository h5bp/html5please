/*
 * - BUNYIP - http://github.com/ryanseddon/bunyip
 * Yeti QUnit adaptor, drop this in a test suite that will run through Yeti.
 * See readme.md for specific instructions.
 * MIT License - Copyright (c) 2012 Ryan Seddon
 * http://github.com/ryanseddon/yeti-adpators
*/

var BUNYIP = BUNYIP || {};

(function(win, undef){

    var testsuite = {}, count = 1,
        tests = {}, curTestName,
		tostring = {}.toString;
    
    BUNYIP = testsuite;
    
    /* Yeti uses socket.io and emits a results event when test suite has completed */
    function complete(results) {
        console.log(results);
        $yetify.socket.json.emit("results", results);
    }
	
	function type(obj) {
		return tostring.call(obj).match(/^\[object\s+(.*?)\]$/)[1];
	}
	
	function message(result) {
		if(result.result === "fail") {
			if(result.actual != undef && result.expected != undef) {
				if(!result.message) result.message = "";
                var expectedType = type(result.expected),
                    actualType = type(result.actual);

				result.message = result.message + "\nExpected: " + result.expected.toString() + " (" + expectedType + ")\nActual: " + result.actual.toString() + " (" + actualType + ")";
				
				// Delete props so we don't get any circular refs
				delete result.actual;
				delete result.expected;
			}
		}
		
		return result.message || "";
	}
	
    QUnit.log = function(test) {
        tests["test"+count] = {
            message: test.message,
            result: (test.result) ? test.result : "fail",
            name: "test"+count,
			actual: test.actual,
			expected: test.expected
        };

        count++;
    };

    QUnit.moduleStart = function(test) {
        curTestName = test.name;
    };
    
    /* YUI test keeps a global of all modules and their results */
    QUnit.moduleDone = function(test) {
        var testName = curTestName;

        BUNYIP[testName] = {
            name: testName,
            passed: test.passed,
            failed: test.failed,
            total: test.total
        };

        for (var i in tests) {
            BUNYIP[testName][tests[i].name] = {
                result: tests[i].result,
                message: message(tests[i]),
                name: tests[i].name
            };
        }

        tests = {};
        count = 1;
    };
    
    QUnit.done = function(tests) {
        var results = BUNYIP;
        
        results.passed = tests.passed;
        results.failed = tests.failed;
        results.total = tests.total;
        results.duration = tests.runtime;
        results.name = document.title;

        complete(results);
    };

})(this);