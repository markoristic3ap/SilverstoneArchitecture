package ch.aaap.silverstone.cucumber.stepdefs;

import ch.aaap.silverstone.SilverstoneApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SilverstoneApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
