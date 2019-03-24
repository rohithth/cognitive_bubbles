var BUBBLE_PARAMETERS = {
    "report_title": "Bambu Cognitive Bubbles",
    "footer_text": "Computational Algorithm for Conviction List Insights. Beta 1.0",
    "width": 940,
    "height": 700,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "Bambu Long Term Rank",
    "numeric_fields": ["Bambu Long Term Rank", "Relative Valuation Rank", "Percent Away from Target Price", "Pct away from Target Price", "Dividend Yield","Area", "Population", "Density", "Bambu Short Term Rank", "Last Close", "1yr Total Return", "1 Mth Total Return","Colouring"],
    "fill_color": {
        "data_field": "1 Mth Price change",
        "color_groups": {
            "Negative Return": "#d84b2a",
            "Between 0 - 10% Return": "#beccae", //93B664 //B0CE74   { FF6258  96CEB3 R G Combo also 39A985}
            "Greater than 10% Return": "#7aa25c" //39A985 39A985  22EE5B 00BA28
        }
    },

//    "Negative Return": "#d84b2a",F3362A
  //  "Between 0 - 10% Return": "#beccae",5DAB60goodgreen DFBC3Cgood yello goodgreen93B664
  //  "Greater than 10% Return": "#7aa25c"4CA10C  239C73good green 39A985verygood green
    "tooltip": [
        {"title": "Stock", "data_field": "Stock"},
      //  {"title": "Country", "data_field": "Country"},
        {"title": "Sector", "data_field": "Sector"},
        {"title": "Last Close", "data_field": "Last Close", "format_string": ""},
        {"title": "Pct away from Target Price", "data_field": "Pct away from Target Price", "format_string": ".0%"},
        {"title": "Total Return 1 Yr", "data_field": "1yr Total Return", "format_string": ".0%"},
        {"title": "Total Return 1 Mth", "data_field": "1 Mth Total Return", "format_string": ".0%"},
        {"title": "Dividend Yield", "data_field": "Dividend Yield", "format_string": ".0%"},
        {"title": "Bambu Long Term Rank", "data_field": "Bambu Long Term Rank", "format_string": ",.2r"},
        {"title": "Bambu Short Term Rank", "data_field": "Bambu Short Term Rank", "format_string": ",.2r"},
      //  {"title": "Relative Valuation Rank", "data_field": "Relative Valuation Rank", "format_string": ",.2r"},
//        {"title": "Population", "data_field": "Population", "format_string": ",.2r"},
//        {"title": "Area (km^2)", "data_field": "Area", "format_string": ",.2r"},
//        {"title": "Density (pop / km^2)", "data_field": "Density"}
    ],
    "modes": [
        {
            "button_text": "Equity Universe",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Country Concentration",
            "button_id": "Country",
            "type": "grid",
            "labels": ["US", "China", "Hong Kong", "Singapore", "United Kingdom", "Netherlands", "Switzerland", "Germany", "Japan", "Macau", "France"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Country"
        },
        {
            "button_text": "Sector",
            "button_id": "region",
            "type": "grid",
            "labels": ["Financials", "Energy", "Materials", "Consumer Discretionary", "Consumer Staples", "Technology", "Telco", "Industrials", "Health Care", "Real Estate", "Utilities"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Sector"
        },
        {
            "button_text": "1M Return Cluster",
            "button_id": "1 Mth Price change",
            "type": "grid",
            "labels": ["Greater than 10% Return", "Between 0 - 10% Return", "Negative Return"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "1 Mth Price change"
        },
        {
            "button_text": "Neural Equity Score",
            "button_id": "area_vs_population",
            "type": "scatterplot",
            "x_data_field": "Bambu Short Term Rank",
            "y_data_field": "Bambu Long Term Rank",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        },
        {
            "button_text": "Dividend Basket",
            "type": "grid",
            "button_id": "Dividend Yield greater than 5pc",
            "labels": ["Greater than 5% Yield", "Less than 5% Yield", "No Dividend"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Dividend Yield greater than 5pc"
        },
        {
            "button_text": "1Yr Quartile",
            "type": "grid",
            "button_id": "Quartile",
            "labels": ["1st Quartile", "2nd Quartile", "3rd Quartile", "4th Quartile"],
            "grid_dimensions": {"rows": 1, "columns": 4},
            "data_field": "Quartile"
        },
        {
            "button_text": "Buy Now Sell Now",
            "type": "grid",
            "button_id": "Ranking",
            "labels": ["Ranks in the Top 25%", "Ranks in the Bottom 25%", "Rest All"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Ranking"
        }

    //    {
  //          "button_text": "World Map",
  //          "button_id": "world_map",
  //          "type": "map",
  //          "latitude_field": "Latitude",
  //          "longitude_field": "Longitude"
  //      }
    ]
};
