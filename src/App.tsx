import { FC, useState } from 'react';
import {
  firstTableRecords,
  secondTableRecords,
} from './components/Table/records';
import Table from './components/Table/Table';
import FirstTabContent from './FirstTabContent';
import SecondTabContent from './SecondTabContent';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      text: 'First tab',
    },
    {
      id: 1,
      text: 'Second tab',
    },
  ];

  const renderContent = () => {
    if (activeIndex === 0) return <FirstTabContent />;
    return <SecondTabContent />;
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {tabs.map((tab) => {
          return (
            <div key={tab.id}>
              <button
                onClick={() => setActiveIndex(tab?.id)}
                className={`${activeIndex === tab?.id && 'active'}`}
              >
                {tab?.text}
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '2rem' }}>{renderContent()}</div>
      <div style={{ margin: '2rem 0' }}>
        <Table records={firstTableRecords} />
      </div>
      <Table records={secondTableRecords} />
    </div>
  );
};
