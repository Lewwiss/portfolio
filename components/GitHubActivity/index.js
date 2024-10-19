import { useEffect, useState } from 'react';

const GitHubActivity = ({ username, period, color, defaultColor, gap }) => {
    const [tableLoading, setTableLoading] = useState(true);
    const [tableData, setTableData] = useState(null);
    const [tablePeriod] = useState(period || 'year');
    const [tableColor] = useState(color || '#39d353');
    const [tableDefaultColor] = useState(defaultColor || '#161b22');
    const [tableGap] = useState(gap || 3);
    const currentDateFormatted = () => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // No need to pad with zeros
        const day = date.getDate(); // No need to pad with zeros
        return `${year}-${month}-${day}`;
    }

    const hexToRgba = (hex, a = 1) => {
        let c = hex.slice(1).split('');
        if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        c = '0x' + c.join('');
        return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${a})`;
    };

    const fetchGithubTable = async () => {
        const res = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgithub.com%2Fusers%2F${username}%2Fcontributions`);
        setTableData(await res.text());
        setTableLoading(false);
    };

    const addTableStyle = () => {
        const styleElement = document.createElement('style');
        const tdCount = () => {
            switch (tablePeriod) {
                case 'year':
                    return 53;
                case 'month':
                    return 4;
                case 'week':
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
            .ContributionCalendar-grid > tbody {
                display: flex;
                flex-direction: column;
                gap: ${tableGap}px;
                border-spacing: 0;
            }
            .ContributionCalendar-grid > tbody > tr {
                display: flex;
                gap: ${tableGap}px;
                border-spacing: 0;
            }
            /* Hide the first td element in the first row. */
            .ContributionCalendar-grid > tbody > tr:first-child > td:nth-child(-n+1) {
                display: none;
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
            .ContributionCalendar-grid > thead {
                display: none;
            }
            .ContributionCalendar-grid > caption {
                display: none;
            }
            .ContributionCalendar div:nth-child(2) {
                display: none;
            }
            .ContributionCalendar > div > tool-tip {
                display: none;
            }
            .graph-before-activity-overview {
                border: 0px;
            }
            .js-yearly-contributions > div > h2 {
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

    if (tableLoading) return (
        <table>
            <tbody style={{display: 'flex', flexDirection: 'column', gap: `${tableGap}px`, borderSpacing: 0}}>
                {
                    Array.from({ length: 7 }).map((_, i) => {
                        return (
                            <tr key={i} style={{ height: '11px', display: 'flex', gap: `${tableGap}px`, borderSpacing: 0 }}>
                                {
                                    Array.from({ length: period === 'year' ? 53 : period === 'month' ? 4 : 1 }).map((_, j) => {
                                        return <td key={j} className='ContributionCalendar-day' style={{width: '11px'}} />
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );

    return <div dangerouslySetInnerHTML={{ __html: tableData }} />;
}

export default GitHubActivity;
