/**
 * @file
 * Pie Chart Web Part for SharePoint Framework SPFx
 *
 * Author: Olivier Carpentier
 * Copyright (c) 2016
 */
export interface ILineChartWebPartProps {
  items: any[];
  responsive: boolean;
  width: number;
  height: number;
  horizontal: boolean;
  titleEnable: boolean;
  title: string;
  position: string;
  titleFont: string;
  titleSize: string;
  titleColor: string;
  legendEnable: boolean;
  legendPosition: string;
  legendFont: string;
  legendSize: string;
  legendColor: string;
  xAxesEnable: boolean;
  yAxesEnable: boolean;
  axesFont: string;
  axesFontSize: string;
  axesFontColor: string;
  borderWidth: number;
  pointStyle: string;
  fill: string;
  lineTension: number;
  showLine: boolean;
  fillColor: string;
  steppedLine: boolean;
}
