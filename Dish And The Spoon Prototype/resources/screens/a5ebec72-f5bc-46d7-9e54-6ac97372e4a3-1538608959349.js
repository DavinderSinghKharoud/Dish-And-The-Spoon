jQuery("#simulation")
  .on("click", ".s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Light',Arial"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Light',Arial"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Light',Arial"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'Roboto-Light',Arial"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 #s-Button_1 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8718abab-4a1c-43db-87cc-bbf8ad3375bc",
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2c1de2a6-70ee-46f9-9c23-2ee068a89d64",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-a5ebec72-f5bc-46d7-9e54-6ac97372e4a3 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_99" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });