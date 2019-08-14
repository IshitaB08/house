// #region Custom Cell Renderer

function GroupCellRenderer() {}

GroupCellRenderer.prototype.init = (params) => {
  console.log(params);
  if (params.hasOwnProperty('data')) {
    this.eGui = document.createElement('span');
    if (params.data.hasOwnProperty('action') && params.data.action === '...') {
      this.eGui.innerHTML = '&nbsp;&nbsp;&nbsp;' + params.data.value;
    } else if (params.data.expanded) {
      this.eGui.innerHTML = '<i class=\"mdi mdi-chevron-down\"></i>&nbsp;' + params.data.value;
    } else {
      this.eGui.innerHTML= '<i class=\"mdi mdi-chevron-up\"></i>&nbsp;' + params.data.value;
    }
    this.eGui.addEventListener('click', (params) => {
      if(params.target.className.indexOf('chevron') !== -1) {
        if(params.target.className.indexOf('down')!== -1) {
          params.target.className = 'mdi mdi-chevron-up';
        } else {
          params.target.className = 'mdi mdi-chevron-down';
        }
      }
    });
  } 
};

GroupCellRenderer.prototype.getGui = () => {
  return this.eGui;
};


// #endregion

// #region Columns
const columnDefs = [{
  "headerName": "A",
  "field": "A",
  "decimalPlaces": 0,
  "cellClass": cellClass,
  "suppressSorting": false,
  "dataType": "number"
}, {
  "headerName": "B",
  "field": "B",
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "C",
  "field": "C",
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "D",
  "field": "D",
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "E",
  "field": "E",
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "F",
  "field": "F",
  "cellClass": cellClass,

  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "G",
  "field": "G",
  "hide": true,
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "H",
  "field": "H",
  "cellClass": cellClass,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "I",
  "field": "I",
  "cellClass": cellClass,
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "J",
  "field": "J",
  "cellClass": cellClass,
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "K",
  "field": "K",
  "cellClass": cellClass,

  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "L",
  "field": "L",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "M",
  "field": "M",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "N",
  "field": "N",
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "O",
  "field": "O",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "P",
  "field": "P",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "Q",
  "field": "Q",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "R",
  "field": "R",
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "S",
  "field": "S",
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "T",
  "field": "T",
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "U",
  "field": "U",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "V",
  "field": "V",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "W",
  "field": "W",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "X",
  "field": "X",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "Y",
  "field": "Y",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "Z",
  "field": "Z",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "AA",
  "field": "AA",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "BB",
  "field": "BB",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "CC",
  "field": "CC",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "DD",
  "field": "DD",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "EE",
  "field": "EE",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "FF",
  "field": "FF",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "GG",
  "field": "GG",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "HH",
  "field": "HH",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "II",
  "field": "II",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}, {
  "headerName": "KK",
  "field": "KK",
  "hide": true,
  "suppressSorting": false,
  "dataType": "number",
  "decimalPlaces": 2
}]

// #endregion

// #region Rows 
const rowData = [{
  "value": "0000 | 0000S | XYZZ",
  "path": ["0000 | 0000S | XYZZ"],
  "id": "0000 | 0000S | XYZZ",
  "expanded": true,
  "A": "136229.81",
  "B": "-69206.03",
  "C": "-22039.69",
  "D": "154625.98",
  "E": "-9182.40",
  "F": "41525.01",
  "G": "-169558.88",
  "H": "10921.38",
  "I": "-98381.07",
  "J": "126228.93",
  "K": "129511.50",
  "L": "199733.30",
  "M": "-117241.27",
  "N": "2128.74",
  "O": "940000.92",
  "P": "-43747.81",
  "Q": "152077.84",
  "R": "-145319.53",
  "S": "173521.71",
  "T": "-42854.36",
  "U": "-98532.59",
  "V": "-108033.92",
  "W": "-157552.83",
  "X": "196667.71",
  "Y": "-64663.05",
  "Z": "-24068.95",
  "AA": "-95180.53",
  "BB": "-177955.32",
  "CC": "44070.15",
  "DD": "-79699.11",
  "EE": "-51009.67",
  "FF": "3918.06",
  "GG": "36130.76",
  "HH": "-103231.68",
  "II": "-166778.91",
  "KK": "1305.80"
}, {
  "value": "BOB",
  "path": ["0000 | 0000S | XYZZ", "BOB"],
  "id": "0000 | 0000S | XYZZ,BOB",
  "expanded": true,
  "A": "2293.45",
  "B": "2017.17",
  "C": "946.81",
  "D": "-354.95",
  "E": "-2269.69",
  "F": "7561.54",
  "G": "-7202.44",
  "H": "-4959.34",
  "I": "-3647.40",
  "J": "1947.16",
  "K": "-6011.69",
  "L": "-7306.51",
  "M": "-4568.23",
  "N": "-8822.06",
  "O": "5405.35",
  "P": "-983.46",
  "Q": "3333.59",
  "R": "1460.88",
  "S": "1944.04",
  "T": "-1283.71",
  "U": "-365.65",
  "V": "-9076.02",
  "W": "2215.92",
  "X": "-5574.66",
  "Y": "-5880.14",
  "Z": "4226.89",
  "AA": "-8734.29",
  "BB": "3716.24",
  "CC": "-7007.34",
  "DD": "-3084.81",
  "EE": "-8919.63",
  "FF": "5071.82",
  "GG": "-7700.93",
  "HH": "9715.90",
  "II": "1744.81",
  "KK": "-1809.59"
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>LC</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "Wigets"],
  "id": "0000 | 0000S | XYZZ,BOB,LC",
  "expanded": true,
  "A": "820.99",
  "B": "-232.71",
  "C": "29.40",
  "D": "-367.56",
  "E": "247.69",
  "F": "-279.22",
  "G": "-119.21",
  "H": "-249.27",
  "I": "401.59",
  "J": "-666.71",
  "K": "-779.41",
  "L": "-319.53",
  "M": "623.75",
  "N": "-905.47",
  "O": "98.61",
  "P": "671.77",
  "Q": "16.00",
  "R": "564.91",
  "S": "-3.83",
  "T": "-283.61",
  "U": "265.35",
  "V": "447.95",
  "W": "31.29",
  "X": "-748.27",
  "Y": "-737.98",
  "Z": "804.63",
  "AA": "466.40",
  "BB": "756.79",
  "CC": "321.80",
  "DD": "883.29",
  "EE": "901.52",
  "FF": "-648.41",
  "GG": "107.11",
  "HH": "897.86",
  "II": "-277.85",
  "KK": "861.95",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>DB</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "DB"],
  "id": "0000 | 0000S | XYZZ,BOB,DB",
  "expanded": true,
  "A": "-808.12",
  "B": "-454.71",
  "C": "-704.17",
  "D": "248.43",
  "E": "-412.86",
  "F": "178.17",
  "G": "446.68",
  "H": "372.73",
  "I": "-394.15",
  "J": "-539.85",
  "K": "728.83",
  "L": "-863.67",
  "M": "-88.09",
  "N": "84.46",
  "O": "-927.43",
  "P": "-671.65",
  "Q": "305.81",
  "R": "-922.42",
  "S": "268.11",
  "T": "480.22",
  "U": "-804.27",
  "V": "158.62",
  "W": "435.73",
  "X": "504.04",
  "Y": "-250.32",
  "Z": "793.56",
  "AA": "-416.62",
  "BB": "538.91",
  "CC": "-639.65",
  "DD": "-657.63",
  "EE": "661.46",
  "FF": "-872.51",
  "GG": "-68.62",
  "HH": "-974.18",
  "II": "661.41",
  "KK": "312.96",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>CD</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "CD"],
  "id": "0000 | 0000S | XYZZ,BOB,CD",
  "expanded": true,
  "A": "-603.22",
  "B": "825.76",
  "C": "-593.34",
  "D": "-730.60",
  "E": "-34.96",
  "F": "976.94",
  "G": "559.37",
  "H": "-545.27",
  "I": "-743.97",
  "J": "417.76",
  "K": "150.59",
  "L": "-481.77",
  "M": "129.58",
  "N": "116.70",
  "O": "227.76",
  "P": "562.52",
  "Q": "243.50",
  "R": "-745.73",
  "S": "-577.70",
  "T": "783.72",
  "U": "-604.21",
  "V": "501.28",
  "W": "860.47",
  "X": "-40.11",
  "Y": "-578.75",
  "Z": "581.70",
  "AA": "-240.85",
  "BB": "-998.23",
  "CC": "-919.40",
  "DD": "975.35",
  "EE": "-275.60",
  "FF": "-648.86",
  "GG": "-525.41",
  "HH": "603.17",
  "II": "-79.62",
  "KK": "161.92",
  "action": "..."
}, {
  "value": "<a class=\"see-more\">...</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "..."],
  "id": "0000 | 0000S | XYZZ,BOB,......",
  "expanded": true,
  "A": "-580.55",
  "B": "812.07",
  "C": "1000.08",
  "D": "666.88",
  "E": "921.16",
  "F": "-996.90",
  "G": "-99.60",
  "H": "429.04",
  "I": "-582.54",
  "J": "213.66",
  "K": "-668.18",
  "L": "-929.10",
  "M": "-346.33",
  "N": "865.78",
  "O": "161.33",
  "P": "-492.77",
  "Q": "5.15",
  "R": "214.67",
  "S": "336.61",
  "T": "-905.17",
  "U": "715.35",
  "V": "363.39",
  "W": "188.14",
  "X": "-672.31",
  "Y": "-130.20",
  "Z": "-325.04",
  "AA": "137.55",
  "BB": "-818.43",
  "CC": "-681.49",
  "DD": "428.13",
  "EE": "-220.27",
  "FF": "-258.90",
  "GG": "80.63",
  "HH": "-208.31",
  "II": "160.18",
  "KK": "910.22",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>SP</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "SP"],
  "id": "0000 | 0000S | XYZZ,BOB,...,SP",
  "expanded": true,
  "A": "634.91",
  "B": "24.27",
  "C": "204.72",
  "D": "-827.69",
  "E": "-681.59",
  "F": "102.41",
  "G": "591.02",
  "H": "350.88",
  "I": "842.28",
  "J": "-366.75",
  "K": "833.61",
  "L": "807.98",
  "M": "110.21",
  "N": "-860.62",
  "O": "-403.85",
  "P": "534.02",
  "Q": "-449.36",
  "R": "504.30",
  "S": "34.01",
  "T": "-402.80",
  "U": "426.86",
  "V": "-514.09",
  "W": "362.88",
  "X": "-944.25",
  "Y": "-74.14",
  "Z": "-394.27",
  "AA": "899.68",
  "BB": "-179.48",
  "CC": "-952.63",
  "DD": "861.88",
  "EE": "965.74",
  "FF": "578.23",
  "GG": "396.15",
  "HH": "-673.41",
  "II": "-2.37",
  "KK": "-54.24",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>DY</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "DY"],
  "id": "0000 | 0000S | XYZZ,BOB,...,DY",
  "expanded": true,
  "A": "-133.06",
  "B": "996.83",
  "C": "-787.95",
  "D": "-339.97",
  "E": "-112.28",
  "F": "-877.35",
  "G": "-150.63",
  "H": "-264.84",
  "I": "764.96",
  "J": "464.15",
  "K": "845.61",
  "L": "232.07",
  "M": "900.01",
  "N": "922.51",
  "O": "650.28",
  "P": "-430.56",
  "Q": "588.35",
  "R": "57.54",
  "S": "842.37",
  "T": "-20.04",
  "U": "201.16",
  "V": "979.36",
  "W": "858.19",
  "X": "971.26",
  "Y": "-107.63",
  "Z": "-816.65",
  "AA": "-803.21",
  "BB": "580.27",
  "CC": "458.97",
  "DD": "193.47",
  "EE": "-191.82",
  "FF": "937.82",
  "GG": "197.88",
  "HH": "-610.63",
  "II": "576.15",
  "KK": "-576.96",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>DK</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "DK"],
  "id": "0000 | 0000S | XYZZ,BOB,...,DK",
  "expanded": true,
  "A": "-20.46",
  "B": "-292.53",
  "C": "-516.68",
  "D": "-286.78",
  "E": "408.28",
  "F": "942.91",
  "G": "882.59",
  "H": "540.93",
  "I": "794.45",
  "J": "304.95",
  "K": "-567.21",
  "L": "394.41",
  "M": "-150.48",
  "N": "460.19",
  "O": "877.42",
  "P": "191.44",
  "Q": "409.89",
  "R": "246.97",
  "S": "-229.15",
  "T": "-772.17",
  "U": "-315.84",
  "V": "-156.91",
  "W": "411.87",
  "X": "391.43",
  "Y": "362.51",
  "Z": "-916.88",
  "AA": "786.04",
  "BB": "957.86",
  "CC": "-230.46",
  "DD": "474.73",
  "EE": "913.54",
  "FF": "-352.10",
  "GG": "-440.19",
  "HH": "-246.16",
  "II": "-337.05",
  "KK": "850.42",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>DA</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "DA"],
  "id": "0000 | 0000S | XYZZ,BOB,...,DA",
  "expanded": true,
  "A": "-365.96",
  "B": "-645.03",
  "C": "-856.50",
  "D": "-679.87",
  "E": "-991.53",
  "F": "503.96",
  "G": "-736.70",
  "H": "-382.16",
  "I": "-303.70",
  "J": "-294.11",
  "K": "-431.97",
  "L": "257.45",
  "M": "-997.68",
  "N": "-412.85",
  "O": "67.43",
  "P": "412.68",
  "Q": "-669.24",
  "R": "-249.55",
  "S": "-187.92",
  "T": "504.31",
  "U": "-808.97",
  "V": "641.55",
  "W": "367.78",
  "X": "767.18",
  "Y": "536.64",
  "Z": "252.44",
  "AA": "521.97",
  "BB": "61.24",
  "CC": "235.70",
  "DD": "-831.42",
  "EE": "-951.75",
  "FF": "795.77",
  "GG": "567.09",
  "HH": "-562.49",
  "II": "-650.77",
  "KK": "-588.22",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>CSC</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "CSC"],
  "id": "0000 | 0000S | XYZZ,BOB,...,CSC",
  "expanded": true,
  "A": "105.69",
  "B": "992.47",
  "C": "814.57",
  "D": "742.78",
  "E": "497.38",
  "F": "105.11",
  "G": "627.57",
  "H": "-237.06",
  "I": "311.19",
  "J": "-253.67",
  "K": "-470.39",
  "L": "-340.42",
  "M": "-580.09",
  "N": "-768.95",
  "O": "423.11",
  "P": "116.34",
  "Q": "814.53",
  "R": "-283.40",
  "S": "359.19",
  "T": "-435.76",
  "U": "595.32",
  "V": "-825.94",
  "W": "-949.24",
  "X": "-309.80",
  "Y": "831.84",
  "Z": "-413.37",
  "AA": "-353.37",
  "BB": "159.51",
  "CC": "788.73",
  "DD": "332.96",
  "EE": "-459.74",
  "FF": "-664.85",
  "GG": "-990.57",
  "HH": "570.03",
  "II": "37.09",
  "KK": "28.37",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>FC</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "FC"],
  "id": "0000 | 0000S | XYZZ,BOB,...,FC",
  "expanded": true,
  "A": "-29.58",
  "B": "-575.20",
  "C": "980.23",
  "D": "-719.73",
  "E": "9.30",
  "F": "-481.15",
  "G": "260.04",
  "H": "-87.17",
  "I": "385.12",
  "J": "399.72",
  "K": "-154.48",
  "L": "-39.12",
  "M": "-502.07",
  "N": "266.15",
  "O": "-96.33",
  "P": "251.79",
  "Q": "591.23",
  "R": "-736.11",
  "S": "303.80",
  "T": "452.57",
  "U": "876.67",
  "V": "-393.32",
  "W": "-754.85",
  "X": "-454.27",
  "Y": "37.53",
  "Z": "-331.90",
  "AA": "31.94",
  "BB": "-23.96",
  "CC": "-604.60",
  "DD": "-585.70",
  "EE": "547.05",
  "FF": "-150.63",
  "GG": "821.81",
  "HH": "-542.57",
  "II": "297.34",
  "KK": "-209.09",
  "action": "..."
}, {
  "value": "<a class=\"see-more\"><i class=\"mdi mdi-plus\"></i>NF</a>",
  "path": ["0000 | 0000S | XYZZ", "BOB", "...", "NF"],
  "id": "0000 | 0000S | XYZZ,BOB,...,NF",
  "expanded": true,
  "A": "-976.73",
  "B": "181.00",
  "C": "-383.48",
  "D": "-685.75",
  "E": "684.49",
  "F": "703.62",
  "G": "555.66",
  "H": "43.52",
  "I": "529.44",
  "J": "-428.73",
  "K": "-543.14",
  "L": "-419.22",
  "M": "96.37",
  "N": "-168.84",
  "O": "336.97",
  "P": "-597.69",
  "Q": "-496.94",
  "R": "292.90",
  "S": "-47.86",
  "T": "641.85",
  "U": "-956.02",
  "V": "-530.67",
  "W": "-47.63",
  "X": "-921.74",
  "Y": "-725.20",
  "Z": "-455.44",
  "AA": "889.71",
  "BB": "532.25",
  "CC": "-705.67",
  "DD": "-907.79",
  "EE": "-895.13",
  "FF": "308.94",
  "GG": "-749.79",
  "HH": "745.44",
  "II": "-783.83",
  "KK": "626.80",
  "action": "..."
}];

// #endregion

// #region Grid Options

const gridOptions = {
  columnDefs: [],
  rowData: rowData.slice(0),
  treeData: true,
  animateRows: true,
  groupDefaultExpanded: 2,
  onRowClicked: (params) => onRowClicked(params),
  components: {
    'groupCellRenderer': GroupCellRenderer
  },
  getDataPath: (data) => {
    return data.path;
  },
  onGridReady: (params) => {
    window.setTimeout(() => {
      params.api.setColumnDefs(columnDefs);
      params.api.sizeColumnsToFit();
    }, 300);
    params.api.sizeColumnsToFit();
  },
  autoGroupColumnDef: {
    headerName: "Group",
    cellRenderer: 'groupCellRenderer',
    cellRendererParams: {
      suppressCount: true
    }
  }
};

// #endregion

// #region Event Handlers

function cellClass(params) {
  let classes = ['text-right'];
  if (params.value < 0) {
    classes.push('red');
  }
  return classes;
}

function onFilterTextBoxChanged() {
  window.setTimeout(() => {
    gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value)
  }, 300);
}

function onRowClicked(params) {
  if (params.node) {
    params.node.data.expanded = !params.node.expanded;
    params.node.setExpanded(!params.node.expanded);
    if (params.node.data.value.indexOf('...') !== -1) {
      //rowData.splice(params.rowIndex,1);
      gridOptions.api.setRowData([]);
      removeRowData(params.rowIndex, params.node.childrenAfterGroup.map((child) => { return child.rowIndex; }));
      gridOptions.api.setRowData(rowData.slice(0));
    }
  }
}

function removeRowData(rowIndex, childIndexArr) {
  childIndexArr.forEach((index) => {
    rowData[index].path.splice(rowData[index].path.length - 2, 1);
  });
  rowData.splice(rowIndex, 1);  
}

document.addEventListener("DOMContentLoaded", () => {
  var eGridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

// #endregion
