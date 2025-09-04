// src/components/ActivityChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "M", tasks: 2 },
  { name: "T", tasks: 5 },
  { name: "W", tasks: 3 },
  { name: "T", tasks: 6 },
  { name: "F", tasks: 4 },
  { name: "S", tasks: 5 },
  { name: "S", tasks: 2 },
];

export default function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="tasks" stroke="#4f46e5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
