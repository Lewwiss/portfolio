import { useEffect, useState } from 'react';

const GitHubActivity = ({ username, period, color, defaultColor, gap }) => {
    const [tableData, setTableData] = useState(null);
    const [tablePeriod] = useState(period || 'yearly');
    const [tableColor] = useState(color || '#39d353'); // #39d353 default
    const [tableDefaultColor] = useState(defaultColor || '#161b22'); // #161b22 default
    const [tableGap] = useState(gap || 3);

    const hexToRgba = (hex, a = 1) => {
        let c = hex.slice(1).split('');
        if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        c = '0x' + c.join('');
        return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${a})`;
    };

    const fetchGithubTable = async () => {
        const res = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgithub.com%2Fusers%2F${username}%2Fcontributions`);
        setTableData(await res.text());
    }

    const addTableStyle = () => {
        const styleElement = document.createElement('style');
        const tdCount = () => {
            switch (tablePeriod) {
                case 'yearly':
                    return 53;
                case 'monthly':
                    return 4;
                case 'weekly':
                    return 1;
                default:
                    return 53;
            }
        }
        styleElement.innerText = `
            /* Applying table colors. */
            .ContributionCalendar-day[data-level="4"] {
                fill: ${hexToRgba(tableColor, 1)};
                background-color: ${hexToRgba(tableColor, 1)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="3"] {
                fill: ${hexToRgba(tableColor, 0.75)};
                background-color: ${hexToRgba(tableColor, 0.75)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="2"] {
                fill: ${hexToRgba(tableColor, 0.5)};
                background-color: ${hexToRgba(tableColor, 0.5)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="1"] {
                fill: ${hexToRgba(tableColor, 0.25)};
                background-color: ${hexToRgba(tableColor, 0.25)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day, .ContributionCalendar-day[data-level="0"] {
                fill: ${tableDefaultColor};
                shape-rendering: geometricPrecision;
                background-color: ${tableDefaultColor};
                border-radius: 2px;
                outline: 1px solid rgba(27, 31, 35, 0.06);
                outline-offset: -1px;
            }

            /* Fix table spacing. */
            tbody {
                display: flex;
                flex-direction: column;
                gap: ${tableGap}px;
                border-spacing: 0;
            }
            tr {
                display: flex;
                gap: ${tableGap}px;
                border-spacing: 0;
            }

            /* Adjust to correct period */
            .ContributionCalendar-grid > tbody > tr > td {
                display: none;
            }
            .ContributionCalendar-grid > tbody > tr > td:nth-last-child(-n+${tdCount()}) {
                display: table-cell;
            }

            /* Hide some elements. */
            .ContributionCalendar-label {
                display: none;
            }
            thead {
                display: none;
            }
            caption {
                display: none;
            }
            .js-yearly-contributions > div > h2 {
                display: none;
            }
            .graph-before-activity-overview {
                border: 0px;
            }
            .js-calendar-graph div:nth-child(2) {
                display: none;
            }
        `;
        document.body.appendChild(styleElement);
    };
    
    useEffect(() => {
        fetchGithubTable();
    }, []);

    useEffect(() => {
        addTableStyle();
    }, [username, period, color]);

    return <div dangerouslySetInnerHTML={{ __html: tableData }} />
}

export default GitHubActivity;

/*
.ContributionCalendar-day[data-level="4"] {
                fill: #39d353;
                background-color: #39d353;
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="3"] {
                fill: #26a641;
                background-color: #26a641;
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="2"] {
                fill: #006d32;
                background-color: #006d32;
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="1"] {
                fill: #0e4429;
                background-color: #0e4429;
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day, .ContributionCalendar-day[data-level="0"] {
                fill: #161b22;
                shape-rendering: geometricPrecision;
                background-color: #161b22;
                border-radius: 2px;
                outline: 1px solid rgba(27, 31, 35, 0.06);
                outline-offset: -1px;
            }
                */