import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Rank",
    accessor: "rank",
    Footer: "Rank",
    // Filter: ColumnFilter
  },
  {
    Header: "Player",
    accessor: "player",
    Footer: "Player",
    // Filter: ColumnFilter
  },
  {
    Header: "Headshots",
    accessor: "headshots",
    Footer: "Headshots",
    // Cell: ({ value }) => {
    //   return format(new Date(value), "dd/MM/yyyy");
    // },
    // Filter: ColumnFilter
  },
  {
    Header: "Bots Killed",
    accessor: "bots_killed",
    Footer: "Bots Killed",
    // Filter: ColumnFilter
  },
  {
    Header: "Time Survived",
    accessor: "time_survived",
    Footer: "Time Survived",
    // Filter: ColumnFilter
  },
  {
    Header: "Wave Reached",
    accessor: "wave_reached",
    Footer: "Wave Reached",
    // Filter: ColumnFilter
  },
  {
    Header: "Score",
    accessor: "score",
    Footer: "Score",
    // Filter: ColumnFilter
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      { Header: "Rank", accessor: "rank", Footer: "Rank" },
      { Header: "Player", accessor: "player", Footer: "Player" },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Headshots",
        accessor: "headshots",
        Footer: "Headshots",
      },
      { Header: "Bots Killed", accessor: "bots_killed", Footer: "Bots Killed" },
      {
        Header: "Time Survived",
        accessor: "time_survived",
        Footer: "Time Survived",
      },
    ],
  },
  {
    Header: "Scores",
    Footer: "Scores",
    columns: [
      {
        Header: "Wave Reached",
        accessor: "wave_reached",
        Footer: "Wave Reached",
      },
      { Header: "Score", accessor: "score", Footer: "Score" },
    ],
  },
];
