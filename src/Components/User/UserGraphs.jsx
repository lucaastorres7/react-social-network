import React from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const userGraphsStyle = {
  graph: "grid grid-cols-2 gap-[2rem] max-sm:grid-cols-1 mb-[2rem]",
  item: "shadow-[0_10px_20px_#9c9c9c] grid rounded-sm items-center",
  total: "col-start-1 col-end-3 p-[2rem] text-[2rem]",
};

const UserGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useState(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    console.log(graphData);

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${userGraphsStyle.graph} animeLeft`}>
      <div className={`${userGraphsStyle.total} ${userGraphsStyle.item}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={`${userGraphsStyle.item}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>

      <div className={`${userGraphsStyle.item}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserGraphs;
