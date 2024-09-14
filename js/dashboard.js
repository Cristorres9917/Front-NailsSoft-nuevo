// ---------- BAR CHART ----------

var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2],
    name: "Productos",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2998ff",
    "#d50680",
    "#1e9872",
    "#ff9800",
    "#5832b3",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#000",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Teclado", "Laptop", "Monitor", "Mouse", "Parlante"],
    title: {
      style: {
        color: "#000",
      },
    },
    axisBorder: {
      show: true,
      color: "#000",
    },
    axisTicks: {
      show: true,
      color: "#000",
    },
    labels: {
      style: {
        colors: "#000",
      },
    },
  },
  yaxis: {
    title: {
      text: "Total",
      style: {
        color:  "#000",
      },
    },
    axisBorder: {
      color: "#000",
      show: true,
    },
    axisTicks: {
      color: "#000",
      show: true,
    },
    labels: {
      style: {
        colors: "#000",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// ---------- AREA CHART ----------

var areaChartOptions = {
  series: [{
    name: "Ordenes de Compra",
    data: [31, 40, 28, 51, 42, 109, 100],
  }, {
    name: "Ordenes de venta",
    data: [11, 32, 45, 32, 34, 52, 41],
  }],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#000",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#000",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#000",
      show: true,
    },
    axisTicks: {
      color: "#000",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#000",
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Ordenes de compra",
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          colors: ["#000"],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Ordenes de venta",
        style: {
          color:  "#000",
        },
      },
      labels: {
        style: {
          colors: ["#000"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
