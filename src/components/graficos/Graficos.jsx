import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar.jsx";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Api from "../../Services/Api.jsx";
import styles from "./Graficos.module.scss";
import HomeIcon from "../../assets/Dashboard/home header.png";
import SetaIcon from "../../assets/Dashboard/Vector.png";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28BFE", "#FE8BF0", "#FF4C4C",
];

export default function Graficos() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: reembolsos } = await Api.get("/reembolsos");
        const counts = reembolsos.reduce((acc, cur) => {
          acc[cur.tipo_reembolso] = (acc[cur.tipo_reembolso] || 0) + 1;
          return acc;
        }, {});
        const chartData = Object.entries(counts).map(([name, value]) => ({
          name,
          value,
        }));
        setData(chartData);
      } catch (err) {
        console.error("Erro ao buscar dados de reembolsos:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.mainGrafico}>
        <header className={styles.header}>
          <img 
            src={HomeIcon} 
            alt="Início" 
            onClick={() => navigate("/reembolsos")}
            style={{ cursor: 'pointer' }} 
          />
          <img src={SetaIcon} alt="seta" />
          <p 
            onClick={() => navigate("/historico")}
            style={{ cursor: 'pointer', fontWeight: 'normal' }}
          >
            Histórico 
          </p>
          <img src={SetaIcon} alt="seta" />
          <p>Gráficos</p>
        </header>
        <div className={styles.pageTitleContainer}>
          <h2>Quantidade de Despesas por Categoria</h2>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [value, "Quantidade"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </main>
    </div>
  );
}