// App.tsx
import React, { useState } from 'react';

const colors: Record<string, string[]> = {
    Blue: ["#0000FF", "#0000CC", "#000099", "#000066", "#000033", "#3333FF", "#6666FF", "#9999FF", "#CCCCFF", "#FFFFCC"],
    Green: ["#008000", "#006600", "#004C00", "#003300", "#001A00", "#33CC33", "#66FF66", "#99FF99", "#CCFFCC", "#FFFFE6"],
    Red: ["#FF0000", "#CC0000", "#990000", "#660000", "#330000", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC", "#FFE6E6"],
    Yellow: ["#FFFF00", "#CCCC00", "#999900", "#666600", "#333300","#FFFF33","#FFFF66","#FFFF99","#FFFFCC","#FFFFE6"],
    Orange: ["#FFA500","#FF8C00","#FF7000","#FF5400","#FF3800","#FFAC33","#FFC266","#FFD799","#FFECCC","#FFF4E6"],
    Pink: ["#FFC0CB","#FFB6C1","#FFA8B9","#FF9BB1","#FF8DA9","#FFAEC0","#FFC8D1","#FFE2E2","#FFF0F3","#FFF8FA"]
};

const App: React.FC = () => {
    const [bgColor, setBgColor] = useState<string>('');

    const changeColor = () => {
        const colorGroups = Object.values(colors);
        const colorGroup = colorGroups[Math.floor(Math.random() * colorGroups.length)];
        const color = colorGroup[Math.floor(Math.random() * colorGroup.length)];
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, height: '100vh', transition: 'background-color 0.5s', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: '#fff' }}>Bem-vindo ao Colorama!</h1>
            <p style={{ color: '#fff' }}>A cor de fundo atual é {bgColor}</p>
            <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Atualizar</button>
        </div>
    );
};

export default App;
