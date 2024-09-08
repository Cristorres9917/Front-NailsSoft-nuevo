var myConfig = {
    graphset: [{
      type: "area",
      title: {
        mediaRules: [{ /*zingchart media query syntax*/
          maxWidth: 399,
          text: "New vs. Updates",
          fontSize: 10,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#007AFF",
          height: "18%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Downloads vs. Updates",
          height: "20%",
          marginTop: "2%",
          fontSize: 11,
          fontColor: "#fff",
          textAlign: "center",
          backgroundColor: "#007AFF",
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "New Downloads vs. Updates",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "center",
          backgroundColor: "none"
        }, {
          minWidth: 1024,
          text: "New Downloads vs. Updates",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "16%"
        }]
      },
      subtitle: {
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "iOS",
          fontSize: 8,
          fontColor: "#fff",
          height: "12%",
          marginTop: "18%",
          textAlign: "center",
          backgroundColor: '#007AFF'
        }, {
          minWidth: 1024,
          text: "iOS",
          fontSize: 9,
          fontColor: "#fff",
          height: "13%",
          marginTop: "19%",
          textAlign: "left",
          paddingLeft: "16%",
          backgroundColor: "#007AFF",
        }]
      },
      legend: {
        backgroundColor: "none",
        borderWidth: 0,
        borderColor: "none",
        shadow: 0,
        toggleAction: "remove",
        item: {
          fontColor: "#444"
        },
        mediaRules: [{
          minWidth: 10,
          maxWidth: 1024,
          visible: false
        }, {
          minWidth: 1024,
          align: "left",
          verticalAlign: "middle"
        }]
      },
      scaleX: {
        lineColor: "none",
        item: {
          visible: false
        },
        tick: {
          visible: false
        }
      },
      scaleY: {
        lineColor: "none",
        minValue: 0,
        maxValue: 100,
        item: {
          visible: false
        },
        tick: {
          visible: false
        },
        guide: {
          visible: false
        }
      },
      plot: {
        aspect: "spline",
        marker: {
          visible: false
        },
        tooltip: {
          placement: "node:top",
          offsetY: 0
        }
      },
      plotarea: {
        mediaRules: [{
          maxWidth: 399,
          margin: "45% 5% 5% 5%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "40% 5% 5% 5%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "45% 5% 10% 5%"
        }, {
          minWidth: 1024,
          margin: "30% 4% 4% 4%"
        }]
      },
      mediaRules: [{
        maxWidth: 399,
        x: 0,
        y: 0,
        height: "15%",
        width: "50%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: 0,
        y: 0,
        height: "15%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: 0,
        y: 0,
        height: "20%",
        width: "25%"
      }, {
        minWidth: 1024,
        x: 0,
        y: 0,
        height: "20%",
        width: "25%"
      }],
      series: [{
        values: [35, 42, 67, 89, 25, 34, 67, 85],
        lineColor: "#007AFF",
        backgroundColor: "#5AC8FA",
        legendText: "New",
        legendMarker: {
          backgroundColor: "#007AFF"
        }
      }, {
        values: [12, 20, 35, 61, 42, 45, 50, 61],
        lineColor: "#FF2D55",
        backgroundColor: "#FF3B30",
        legendText: "Updates",
        legendMarker: {
          backgroundColor: "#FF2D55"
        }
      }]
    }, {
      type: "bar",
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "Paid vs. Free",
          fontSize: 10,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#007AFF",
          height: "18%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Paid Users vs. Free",
          height: "20%",
          marginTop: "2%",
          fontSize: 11,
          fontColor: "#fff",
          textAlign: "center",
          backgroundColor: "#007AFF"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Paid Users vs. Free Users",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "center",
          backgroundColor: "none"
        }, {
          minWidth: 1024,
          text: "Paid Users vs. Free Users",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "16%"
        }]
      },
      subtitle: {
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "iOS",
          fontSize: 8,
          fontColor: "#fff",
          height: "12%",
          marginTop: "18%",
          textAlign: "center",
          backgroundColor: '#007AFF'
        }, {
          minWidth: 1024,
          text: "iOS",
          fontSize: 9,
          fontColor: "#fff",
          height: "13%",
          marginTop: "19%",
          textAlign: "left",
          paddingLeft: "16%",
          backgroundColor: "#007AFF"
        }]
      },
      legend: {
        backgroundColor: "none",
        borderWidth: 0,
        borderColor: "none",
        shadow: 0,
        toggleAction: "remove",
        item: {
          fontColor: "#444"
        },
        mediaRules: [{
          minWidth: 10,
          maxWidth: 1024,
          visible: false
        }, {
          minWidth: 1024,
          align: "left",
          verticalAlign: "middle"
  
        }]
      },
      scaleX: {
        lineColor: "none",
        item: {
          visible: false
        },
        tick: {
          visible: false
        }
      },
      scaleY: {
        lineColor: "none",
        minValue: 0,
        maxValue: 100,
        item: {
          visible: false
        },
        tick: {
          visible: false
        },
        guide: {
          visible: false
        }
      },
      plot: {
        alpha: 0.9,
        borderRadiusTopLeft: 2,
        borderRadiusTopRight: 2,
        tooltip: {
          placement: "node:top",
          offsetY: 0
        }
      },
      plotarea: {
        mediaRules: [{
          maxWidth: 399,
          margin: "45% 5% 5% 5%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "40% 5% 5% 5%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "45% 5% 10% 5%"
        }, {
          minWidth: 1024,
          margin: "30% 4% 4% 4%"
        }]
      },
      mediaRules: [{
        maxWidth: 399,
        x: "50%",
        y: 0,
        height: "15%",
        width: "50%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: 0,
        y: "15%",
        height: "15%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: "25%",
        y: 0,
        height: "20%",
        width: "25%"
      }, {
        minWidth: 1024,
        x: "25%",
        y: 0,
        height: "20%",
        width: "25%"
      }],
      series: [{
        values: [35, 42, 67, 89, 25, 34, 67, 85],
        backgroundColor: "#007AFF",
        legendText: "Paid"
      }, {
        values: [12, 20, 35, 61, 42, 45, 50, 61],
        backgroundColor: "#FF2D55",
        legendText: "Free"
      }]
    }, {
      type: "area",
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "New vs. Updates",
          fontSize: 10,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#92C163",
          height: "18%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Downloads vs. Updates",
          height: "20%",
          marginTop: "2%",
          fontSize: 11,
          fontColor: "#fff",
          textAlign: "center",
          backgroundColor: "#92C163"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "New Downloads vs. Updates",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "center",
          backgroundColor: "none"
        }, {
          minWidth: 1024,
          text: "New Downloads vs. Updates",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "16%"
        }]
      },
      subtitle: {
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Andriod",
          fontSize: 8,
          fontColor: "#fff",
          height: "12%",
          marginTop: "18%",
          textAlign: "center",
          backgroundColor: '#92C163'
        }, {
          minWidth: 1024,
          fontSize: 9,
          text: "Andriod",
          fontColor: "#fff",
          height: "13%",
          marginTop: "19%",
          textAlign: "left",
          paddingLeft: "16%",
          backgroundColor: "#92C163",
        }]
      },
      legend: {
        backgroundColor: "none",
        borderWidth: 0,
        borderColor: "none",
        shadow: 0,
        toggleAction: "remove",
        item: {
          fontColor: "#444"
        },
        mediaRules: [{
          minWidth: 10,
          maxWidth: 1024,
          visible: false
        }, {
          minWidth: 1024,
          align: "left",
          verticalAlign: "middle"
        }]
      },
      scaleX: {
        lineColor: "none",
        item: {
          visible: false
        },
        tick: {
          visible: false
        }
      },
      scaleY: {
        lineColor: "none",
        minValue: 0,
        maxValue: 300,
        item: {
          visible: false
        },
        tick: {
          visible: false
        },
        guide: {
          visible: false
        }
      },
      plot: {
        aspect: "spline",
        marker: {
          visible: false
        },
        tooltip: {
          placement: "node:top",
          offsetY: 0
        }
      },
      plotarea: {
        backgroundColor: "#fff",
        mediaRules: [{
          maxWidth: 399,
          margin: "45% 5% 5% 5%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "40% 5% 5% 5%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "45% 5% 10% 5%"
        }, {
          minWidth: 1024,
          margin: "30% 4% 4% 4%"
        }]
      },
      mediaRules: [{
        maxWidth: 399,
        x: 0,
        y: "45%",
        height: "15%",
        width: "50%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: "50%",
        y: 0,
        height: "15%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: "50%",
        y: 0,
        height: "20%",
        width: "25%"
      }, {
        minWidth: 1024,
        x: "50%",
        y: 0,
        height: "20%",
        width: "25%"
      }],
      series: [{
        values: [210, 251, 263, 235, 248, 254, 210, 199],
        lineColor: "#92C163",
        backgroundColor: "#92C163",
        legendText: "New",
        legendMarker: {
          lineColor: "#76AA38",
          backgroundColor: "#92C163",
        }
      }, {
        values: [162, 187, 196, 140, 154, 132, 165, 141],
        lineColor: '#50584C',
        backgroundColor: '#50584C',
        legendText: "Updates"
      }]
    }, {
      type: "bar",
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "Paid vs. Free",
          fontSize: 10,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#90C653",
          height: "18%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Paid Users vs. Free",
          height: "20%",
          marginTop: "2%",
          fontSize: 11,
          fontColor: "#fff",
          textAlign: "center",
          backgroundColor: "#90C653"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Paid Users vs. Free Users",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "center",
          backgroundColor: "none"
        }, {
          minWidth: 1024,
          text: "Paid Users vs. Free Users",
          height: "16%",
          marginTop: "2%",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "16%"
        }]
      },
      subtitle: {
        backgroundColor: "#90C653",
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Andriod",
          fontSize: 8,
          fontColor: "#fff",
          height: "12%",
          marginTop: "18%",
          textAlign: "center",
          backgroundColor: '#90C653'
        }, {
          minWidth: 1024,
          fontSize: 9,
          text: "Andriod",
          fontColor: "#fff",
          height: "13%",
          marginTop: "19%",
          textAlign: "left",
          paddingLeft: "16%",
          backgroundColor: "#90C653",
        }]
      },
      legend: {
        backgroundColor: "none",
        borderWidth: 0,
        borderColor: "none",
        shadow: 0,
        toggleAction: "remove",
        item: {
          fontColor: "#444"
        },
        mediaRules: [{
          minWidth: 10,
          maxWidth: 1024,
          visible: false
        }, {
          minWidth: 1024,
          align: "left",
          verticalAlign: "middle"
        }]
      },
      scaleX: {
        lineColor: "none",
        item: {
          visible: false
        },
        tick: {
          visible: false
        }
      },
      scaleY: {
        lineColor: "none",
        minValue: 0,
        maxValue: 100,
        item: {
          visible: false
        },
        tick: {
          visible: false
        },
        guide: {
          visible: false
        }
      },
      plot: {
        alpha: 0.9,
        borderRadiusTopLeft: 2,
        borderRadiusTopRight: 2,
        tooltip: {
          placement: "node:top",
          offsetY: 0
        }
      },
      plotarea: {
        mediaRules: [{
          maxWidth: 399,
          margin: "45% 5% 5% 5%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "40% 5% 5% 5%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "45% 5% 10% 5%"
        }, {
          minWidth: 1024,
          margin: "30% 4% 4% 4%"
        }]
      },
      mediaRules: [{
        maxWidth: 399,
        x: "50%",
        y: "45%",
        height: "15%",
        width: "50%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: "50%",
        y: "15%",
        height: "15%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: "75%",
        y: 0,
        height: "20%",
        width: "25%"
      }, {
        minWidth: 1024,
        x: "75%",
        y: 0,
        height: "20%",
        width: "25%"
      }],
      series: [{
        values: [35, 42, 67, 89, 25, 34, 67, 85],
        backgroundColor: "#76AA38",
        lineColor: "#76AA38",
        legendText: "Paid"
      }, {
        values: [35, 42, 67, 89, 25, 34, 67, 85],
        backgroundColor: "#50584C",
        lineColor: "#50584C",
        legendText: "Free"
      }]
    }, {
      type: "bar",
      mediaRules: [{
        maxWidth: 399,
        x: 0,
        y: "15%",
        height: "30%",
        width: "100%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: 0,
        y: "30%",
        height: "40%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: 0,
        y: "20%",
        height: "45%",
        width: "50%"
      }, {
        minWidth: 1024,
        x: 0,
        y: "20%",
        height: "45%",
        width: "50%"
      }],
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "Top 3 Phone Models",
          fontSize: 12,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#007AFF",
          height: "13%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Top 3",
          fontSize: 12,
          fontColor: "#fff",
          textAlign: "center",
          paddingLeft: "11%",
          backgroundColor: "#007AFF",
          height: "9%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Top 3 Phone Models",
          fontSize: 12,
          textAlign: "center",
          paddingLeft: "11%",
          backgroundColor: "none",
          height: "8%"
        }, {
          minWidth: 1024,
          text: "Top 3 Phone Models",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "none",
          height: "8%"
        }]
      },
      subtitle: {
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: " ",
          backgroundColor: '#007AFF',
          height: "5%",
          marginTop: "8%"
        }, {
          minWidth: 1024,
          fontSize: 9,
          text: " ",
          backgroundColor: '#007AFF',
          height: "5%",
          marginTop: "8%"
        }]
      },
      plotarea: {
        mediaRules: [{
          maxWidth: 399,
          margin: "20% 5% 20% 10%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "15% 5% 20% 15%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "20% 3% 18% 8%"
        }, {
          minWidth: 1024,
          margin: "20% 3% 18% 8%"
        }],
      },
      plot: {
        alpha: 0.9,
        borderRadiusTopLeft: 2,
        borderRadiusTopRight: 2,
        valueBox: {
          placement: "top-in",
          fontColor: "#fff",
          text: "%t"
        },
        tooltip: {
          placement: "node:top",
          offsetY: -5
        }
      },
      scaleX: {
        labels: ["Septemer 2016"],
        item: {
          fontColor: "#333"
        }
      },
      scaleY: {
        multiplier: true,
        step: 2500,
        guide: {
          lineStyle: "solid"
        }
      },
      series: [{
        values: [6845],
        backgroundColor: "#007AFF",
        text: "iPhone<br>6"
      }, {
        values: [8954],
        backgroundColor: "#FF2D55",
        text: "iPhone<br>6s"
      }, {
        values: [4251],
        backgroundColor: "#5856D6",
        text: "iPhone<br>7"
      }]
    }, {
      type: "bar",
      mediaRules: [{
        maxWidth: 399,
        x: 0,
        y: "60%",
        height: "30%",
        width: "100%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: "50%",
        y: "30%",
        height: "40%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: "50%",
        y: "20%",
        height: "45%",
        width: "50%"
      }, {
        minWidth: 1024,
        x: "50%",
        y: "20%",
        height: "45%",
        width: "50%"
      }],
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "Top 3 Phone Models",
          fontSize: 12,
          fontColor: "#fff",
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "#90C653",
          height: "13%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          text: "Top 3",
          fontSize: 12,
          fontColor: "#fff",
          textAlign: "center",
          paddingLeft: "11%",
          backgroundColor: "#90C653",
          height: "9%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "Top 3 Phone Models",
          fontSize: 12,
          textAlign: "center",
          paddingLeft: "11%",
          backgroundColor: "none",
          height: "8%"
        }, {
          minWidth: 1024,
          text: "Top 3 Phone Models",
          fontSize: 12,
          textAlign: "left",
          paddingLeft: "11%",
          backgroundColor: "none",
          height: "8%"
        }]
      },
      subtitle: {
        mediaRules: [{
          maxWidth: 399,
          visible: false
        }, {
          minWidth: 399,
          maxWidth: 768,
          visible: false
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: " ",
          backgroundColor: '#90C653',
          height: "5%",
          marginTop: "8%"
        }, {
          minWidth: 1024,
          fontSize: 9,
          text: " ",
          backgroundColor: '#90C653',
          height: "5%",
          marginTop: "8%"
        }]
      },
      plotarea: {
        mediaRules: [{
          maxWidth: 399,
          margin: "20% 5% 20% 10%"
        }, {
          minWidth: 399,
          maxWidth: 768,
          margin: "15% 5% 20% 15%"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          margin: "20% 3% 18% 8%"
        }, {
          minWidth: 1024,
          margin: "20% 3% 18% 8%"
        }],
      },
      plot: {
        alpha: 0.9,
        borderRadiusTopLeft: 2,
        borderRadiusTopRight: 2,
        valueBox: {
          placement: "top-in",
          fontColor: "#fff",
          text: "%t"
        },
        tooltip: {
          placement: "node:top",
          offsetY: -5
        }
      },
      scaleX: {
        labels: ["Septemer 2016"],
        item: {
          fontColor: "#333"
        }
      },
      scaleY: {
        multiplier: true,
        step: 1000,
        guide: {
          lineStyle: "solid"
        }
      },
      series: [{
        values: [3425],
        backgroundColor: "#76AA38",
        text: "Galaxy<br>Note 5"
      }, {
        values: [2921],
        backgroundColor: "#50584C",
        text: "Galaxy<br>S6"
      }, {
        values: [2745],
        backgroundColor: "#FFC208",
        text: "Galaxy<br>S7"
      }]
    }, {
      type: "null",
      title: {
        mediaRules: [{
          maxWidth: 399,
          text: "Limited Mobile View",
          fontColor: "#333",
          backgroundColor: "#ccc"
        }, {
          minWidth: 399,
          text: "",
          fontColor: "none"
        }, {
          minWidth: 768,
          maxWidth: 1024,
          text: "",
          fontColor: "none"
        }, {
          minWidth: 1024,
          text: "",
          fontColor: "none"
        }]
      },
      mediaRules: [{
        maxWidth: 399,
        x: 0,
        y: "90%",
        height: "10%",
        width: "100%"
      }, {
        minWidth: 399,
        maxWidth: 768,
        height: 0,
        width: 0
      }, {
        minWidth: 768,
        maxWidth: 1024,
        height: 0,
        width: 0
      }, {
        minWidth: 1024,
        height: 0,
        width: 0
      }],
    }, {
      type: "gauge",
      backgroundColor: "#007AFF",
      mediaRules: [{
        maxWidth: 399,
        x: -200,
        y: -200,
        height: 0,
        width: 0
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: 0,
        y: "70%",
        height: "30%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: 0,
        y: "65%",
        height: "35%",
        width: "50%"
      }, {
        minWidth: 1024,
        x: 0,
        y: "65%",
        height: "35%",
        width: "50%"
      }],
      scaleR: {
        step: 5,
        center: {
          size: 6,
          backgroundColor: "#fff",
          borderColor: "#007AFF"
        },
        ring: {
          backgroundColor: "#FF2D55",
          size: 4
        },
        markers: [{
          type: "area",
          range: [0, 0],
          backgroundColor: "#FF2D55"
        }],
        tick: {
          placement: "out",
          lineColor: "#333",
          size: 5
        },
        guide: {
          lineColor: "#d8d6d6",
          lineWidth: 1,
          lineStyle: "solid"
        },
        item: {
          offsetR: -3,
          fontColor: "#fff"
        }
      },
      plot: {
        csize: 6,
        borderWidth: 0
      },
      scale: {
        sizeFactor: 1.1
      },
      series: [{
        values: [6],
        text: "iPhone 6",
        backgroundColor: "#007AFF",
        tooltip: {
          backgroundColor: "#007AFF"
        }
      }, {
        values: [14],
        text: "iPhone 6s",
        backgroundColor: "#FF2D55",
        tooltip: {
          backgroundColor: "#FF2D55"
        }
      }, {
        values: [21],
        text: "iPhone 7",
        backgroundColor: "#5856D6",
        tooltip: {
          backgroundColor: "#5856D6"
        }
      }]
    }, {
      type: "gauge",
      backgroundColor: "#92C163",
      mediaRules: [{
        maxWidth: 399,
        x: -200,
        y: -200,
        height: 0,
        width: 0
      }, {
        minWidth: 399,
        maxWidth: 768,
        x: "50%",
        y: "70%",
        height: "30%",
        width: "50%"
      }, {
        minWidth: 768,
        maxWidth: 1024,
        x: "50%",
        y: "65%",
        height: "35%",
        width: "50%"
      }, {
        minWidth: 1024,
        x: "50%",
        y: "65%",
        height: "35%",
        width: "50%"
      }],
      scaleR: {
        step: 5,
        center: {
          size: 6,
          backgroundColor: "#fff",
          borderColor: "#84B34C"
        },
        ring: {
          backgroundColor: "#50584C",
          size: 4
        },
        markers: [{
          type: "area",
          range: [0, 0],
          backgroundColor: "#50584C",
          alpha: 0.9
        }],
        tick: {
          placement: "out",
          lineColor: "#333",
          size: 5
        },
        guide: {
          lineColor: "#d8d6d6",
          lineWidth: 1,
          lineStyle: "solid"
        },
        item: {
          offsetR: -3,
          fontColor: "#fff"
        }
      },
      plot: {
        csize: 5,
        borderWidth: 0
      },
      scale: {
        sizeFactor: 1.1
      },
      series: [{
        values: [10],
        backgroundColor: "#84B34C",
        tooltip: {
          backgroundColor: "#84B34C"
        }
      }, {
        values: [15],
        backgroundColor: "#50584C",
        tooltip: {
          backgroundColor: "#50584C"
        }
      }, {
        values: [17],
        backgroundColor: "#FFC208",
        tooltip: {
          backgroundColor: "#FFC208"
        }
      }]
    }]
  };
  
  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: '100%',
    width: '100%'
  });