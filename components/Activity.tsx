"use client";

import { useEffect, useState } from 'react';
import { config } from '@/config';
import { colors } from '@/tailwind.config';

interface Props {
    period?: 'year' | 'month' | 'week';
    color?: string;
    defaultColor?: string;
    gap?: number;
}

const Activity = ({ period = 'year', color = config.color, defaultColor = colors[config.theme][800], gap = 4 }: Props) => {
    const [loading, setloading] = useState(true);
    const [tableData, setTableData] = useState<string | null>(null);

    const hexToRgba = (hex: string, a = 1): string => {
        let c = hex.slice(1).split('');
        if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        const colorInt = parseInt(c.join(''), 16);
        return `rgba(${(colorInt >> 16) & 255}, ${(colorInt >> 8) & 255}, ${colorInt & 255}, ${a})`;
    };

    const fetchGitHubTable = async () => {
        try {
            const res = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgithub.com%2Fusers%2F${config.username}%2Fcontributions`);
            setTableData(await res.text());
        } catch (error) {
            console.error('Failed to fetch GitHub activity:', error);
        } finally {
            setloading(false);
        }
    };

    const getColumnCount = (): number => {
        switch (period) {
            case 'year':
                return 53;
            case 'month':
                return 4;
            case 'week':
                return 1;
            default:
                return 53;
        }
    };

    const addTableStyle = () => {
        const styleElement = document.createElement('style');
        const tdCount = getColumnCount();
        styleElement.innerText = `
            #user-activity-overview {
                display: none;
            }
            .ContributionCalendar-day[data-level="4"] {
                fill: ${hexToRgba(defaultColor, 1)};
                background-color: ${hexToRgba(color, 1)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="3"] {
                fill: ${hexToRgba(color, 0.75)};
                background-color: ${hexToRgba(color, 0.75)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="2"] {
                fill: ${hexToRgba(color, 0.5)};
                background-color: ${hexToRgba(color, 0.5)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day[data-level="1"] {
                fill: ${hexToRgba(color, 0.25)};
                background-color: ${hexToRgba(color, 0.25)};
                outline: 1px solid rgba(255, 255, 255, 0.05);
            }
            .ContributionCalendar-day, .ContributionCalendar-day[data-level="0"] {
                fill: ${defaultColor};
                shape-rendering: geometricPrecision;
                background-color: ${defaultColor};
                border-radius: 2px;
                outline: 1px solid rgba(27, 31, 35, 0.06);
                outline-offset: -1px;
                height: 11px !important;
                width: 11px !important;
            }
            .ContributionCalendar-grid > tbody {
                display: flex;
                flex-direction: column;
                gap: ${gap}px;
                border-spacing: 0;
            }
            .ContributionCalendar-grid > tbody > tr {
                display: flex;
                gap: ${gap}px;
                border-spacing: 0;
                height: 11px !important;
            }
            .ContributionCalendar-grid > tbody > tr:first-child > td:nth-child(-n+1) {
                display: none;
            }
            .ContributionCalendar-grid > tbody > tr > td {
                display: none;
            }
            .ContributionCalendar-grid > tbody > tr > td:nth-last-child(-n+${tdCount}) {
                display: table-cell;
            }
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
                padding: 0px;
            }
            .js-yearly-contributions > div > h2 {
                display: none;
            }
        `;
        document.body.appendChild(styleElement);
    };

    useEffect(() => {
        fetchGitHubTable();
    }, []);

    useEffect(() => {
        addTableStyle();
    }, []);

    if (loading) {
        return (
            <table>
                <tbody style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <tr key={i} style={{ display: 'flex', gap: `${gap}px` }}>
                            {Array.from({ length: getColumnCount() }).map((_, j) => (
                                <td key={j} className="ContributionCalendar-day" style={{ width: '11px', height: '11px' }} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return <div dangerouslySetInnerHTML={{ __html: tableData || '' }} />;
};

export default Activity;
