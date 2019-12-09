package com.singleStone;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(dryRun=false,
				 plugin = {"pretty", "html:target/cucumber","json:target/cucumber-report.json"},
                 tags={"@Test"}, 
                 features="src/test/resources/com/singleStone/features")

public class Runner {

}
